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
            { label: 'Design constraint', value: 'Support self-regulation and informed decision making' },
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
  const [expanded, setExpanded] = useState('concept-a');
  const concepts = [
    {
      id: 'concept-a', name: 'Concept A — Comparison based on grade group', chosen: false,
      summary: "A student-facing dashboard providing both outcome-oriented feedback (grades) and process-oriented feedback (study behaviour). A radar chart compares grade distributions across assignments to flag difficulty outliers. A bar chart shows the current cumulative grade distribution for the class. A timeline section visualises when and how long students in each grade band (A, B, C and below) engaged with assignments filterable by group via a dropdown.",
      rationale: 'Students willbe able to compare their time distribution to the ones with better grades to detect behavioral patterns while considering the class performance and the difficulty of the asignments.',
      tradeoffs: 'The combination of radar chart, bar chart, and timeline may require onboarding for students unfamiliar with these visualisation types. Self-reported time might not be accurate',
      uiElements: ['Bar chart: grade distribution', 'Radar chart', 'Gantt chart', 'Assignment selector', 'Grade group selector'],
    },
    {
      id: 'concept-b', name: 'Concept B — Comparison with the whole class and top students', chosen: false,
      summary: 'A student-facing dashboard that corrects misconceptions about peer behaviour by showing accurate time-on-task data, comparing the student\'s study time against the class average and the top 20% of performers. A leaderboard ranks students by total time spent. An expand toggle replaces a horizontal bar chart with a timeline heatmap showing how time is distributed across days and hours.',
      rationale: 'Students might overestimate how much peers procrastinate, which reinforces their own avoidance. Showing accurate time data from high performers provides a credible, motivating reference point. The leaderboard adds competitive motivation for students already performing well.',
      tradeoffs: 'Self-reported time spent might not be accurate. The heatmap adds detail but increases cognitive load for students who need a quick summary.',
      uiElements: ['Horizontal bar chart', 'timeline heatmap', 'expand/collapse toggle', 'hover tooltips'],
    },
    {
      id: 'concept-c', name: 'Concept C — Comparison with peers', chosen: false,
      summary: 
      'A student-facing dashboard that groups peers by expected grade and visualises each student\'s performance relative to their relevant peer group. An overview shows grade and time-spent rankings with the student highlighted, and a double-line chart tracks their trajectory against the group average across all assignments. Students can drill into a specific assignment via a dropdown to see per-assignment comparisons.',
      rationale: 'Balances detail and overview. The dual chart layout makes the effort-grade relationship visible without the cognitive load of a scatter plot. The sortable table gives students control over how they interpret peer data.',
      tradeoffs: 'More components to maintain. The bar chart view is only available per-assignment, not across all assignments simultaneously.',
      uiElements: ['Line chart (overview mode)', 'Bar charts per assignment (grade + time)', 'ranking cards', 'Assignment dropdown selector'],
    },
  ];

  return (
    <AnimatedSection id="ideation" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>02 — Ideation & Concept Development</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Three directions, one design question</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The ideation phase explored three dashboard concepts, each making a different bet on what contextual information would best support student self-regulation. All three were grounded in Social Comparison Theory, Social Norm Theory, and Pekrun's achievement emotions framework.
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
      </Container>
    </AnimatedSection>
  );
}

function FigmaSection() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const screens = [
    {
      label: 'Concept A',
      desc: "A dashboard containing information for effective comparison between different grade groups (A, B, C and below)",
      details: ["Radar chart showing average grade on each assignment", "Horizontal bar chart for grouped grades", "Gantt chart showing time distribution", "Dropdown list for grade groups and assignments"],
      chartType: 'line',
      img: require("../static/img/conceptA.png"),
      link: 'https://www.figma.com/design/sLTjKFmue8w7fApIcWDPGe/P3-2?node-id=2-96&t=RXW51wtTwwpv7xAf-0'
    },
    {
      label: 'Concept C',
      desc: "Line charts showing class average vs. student's grade and time-spent across all four assignments. Gives a semester-wide trend view at a glance.",
      details: ['Dropdown defaults to "overview"', 'Two line charts stacked: grades (blue) and time (orange)', 'Right panel: ranking of student\'s current grade and time spent', 'Student row highlighted in light blue'],
      chartType: 'table',
      img: require("../static/img/conceptC.png"),
      link: "https://www.figma.com/design/ROMhp8adHANnIjJuCWhfD7/P3-1?node-id=20-806&t=NlUFoF8ayO8Ievv4-0"
    },
  ];

  return (
    <AnimatedSection id="figma" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>03 — Figma Prototypes</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Prototyping the three key screens</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The concept A and C were selected for protoyping as concept B was mainly foxused on time spent which is a self reported value by students and
          might not be accurate. The prototype were uilt using Figma.
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} textColor="primary" indicatorColor="primary">
            {screens.map((s, i) => <Tab key={i} label={s.label} />)}
          </Tabs>
        </Box>
        {screens.map((s, i) => tab === i && (
          <Grid container spacing={3} key={i}>
            <Grid item xs={12} md={8}>
              <img height={550} src={s.img} />
            </Grid>
            <Grid item xs={12} md={4}>
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
                <Typography variant="body1" color="text.disabled" sx={{ display: 'block', mt: 1, textAlign: 'center', fontSize: '11px' }}>
                <a href={s.link} target="_blank">Link to Figma Storyboard</a>
              </Typography>
              </List>
            </Grid>
          </Grid>
        ))}
      </Container>
    </AnimatedSection>
  );
}

function UsabilitySection() {
  const tasks = [
    {
      id: 'T1',
      label: 'Figure out what each section does',
      prompt: '"Without any guidance, explore the dashboard and describe out loud what you think each part is showing you."',
      observations: [
        'The ranking cards were the most immediately legible element — all participants correctly described its purpose within seconds',
        'The "overview" dropdown option caused consistent confusion; participants expected a summary or settings page rather than a cross-assignment trend view',
        'Peer identifiers such as "s1" and "s2" were interpreted as system-generated codes rather than anonymised student labels, leading participants to have questions. ',
        'Participants needed more context about the "current rank in grades", like knowing how their performance differed from the top students',
      ],
    },
        {
      id: 'T2',
      label: 'Compare performance to peers',
      prompt: '"Using the dashboard, try to understand how your performance on assignments compares to your classmates."',
      observations: [
        'Most participants gravitated immediately to the ranking cards rather than the charts, treating it as the primary reference point',
        'Participants who explored the bar charts took longer to orient themselves — they first scanned for their own bar before attempting any comparison',
        'Several participants verbally noted the effort-grade relationship unprompted while exploring the charts: they observed that higher-ranked peers also appeared to spend more time',
        'One participant expressed surprise that time data was included at all, suggesting the connection between effort and outcomes was not immediately obvious from the interface',
      ],
    },
  ];

  const themes = [
    { num: '1', severity: 'positive', title: 'The grade–effort relationship was discoverable but not immediate', body: 'Participants who spent time with the bar charts did eventually notice the pattern between time invested and grades achieved. However, this insight emerged through exploration rather than from a clear design affordance — suggesting the relationship needs to be made more explicit.' },
    { num: '2', severity: 'neutral', title: 'The ranking cards are useful yet need more context', body: 'Participants could easily interpret the intention of the cards but required more detail about their difference with better performing students.' },
    { num: '3', severity: 'neutral', title: 'Participants wanted to locate themselves before comparing', body: 'Without exception, the first thing every participant tried to do was find their own data point. The dashboard did not surface a clear "you are here" anchor, which meant participants spent cognitive effort on self-location before they could begin comparison — the core task the dashboard is designed for.' },
    { num: '4', severity: 'negative', title: 'Section labels and identifiers created unnecessary cognitive friction', body: 'The "overview" label, the "s1,s2" peer IDs, and the "A1,A2" Assignment IDs all required participants to resolve ambiguity before they could engage with the content. These are fixable issues that currently sit between the user and the dashboard\'s core value.' },
  ];

  return (
    <Box id="usability" component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>04 — Usability Evaluation</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Think-aloud evaluation with 4 participants</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        Due to the course's limited timeline, the usability evaluation was narrowed down to a single high-potential prototype. 
        I selected <strong>Concept C</strong> for final testing, as its use of familiar visualizations such as bar and line charts over more complex Radar or Gantt charts ensured better data interpretability and aligned with the technical feasibility goals of the project. <br/>
        A moderated think-aloud study was conducted with 4 university students. Participants were asked to verbalise their thoughts continuously as 
        they completed two tasks on the live application. Sessions were not scored or timed, the goal was to surface interpretive friction, navigational uncertainty, and unmet expectations through direct observation.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic' }}>
          Observations and quotes below are reconstructed from session notes and think-aloud transcripts.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {[
            { label: 'Participants', value: '4' },
            { label: 'Method', value: 'Think-aloud' },
            { label: 'Tasks', value: '2' },
            { label: 'Setting', value: 'Moderated' },
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

        <Typography variant="h3" sx={{ mb: 2 }}>Tasks & observations</Typography>
        <Stack spacing={2} sx={{ mb: 5 }}>
          {tasks.map(t => (
            <Card key={t.id}>
              <CardContent>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <Chip label={t.id} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.main', fontWeight: 500, minWidth: 36 }} />
                  <Typography variant="h4">{t.label}</Typography>
                </Stack>
                <Box sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>{t.prompt}</Typography>
                </Box>
                <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 1 }}>Session observations</Typography>
                <List dense disablePadding>
                  {t.observations.map((o, i) => (
                    <ListItem key={i} disablePadding sx={{ py: 0.75, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 }, alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 20, mt: 0.4 }}><ArrowForwardIcon sx={{ fontSize: 12, color: 'text.disabled' }} /></ListItemIcon>
                      <ListItemText primary={o} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.65 }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Typography variant="h3" sx={{ mb: 0.75 }}>Synthesised themes</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Observations across both tasks were analysed to identify recurring patterns in participant behaviour and verbalisation.
        </Typography>
        <Stack spacing={1.5}>
          {themes.map(f => <FindingCard key={f.num} {...f} />)}
        </Stack>
          <Paper elevation={0} sx={{ bgcolor: 'primary.light', borderRadius: 3, p: 3, mt: 3 }}>
          <Typography variant="caption" color="primary.main" display="block" sx={{ mb: 1 }}>Changes made following evaluation</Typography>
          <Typography variant="body2" color="text.secondary">
            Two targeted revisions were made to the implementation based on recurring observations across sessions. 
            "Overview" was changed to "Current Performance", student identifiers were updated from abbreviated codes ("S1", "S2") to the more legible label "Peer", 
            and assignment references were standardised to "Assignment 1", "Assignment 2", and so on — changes that 
            directly addressed the trust and comprehension issues participants verbalised. Additionally, the ranking 
            cards were replaced with a sortable table displaying each peer's current grade and time spent in a single row. 
            This gives the viewer a more complete picture of their standing in the class, and the ability to sort by 
            either column makes the relationship between effort and outcome easier to explore independently.
          </Typography>
        </Paper> 
      </Container>
    </Box>
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
    { decision: 'Highcharts', reason: 'Highcharts provides built-in crosshair support and richer tooltip formatting, important for the per-peer hover state.' },
    { decision: 'MUI Grid v2', reason: 'The new grid system handles responsive breakpoints without the negative margin workarounds needed in Grid v1.' },
    { decision: 'One Chart component for both types', reason: 'Reduces duplication and makes the view-switch logic in the parent cleaner — one state variable drives all chart behaviour.' },
    { decision: 'Static data module (grades.js)', reason: 'For a prototype, a flat JS data file was the fastest path to a working demo. A real implementation would fetch from an LMS API with the same data shape.' },
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
                "Participants have an instinct to locate themselves first but they also need more context regarding their peers.",
                'Peer labels must remain anonymized while still clearly communicating their intended meaning.',
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
