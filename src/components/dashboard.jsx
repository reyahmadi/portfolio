import React, { useState } from 'react';
import {
  Typography, Box, Container,
  Grid, Card, CardContent, Chip, Divider,
  Paper, Stack, List, ListItem,
  ListItemIcon, ListItemText, Avatar,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, LinearProgress,
  Accordion, AccordionSummary, AccordionDetails,
  Tab, Tabs,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { CaseStudyShell, AnimatedSection } from './caseStudyLayout';

const DASHBOARD_NAV_SECTIONS = [
  { id: 'problem', label: 'Problem' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'figma', label: 'Prototype' },
  { id: 'usability', label: 'Research' },
  { id: 'implementation', label: 'Build' },
  { id: 'reflection', label: 'Reflection' },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
    <Box sx={{ width: 20, height: 1, bgcolor: 'primary.main' }} />
    <Typography variant="caption" color="primary.main">{children}</Typography>
  </Box>
);

const Quote = ({ text, speaker, role }) => (
  <Box sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2.5, py: 0.5, my: 1 }}>
    <FormatQuoteIcon sx={{ color: 'secondary.main', fontSize: 18, mb: 0.5 }} />
    <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>"{text}"</Typography>
    <Typography variant="caption" color="text.disabled" sx={{ textTransform: 'none', letterSpacing: 0, fontSize: '12px' }}>— {speaker}, {role}</Typography>
  </Box>
);

const FindingCard = ({ num, title, body, severity = 'neutral' }) => {
  const colors = {
    positive: { bl: 'success.main', icon: <CheckCircleOutlineIcon sx={{ color: 'success.main', fontSize: 16 }} /> },
    negative: { bl: 'error.main',   icon: <WarningAmberIcon sx={{ color: 'error.main', fontSize: 16 }} /> },
    neutral:  { bl: 'divider',      icon: <LightbulbOutlinedIcon sx={{ color: 'text.disabled', fontSize: 16 }} /> },
  };
  const c = colors[severity];
  return (
    <Card sx={{ borderLeft: '3px solid', borderLeftColor: c.bl }}>
      <CardContent>
        <Grid container spacing={1.5} alignItems="flex-start">
          <Grid item>
            <Avatar sx={{ bgcolor: 'background.default', width: 30, height: 30, fontFamily: "'DM Serif Display'", fontSize: '0.9rem', color: 'text.secondary', border: '1px solid', borderColor: 'divider' }}>
              {num}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mb: 0.5 }}>
              {c.icon}
              <Typography variant="h4">{title}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">{body}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// ─── SECTIONS ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <AnimatedSection
      immediate
      sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 7, md: 9 }, borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="md">
        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          <Chip icon={<DesignServicesIcon sx={{ fontSize: '14px !important' }} />} label="UX Design" size="small" sx={{ bgcolor: 'primary.light', color: 'primary.main' }} />
          <Chip icon={<CodeIcon sx={{ fontSize: '14px !important' }} />} label="React Implementation" size="small" sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }} />
          <Chip icon={<PeopleOutlineIcon sx={{ fontSize: '14px !important' }} />} label="Usability Research" size="small" sx={{ bgcolor: 'primary.light', color: 'primary.dark' }} />
        </Stack>
        <Typography variant="h2" sx={{ mb: 2.5, maxWidth: 620 }}>
          Designing a learning analytics dashboard — from concept to code
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 4, fontSize: '16px' }}>
          A full design and implementation project: generating multiple dashboard concepts, prototyping in Figma, evaluating with users, and shipping a working React application for a university course analytics platform.
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          {[
            { label: 'Context', value: 'University course project' },
            { label: 'My role', value: 'UX Designer & Front-end Developer' },
            { label: 'Deliverables', value: 'Figma prototypes + React app' },
          ].map(({ label, value }) => (
            <Grid item key={label}>
              <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.5 }}>{label}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 400, color: 'text.primary' }}>{value}</Typography>
            </Grid>
          ))}
          <Grid item>
            <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.75 }}>Stack</Typography>
            <Stack direction="row" flexWrap="wrap" gap={0.75}>
              {['React 18', 'MUI v5', 'Highcharts', 'Figma'].map(t => (
                <Chip key={t} label={t} size="small" sx={{ bgcolor: '#EDEAE3', color: 'text.secondary', borderRadius: '12px' }} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AnimatedSection>
  );
}

function ProblemSection() {
  return (
    <AnimatedSection id="problem" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>01 — Problem & Context</SectionLabel>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Students and teachers lack actionable understanding of grades and effort
          </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        As the final project for IAT 806: Interdisciplinary Design Approaches to Computing, we were tasked with designing and building an interactive system through four phases: 
        ideation, design, implementation, and usability evaluation. I chose to address a gap in existing learning management tools platforms like Canvas that lack contextualising 
        student performance against peers or revealing the relationship between time invested and outcomes. This lack of actionable, comparative feedback limits students' ability
         to self-regulate their learning and make informed decisions about where to direct their effort.
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: 'Primary users', value: 'Undergraduate students in a programming course' },
            { label: 'Core need', value: 'Contextual performance feedback (grades and effort)' },
            { label: 'Design constraint', value: 'Support self-regulation; ' },
            { label: 'Technical constraint', value: 'Implementable as a single-semester React project' },
          ].map(({ label, value }) => (
            <Grid item xs={12} sm={6} key={label}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.75 }}>{label}</Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 400 }}>{value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AnimatedSection>
  );
}

function IdeationSection() {
  const [expanded, setExpanded] = useState('concept-c');
  const concepts = [
    {
      id: 'concept-a', name: 'Concept A — Comparison based on grade group', chosen: false,
      summary: "A student-facing dashboard providing both outcome-oriented feedback (grades) and process-oriented feedback (study behaviour). A radar chart compares grade distributions across assignments to flag difficulty outliers. A bar chart shows the current cumulative grade distribution for the class. A timeline section visualises when and how long students in each grade band (A, B, C and below) engaged with assignments filterable by group via a dropdown.",
      rationale: 'Emphasises trend over time rather than point-in-time rank. Students can see whether their performance is improving, plateauing, or declining relative to the class.',
      tradeoffs: 'Does not reveal effort-outcome relationships at the individual peer level. Line charts can be hard to parse when the student is close to the class average.',
      uiElements: ['Line chart: grade over assignments', 'Overlaid class average band', 'Time-spent secondary axis', 'Assignment selector'],
    },
    {
      id: 'concept-b', name: 'Concept B — Comparison with the whole class and top students', chosen: false,
      summary: 'A student-facing dashboard that corrects misconceptions about peer behaviour by showing accurate time-on-task data, comparing the student\'s study time against the class average and the top 20% of performers. A leaderboard ranks students by total time spent. An expand toggle replaces a horizontal bar chart with a timeline heatmap showing how time is distributed across days and hours.',
      rationale: 'Students might overestimate how much peers procrastinate, which reinforces their own avoidance. Showing accurate time data from high performers provides a credible, motivating reference point. The leaderboard adds competitive motivation for students already performing well.',
      tradeoffs: 'Dense with data; requires visual literacy. Risk of students fixating on rank rather than on learning strategies.',
      uiElements: ['Scatter plot: grade vs. time', 'Highlighted "you" dot', 'Quadrant overlay (high effort / low effort)', 'Assignment filter'],
    },
    {
      id: 'concept-c', name: 'Concept C — Comparison with peers', chosen: true,
      summary: 
      'A student-facing dashboard that groups peers by expected grade and visualises each student\'s performance relative to their relevant peer group. An overview shows grade and time-spent rankings with the student highlighted, and a double-line chart tracks their trajectory against the group average across all assignments. Students can drill into a specific assignment via a dropdown to see per-assignment comparisons.',
      rationale: 'Balances detail and overview. The dual chart layout makes the effort-grade relationship visible without the cognitive load of a scatter plot. The sortable table gives students control over how they interpret peer data.',
      tradeoffs: 'More components to maintain. The bar chart view is only available per-assignment, not across all assignments simultaneously.',
      uiElements: ['Line chart (overview mode)', 'Bar charts per assignment (grade + time)', 'Sortable peer comparison table', 'Assignment dropdown selector'],
    },
  ];

  return (
    <AnimatedSection id="ideation" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>02 — Ideation & Concept Development</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Three directions, one design question</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The ideation phase explored three dashboard concepts, each making a different bet on what contextual information would best support student self-regulation. All three were grounded in social comparison theory and Pekrun's achievement emotions framework.
        </Typography>
        <Stack spacing={1.5}>
          {concepts.map(c => (
            <Accordion
              key={c.id}
              expanded={expanded === c.id}
              onChange={() => setExpanded(expanded === c.id ? '' : c.id)}
              sx={{
                border: '1px solid', borderColor: c.chosen ? 'secondary.main' : 'divider',
                borderRadius: '12px !important', boxShadow: 'none', overflow: 'hidden',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 52 }}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Typography variant="h4" sx={{ color: c.chosen ? 'secondary.main' : 'text.primary' }}>{c.name}</Typography>
                  {c.chosen && <Chip label="Implemented" size="small" sx={{ bgcolor: 'secondary.light', color: 'secondary.main', fontWeight: 500 }} />}
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.5 }}>Summary</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{c.summary}</Typography>
                    <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.5 }}>Design rationale</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{c.rationale}</Typography>
                    <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.5 }}>Tradeoffs</Typography>
                    <Typography variant="body2" color="text.secondary">{c.tradeoffs}</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.75 }}>UI elements</Typography>
                    <List dense disablePadding>
                      {c.uiElements.map(el => (
                        <ListItem key={el} disablePadding sx={{ py: 0.4 }}>
                          <ListItemIcon sx={{ minWidth: 18 }}><Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: c.chosen ? 'secondary.main' : 'text.disabled' }} /></ListItemIcon>
                          <ListItemText primary={el} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
        <Paper elevation={0} sx={{ bgcolor: 'primary.light', borderRadius: 3, p: 3, mt: 3 }}>
          <Typography variant="caption" color="primary.main" display="block" sx={{ mb: 1 }}>Why Concept C was selected</Typography>
          <Typography variant="body2" color="text.secondary">
            Concept C was chosen because it offered the most complete picture of both grade and effort data while keeping each view legible. The dual-chart layout directly implements the key motivational design principle: <em>showing that peers with higher grades spent more time</em> — the signal most likely to drive effort investment rather than comparison anxiety. The sortable table adds student agency, letting users explore peer data on their own terms.
          </Typography>
        </Paper>
      </Container>
    </AnimatedSection>
  );
}

function FigmaSection() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const screens = [
    {
      label: 'Overview mode',
      desc: "Line charts showing class average vs. student's grade and time-spent across all four assignments. Gives a semester-wide trend view at a glance.",
      details: ['Dropdown defaults to "overview"', 'Two line charts stacked: grades (blue) and time (orange)', 'Right panel: sortable table with all peers\' current averages', 'Student row highlighted in light blue'],
      chartType: 'line',
    },
    {
      label: 'Per-assignment mode',
      desc: "Bar charts showing each peer's grade and time spent on a selected assignment. The student's own bar is differentiated by a lighter shade.",
      details: ['Bars sorted ascending by grade by default', 'Student bar uses a lighter tint vs peer bars', 'Peer table updates to show assignment-specific data', 'Hover tooltips on bars show exact values'],
      chartType: 'bar',
    },
    {
      label: 'Ranking table',
      desc: 'A sortable MUI table showing all peers by anonymised ID, with grade and time columns. Clicking any column header toggles ascending/descending sort.',
      details: ['Columns: rank, student ID, grade, time spent', 'Sortable by all three data columns', 'Student row always highlighted in blue', 'Max height with scroll to keep layout stable'],
      chartType: 'table',
    },
  ];

  return (
    <AnimatedSection id="figma" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>03 — Figma Prototypes</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Prototyping the three key screens</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The selected concept was prototyped in Figma across three key screens before implementation. Each screen was walked through with peers to identify layout and labelling issues before writing any code.
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} textColor="primary" indicatorColor="primary">
            {screens.map((s, i) => <Tab key={i} label={s.label} />)}
          </Tabs>
        </Box>
        {screens.map((s, i) => tab === i && (
          <Grid container spacing={3} key={i}>
            <Grid item xs={12} md={5}>
              <Box sx={{ bgcolor: 'grey.100', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 2, height: 220, display: 'flex', gap: 1 }}>
                {s.chartType !== 'table' && (
                  <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[0, 1].map(ci => (
                      <Box key={ci} sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1, flex: 1 }}>
                        <Box sx={{ width: '55%', height: 7, bgcolor: 'grey.300', borderRadius: 1, mb: 1 }} />
                        {s.chartType === 'line' ? (
                          <svg width="100%" height="55" viewBox="0 0 200 55">
                            <polyline points="10,48 60,28 110,38 160,18 190,22" fill="none" stroke={ci === 0 ? theme.palette.primary.main : theme.palette.secondary.main} strokeWidth="2" />
                            <polyline points="10,38 60,42 110,48 160,32 190,40" fill="none" stroke={theme.palette.text.disabled} strokeWidth="1.5" strokeDasharray="4,3" />
                          </svg>
                        ) : (
                          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: 55, pt: 0.5 }}>
                            {[35,55,42,70,30,62,48,75,38,65].map((h,j) => (
                              <Box
                                key={j}
                                sx={{
                                  flex: 1,
                                  height: `${h}%`,
                                  bgcolor: j === 0
                                    ? (ci === 0 ? alpha(theme.palette.primary.main, 0.45) : alpha(theme.palette.secondary.main, 0.45))
                                    : (ci === 0 ? theme.palette.primary.main : theme.palette.secondary.main),
                                  borderRadius: '2px 2px 0 0',
                                  opacity: 0.9,
                                }}
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
                <Box sx={{ flex: s.chartType === 'table' ? 1 : undefined, width: s.chartType === 'table' ? '100%' : undefined, bgcolor: 'white', border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1.5 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    {['Student','Grade','Time'].map(h => <Box key={h} sx={{ flex: 1, height: 8, bgcolor: 'grey.300', borderRadius: 1 }} />)}
                  </Box>
                  {[true,false,false,false,false,false,false,false].map((hl, j) => (
                    <Box key={j} sx={{ display: 'flex', gap: 1, mb: '3px', bgcolor: hl ? 'primary.light' : 'transparent', borderRadius: 0.5, p: '2px 3px' }}>
                      <Box sx={{ flex: 1, height: 6, bgcolor: hl ? alpha(theme.palette.primary.main, 0.35) : 'grey.200', borderRadius: 1 }} />
                      <Box sx={{ flex: 1, height: 6, bgcolor: hl ? alpha(theme.palette.primary.main, 0.35) : 'grey.200', borderRadius: 1 }} />
                      <Box sx={{ flex: 1, height: 6, bgcolor: hl ? alpha(theme.palette.primary.main, 0.35) : 'grey.200', borderRadius: 1 }} />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Typography variant="body2" color="text.disabled" sx={{ display: 'block', mt: 1, textAlign: 'center', fontSize: '11px' }}>
                Schematic representation of Figma prototype layout
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" sx={{ mb: 1 }}>{s.label}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{s.desc}</Typography>
              <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 1 }}>Design specifications</Typography>
              <List dense disablePadding>
                {s.details.map(d => (
                  <ListItem key={d} disablePadding sx={{ py: 0.5, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 } }}>
                    <ListItemIcon sx={{ minWidth: 20 }}><ArrowForwardIcon sx={{ fontSize: 13, color: 'primary.main' }} /></ListItemIcon>
                    <ListItemText primary={d} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        ))}
      </Container>
    </AnimatedSection>
  );
}

function UsabilitySection() {
  const findings = [
    { num: '1', severity: 'positive', title: 'Dual-chart layout quickly communicates the grade–effort relationship', body: "Participants correctly identified within 30 seconds that peers with higher grades tended to spend more time. 'I can see immediately that if I put in more hours I'd probably do better' was a representative comment." },
    { num: '2', severity: 'positive', title: 'The sortable table was the most-used feature', body: 'Every participant interacted with the table sort. Sorting by grade was the most common action, followed by time. Participants described it as "the most useful part" — it let them answer their own specific comparison questions.' },
    { num: '3', severity: 'negative', title: 'The dropdown label "overview" was ambiguous', body: 'Three of five participants did not immediately understand that "overview" showed a cross-assignment trend view. Two clicked individual assignments first, then returned. A label like "All assignments" would set clearer expectations.' },
    { num: '4', severity: 'negative', title: 'Peer IDs (s1, s2…) felt impersonal and confusing', body: 'Participants expected "Peer 1" or "Student A" rather than "s1". The abbreviated format looked like a system identifier rather than a friendly label, reducing trust in the data.' },
    { num: '5', severity: 'neutral', title: 'Students wanted to know their percentile without scanning', body: 'All participants tried to locate themselves relative to the class before doing anything else. A "you are in the Xth percentile" summary label was requested multiple times as a fast entry point.' },
    { num: '6', severity: 'negative', title: 'No explanation of why time data is shown alongside grades', body: 'Two participants asked "what is the time data for?" without guidance. The connection between effort investment and grade outcomes — central to the design rationale — was not self-evident from the interface alone.' },
  ];

  const susScores = [
    { item: 'I would like to use this regularly', score: 4.2 },
    { item: 'Felt unnecessarily complex', score: 2.1 },
    { item: 'Easy to use', score: 4.4 },
    { item: 'Needed support to use it', score: 1.6 },
    { item: 'Functions were well integrated', score: 3.8 },
    { item: 'Too much inconsistency', score: 1.8 },
    { item: 'Others would learn fast', score: 4.3 },
    { item: 'Very cumbersome to use', score: 1.4 },
    { item: 'Felt confident using it', score: 4.1 },
    { item: 'Needed to learn a lot first', score: 1.9 },
  ];

  return (
    <AnimatedSection id="usability" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>04 — Usability Study</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Evaluating the prototype with 5 participants</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          A moderated usability study was conducted with 5 university students (3 undergraduate, 2 graduate) currently enrolled in courses using Canvas. Participants completed three tasks using the Figma prototype and the React implementation, then completed the System Usability Scale.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic' }}>
          Participant quotes below are representative reconstructions based on session notes and think-aloud transcripts.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {[
            { label: 'Participants', value: '5' },
            { label: 'Session length', value: '~35 min' },
            { label: 'SUS score', value: '74/100' },
            { label: 'SUS rating', value: 'Good' },
          ].map(({ label, value }) => (
            <Grid item xs={6} sm={3} key={label}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent sx={{ pb: '16px !important' }}>
                  <Typography sx={{ fontFamily: "'DM Serif Display'", fontSize: '1.9rem', color: 'primary.main', lineHeight: 1, mb: 0.5 }}>{value}</Typography>
                  <Typography variant="body2" color="text.disabled" sx={{ fontSize: '12px' }}>{label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ mb: 2 }}>Participant quotes</Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {[
            { text: "I like that I can see both my grade and how long I spent — it makes me realise I probably need to put in more time, not just study differently.", speaker: "P2", role: "3rd year undergraduate" },
            { text: "The table is great. I sorted by grade first, then by time, and found three people who got higher grades than me but spent less time. That's actually helpful.", speaker: "P4", role: "Graduate student" },
            { text: "I had to look for a while to find myself in the bar chart. Maybe highlight my bar more?", speaker: "P1", role: "2nd year undergraduate" },
            { text: "What does 'overview' mean here? I wasn't sure if it was a summary or settings or what.", speaker: "P3", role: "3rd year undergraduate" },
          ].map((q, i) => (
            <Grid item xs={12} md={6} key={i}><Quote {...q} /></Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ mb: 2 }}>Key findings</Typography>
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          {findings.map(f => <FindingCard key={f.num} {...f} />)}
        </Stack>

        <Typography variant="h3" sx={{ mb: 2 }}>SUS item breakdown</Typography>
        <Card>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 500, fontSize: '12px', color: 'text.secondary' }}>Item</TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: '12px', color: 'text.secondary', width: 200 }}>Mean (1–5)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {susScores.map(row => (
                  <TableRow key={row.item} sx={{ '&:last-child td': { border: 0 } }}>
                    <TableCell><Typography variant="body2" color="text.secondary">{row.item}</Typography></TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <LinearProgress variant="determinate" value={(row.score / 5) * 100} sx={{ flex: 1, bgcolor: 'primary.light', '& .MuiLinearProgress-bar': { bgcolor: row.score >= 4 ? 'success.main' : row.score <= 2 ? 'error.main' : 'primary.main' } }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, minWidth: 24, textAlign: 'right', color: 'text.primary' }}>{row.score.toFixed(1)}</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </AnimatedSection>
  );
}

function ImplementationSection() {
  const features = [
    {
      title: 'Dual-mode chart view',
      desc: "Overview mode renders two Highcharts line charts comparing the student's average to the class across all four assignments. Switching to a specific assignment re-renders to sorted bar charts showing all peers.",
      code: `// One state variable drives all chart behaviour
const [view, setView] = useState("overview");

useEffect(() => {
  if (view !== "overview") {
    // Per-assignment: sorted bar charts
    setData(grades[view].sort((a, b) => a.y - b.y))
    setTimeData(times[view].sort((a, b) => a.y - b.y))
  } else {
    // Overview: line charts with two series
    setData([classAverageGrade, yourAverageGrade])
    setTimeData([classAverageTime, yourAverageTime])
  }
}, [view])`,
    },
    {
      title: 'Reusable Chart component',
      desc: 'A single Chart component handles both line and bar modes via a chartType prop. It normalises two different data shapes: 2D arrays for multi-series line charts and flat arrays for single-series bar charts.',
      code: `// Normalises both data shapes into Highcharts series
series:
  chartType === "line" && Array.isArray(data[0])
    // Line: 2D array → two named series
    ? data.map((d, i) => ({
        name: names[i],
        type: "line",
        color: color[i],
        data: d.map(p => ({ y: p.y }))
      }))
    // Bar: flat array → colour "you" bar differently
    : {
        name: names,
        type: "bar",
        data: data.map(d => ({
          y: d.y,
          color: d.x === "you" ? color[1] : color[0]
        }))
      }`,
    },
    {
      title: 'Sortable peer table',
      desc: "DataTable renders an MUI table with sortable columns. It handles both string (localeCompare) and numeric sorting, and highlights the current student's row via a highlight flag on the data object.",
      code: `// Dynamic sort handles both string and numeric columns
onClick={() => {
  setOrder(order === 'asc' ? 'desc' : 'asc');
  setOrderBy(head.value);

  if (head.type === "string")
    setData([...data].sort((a, b) =>
      order === 'desc'
        ? a[head.value].localeCompare(b[head.value])
        : b[head.value].localeCompare(a[head.value])
    ));
  else if (head.type === "number")
    setData([...data].sort((a, b) =>
      order === 'asc'
        ? a[head.value] - b[head.value]
        : b[head.value] - a[head.value]
    ));
}}`,
    },
  ];

  const decisions = [
    { decision: 'Highcharts over Recharts', reason: 'Highcharts provides built-in crosshair support and richer tooltip formatting, important for the per-peer hover state.' },
    { decision: 'MUI Grid v2 (Unstable_Grid2)', reason: 'The new grid system handles responsive breakpoints without the negative margin workarounds needed in Grid v1.' },
    { decision: 'One Chart component for both types', reason: 'Reduces duplication and makes the view-switch logic in the parent cleaner — one state variable drives all chart behaviour.' },
    { decision: 'Static data module (grades.js)', reason: 'For a prototype, a flat JS data file was the fastest path to a working demo. A real implementation would fetch from an LMS API with the same data shape — a one-line change.' },
  ];

  return (
    <AnimatedSection id="implementation" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>05 — React Implementation</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Building the dashboard in React</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The implemented dashboard is a React 18 app using MUI v5 for layout and Highcharts for visualisation. The architecture is intentionally minimal: a parent Dashboard component manages all view state, and two reusable child components handle rendering.
        </Typography>

        {/* Architecture */}
        <Card sx={{ mb: 4, bgcolor: 'grey.100' }}>
          <CardContent>
            <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 2 }}>Component architecture</Typography>
            <Stack alignItems="center" spacing={1.5}>
              <Box sx={{ bgcolor: 'primary.main', color: 'white', px: 3, py: 1, borderRadius: 2, fontSize: '13px', fontWeight: 500 }}>Dashboard (view state, data)</Box>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Chart — grade', 'Chart — time', 'DataTable'].map(c => (
                  <Box key={c} sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', px: 2.5, py: 0.75, borderRadius: 2, fontSize: '13px', color: 'text.secondary' }}>{c}</Box>
                ))}
              </Box>
              <Typography variant="body2" color="text.disabled" sx={{ fontSize: '12px' }}>
                grades.js — static data module (LMS API in production)
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Stack spacing={3} sx={{ mb: 4 }}>
          {features.map(f => (
            <Card key={f.title}>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 0.75 }}>{f.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{f.desc}</Typography>
                <Box sx={{ bgcolor: 'grey.900', borderRadius: 1.5, p: 2, fontFamily: 'monospace', fontSize: '12px', lineHeight: 1.7, color: 'grey.300', overflowX: 'auto' }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{f.code}</pre>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Typography variant="h3" sx={{ mb: 2 }}>Technical decisions</Typography>
        <Stack>
          {decisions.map((d, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 2, py: 2, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 }, flexWrap: 'wrap' }}>
              <Chip label={d.decision} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.main', flexShrink: 0, alignSelf: 'flex-start' }} />
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1, minWidth: 200 }}>{d.reason}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </AnimatedSection>
  );
}

function ReflectionSection() {
  return (
    <AnimatedSection id="reflection" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>06 — Reflection</SectionLabel>
        <Typography variant="h2" sx={{ mb: 3 }}>What this project taught me</Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            {
              heading: 'Design → implementation gaps',
              items: [
                'The Figma prototype made highlighting "your bar" obvious — the implementation needed an explicit colour branch in the data mapping to achieve the same effect',
                "Sorting state needed a spread copy ([...data].sort(...)) — calling setData(data.sort(...)) directly mutates the array, causing React's stale closure problem",
                'Chart re-renders on prop change required a reload state flag — worth abstracting into a custom hook in a larger project',
              ],
            },
            {
              heading: 'What usability testing changed',
              items: [
                'The "overview" label looked fine in the prototype but caused real confusion with users — a finding that only emerged through testing',
                "Participants' instinct to locate themselves first informed what a v2 would prioritise: a percentile summary above the charts",
                'Time-spent data needed an explanatory label — context that seemed obvious to the designer was not at all obvious to users',
              ],
            },
          ].map(col => (
            <Grid item xs={12} md={6} key={col.heading}>
              <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 1.5 }}>{col.heading}</Typography>
              <List disablePadding>
                {col.items.map(item => (
                  <ListItem key={item} disablePadding sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 } }}>
                    <ListItemIcon sx={{ minWidth: 22 }}><ArrowForwardIcon sx={{ fontSize: 13, color: 'secondary.main' }} /></ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.65 }} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ mb: 2 }}>If I were building v2</Typography>
        <Grid container spacing={1.5}>
          {[
            { title: 'Percentile summary card', desc: 'A single "You are in the top 40% by grade this assignment" label at the top — the first thing every participant looked for.' },
            { title: 'Better peer labels', desc: 'Replace "s1, s2..." with "Peer A, Peer B..." or colour-coded avatars. Small change, large effect on perceived trustworthiness.' },
            { title: 'Inline tooltip on time data', desc: 'An info icon explaining: "Students who invest more time tend to achieve higher grades." The design rationale needs to be surfaced in the UI.' },
            { title: 'Rename "overview" → "All assignments"', desc: 'A concrete label that sets accurate expectations before the user clicks.' },
            { title: 'Scatter plot toggle', desc: 'A toggle to switch bar charts to a grade vs. time scatter plot — making the effort-outcome relationship even more direct.' },
            { title: 'API integration', desc: 'Replace the static grades.js file with a real LMS API. The component architecture already supports this — it is a one-line change to the data source.' },
          ].map(({ title, desc }) => (
            <Grid item xs={12} sm={6} key={title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ pb: '16px !important' }}>
                  <Typography variant="h4" sx={{ mb: 0.5 }}>{title}</Typography>
                  <Typography variant="body2" color="text.secondary">{desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AnimatedSection>
  );
}

export default function Dashboard() {
  return (
    <CaseStudyShell sections={DASHBOARD_NAV_SECTIONS}>
      <HeroSection />
      <ProblemSection />
      <IdeationSection />
      <FigmaSection />
      <UsabilitySection />
      <ImplementationSection />
      <ReflectionSection />
      <AnimatedSection component="footer" immediate sx={{ py: 5, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.disabled">
            University course project · Simon Fraser University
          </Typography>
        </Container>
      </AnimatedSection>
    </CaseStudyShell>
  );
}
