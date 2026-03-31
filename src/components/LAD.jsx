import React from 'react';
import Grid from '@mui/material/Grid2';
import {
  Typography, Box, Container,
  Card, CardContent, Chip, Divider,
  Paper, Stack, Button,
  Stepper, Step, StepLabel, StepContent,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import RemoveIcon from '@mui/icons-material/Remove';
import { CaseStudyShell, AnimatedSection } from './caseStudyLayout';



// ─── HELPERS ─────────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
    <Box sx={{ width: 20, height: 1, bgcolor: 'primary.main' }} />
    <Typography variant="caption" color="primary.main">{children}</Typography>
  </Box>
);

const OutcomeBadge = ({ type }) => {
  const config = {
    finding: { label: 'Finding', color: 'success' },
    nuance:  { label: 'Nuance',  color: 'warning' },
    implication: { label: 'Implication', color: 'info' },
    tension: { label: 'Tension', color: 'warning' },
    theory:  { label: 'Theory',  color: 'info' },
    decision:{ label: 'Decision',color: 'default' },
    impact:  { label: 'Impact',  color: 'success' },
  };
  const c = config[type] || config.finding;
  return <Chip label={c.label} color={c.color} size="small" variant="outlined" sx={{ fontWeight: 500, minWidth: 90 }} />;
};

const LAD_NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'methods', label: 'Methods' },
  { id: 'findings', label: 'Findings' },
  { id: 'design', label: 'Design' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const methods = [
  { icon: '⚖️', title: 'Controlled experiment', desc: 'Two dashboard conditions assigned to separate sections with identical curricula.' },
  { icon: '📋', title: 'Validated instruments', desc: 'MSLQ, EVC, AEQ, PALS, and SUS — established tools for motivation, emotion, goal orientation, and usability.' },
  { icon: '📊', title: 'Longitudinal measurement', desc: 'Data collected before, during, and after each of three assignments, capturing emotional trajectories.' },
  { icon: '🔍', title: 'Cluster analysis', desc: 'Students grouped by achievement goal orientation to surface subgroup effects masked by overall comparisons.' },
];

const timelineSteps = [
  { label: 'Pre-study baseline', desc: 'Demographic survey, PALS (goal orientation), and MSLQ administered. Students assigned to control or treatment dashboard.' },
  { label: 'Assignment 2 — First cycle', desc: 'AEQ completed before, during, and after the assignment. EVC motivation scale administered.' },
  { label: 'Assignment 3 — Second cycle', desc: 'Full emotion and motivation measurement repeated. Grade data linked to dashboard condition.' },
  { label: 'Assignment 4 — Follow-up', desc: 'Pre-assignment emotions measured. System Usability Scale (SUS) administered for both dashboards.' },
  { label: 'Analysis', desc: 'T-tests and Wilcoxon tests for group comparisons. Linear regression modelling emotion and motivation by grade, controlling for cluster.' },
];

const insights = [
  {
    num: '01',
    title: 'The treatment dashboard protected expectancy',
    body: 'Students in the control group lost significantly more confidence in their future performance over the semester. Seeing that higher-graded peers invested more time made effort feel like a viable lever for the treatment group.',
    type: 'highlight',
    icon: <TrendingUpIcon fontSize="small" />,
  },
  {
    num: '02',
    title: 'Perceived cost of effort dropped for treatment students',
    body: 'Control group students increasingly viewed the course as costly in time and effort. Treatment students did not — consistent with effort-outcome relationships making investment feel worthwhile rather than punishing.',
    type: 'highlight',
    icon: <TrendingDownIcon fontSize="small" />,
  },
  {
    num: '03',
    title: 'Treatment students reported less hope and joy before tasks',
    body: 'Before starting assignments, treatment students reported lower anticipatory hope and joy. Social comparison may activate performance awareness that dampens positive emotion — a significant design tradeoff.',
    type: 'warn',
    icon: <WarningAmberIcon fontSize="small" />,
  },
  {
    num: '04',
    title: 'Anxiety decreased over time in both groups',
    body: 'Regardless of dashboard type, students became less anxious as the semester progressed — suggesting familiarity mitigates anxiety independent of design intervention.',
    type: 'neutral',
    icon: <RemoveIcon fontSize="small" />,
  },
  {
    num: '05',
    title: 'Biggest gains for lower-performing, avoidance-oriented students',
    body: 'Students with low performance-approach and low performance-avoidance goals — and lower grades — benefited most from the treatment dashboard. Social comparison context reframed effort as achievable rather than threatening for this subgroup.',
    type: 'highlight',
    icon: <TrendingUpIcon fontSize="small" />,
  },
  {
    num: '06',
    title: 'Usability was comparable across both dashboards',
    body: 'SUS scores were similar for both interfaces, ruling out usability differences as a confound. Motivational and emotional differences were attributable to content and framing, not interface difficulty.',
    type: 'neutral',
    icon: <CheckCircleOutlineIcon fontSize="small" />,
  },
];

const designDecisions = [
  { type: 'theory', text: "Festinger's social comparison theory predicts that upward comparison (with better performers) motivates improvement when the goal is self-improvement rather than self-protection." },
  { type: 'decision', text: "Show peers with higher grades who also spent more time — not raw grade superiority alone. Weiner's attribution theory suggests effort is a controllable cause of performance, making it more motivating." },
  { type: 'theory', text: "Pekrun's achievement emotions research shows that emotions before, during, and after a task differ meaningfully — each shaped by different cognitive appraisals." },
  { type: 'decision', text: "Measure emotions at all three phases separately — not just post-task satisfaction, which would have missed the anticipatory emotion drop observed in the treatment group." },
  { type: 'tension', text: "Privacy vs. comparison utility: Individual peer data is more motivating than class aggregates but raises ethical concerns. The design anonymised all peer data while preserving individual scatter points." },
  { type: 'tension', text: "Ecological validity: The treatment dashboard was more complex than Canvas. Usability was measured explicitly via SUS to rule out novelty effects as a confound." },
];

const outcomes = [
  { type: 'finding', text: 'Theory-informed design produces measurable motivational benefits — particularly in protecting student expectancy and reducing perceived cost — even when overall task value is unaffected.' },
  { type: 'finding', text: 'Design interventions can be personalised by goal orientation. Students with different motivational profiles responded differently to the same dashboard — pointing toward adaptive LAD systems as a design opportunity.' },
  { type: 'nuance', text: 'Social comparison is a double-edged design tool. Reduced anticipatory hope and joy in the treatment group means designers must balance motivational benefit against emotional cost.' },
  { type: 'implication', text: "Canvas and similar tools may be inadvertently undermining expectancy. Students using the control dashboard lost more confidence over time — widely deployed tools should be evaluated against psychological benchmarks, not just usability." },
  { type: 'impact', text: 'Published as an M.Sc. thesis at SFU, contributing empirical evidence to the LAD literature and providing a replicable evaluation framework for future research.' },
];

const reflections = {
  worked: [
    'Multi-phase emotion measurement revealed effects invisible to post-task surveys alone',
    'Cluster analysis uncovered subgroup effects masked by overall comparisons',
    'Grounding every design choice in explicit theory created a principled, defensible rationale',
    'Including usability measurement eliminated a major confound',
  ],
  change: [
    'Integrate the dashboard within Canvas to reduce novelty effects and improve ecological validity',
    'Include qualitative interviews to understand why hope and joy dropped in the treatment group',
    'Test adaptive dashboard conditions — different comparisons for mastery vs. performance-oriented students',
    'Extend the study across a full academic year to observe longitudinal stabilisation',
  ],
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <AnimatedSection
      immediate
      sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="md">
        <Chip
          label="UX Research Case Study"
          size="small"
          sx={{ bgcolor: 'primary.light', color: 'primary.main', fontWeight: 500, mb: 3, borderRadius: 20, px: 1 }}
        />
        <Typography variant="h2" sx={{ mb: 2.5, maxWidth: 640 }}>
          How does social comparison in dashboards shape student motivation?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mb: 4, fontSize: '17px' }}>
          A mixed-methods study examining the emotional and motivational effects of theory-informed learning analytics dashboard design on university students.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={4}>
          {[
            { label: 'Role', value: 'Lead Researcher & Designer' },
            { label: 'Institution', value: 'Simon Fraser University' },
            { label: 'Duration', value: '2022 – 2024' },
          ].map(({ label, value }) => (
            <Grid item key={label}>
              <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.5 }}>{label}</Typography>
              <Typography variant="body2" color="text.primary" sx={{ fontWeight: 400 }}>{value}</Typography>
            </Grid>
          ))}
          <Grid item>
            <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 0.75 }}>Methods</Typography>
            <Stack direction="row" flexWrap="wrap" gap={0.75}>
              {['Controlled experiment', 'Survey instruments', 'Cluster analysis', 'Learning Analytics'].map(t => (
                <Chip key={t} label={t} size="small" sx={{ bgcolor: '#EDEAE3', color: 'text.secondary', borderRadius: '12px' }} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AnimatedSection>
  );
}

function OverviewSection() {
  return (
    <AnimatedSection id="overview" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>01 — Overview & Problem Statement</SectionLabel>
        <Typography variant="h2" sx={{ mb: 3 }}>The gap between dashboard design and learning theory</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Learning Analytics Dashboards (LADs) are embedded in nearly every university course management system — yet most are built without grounding in psychological theory. Tools like Canvas show students grade distributions and class averages, but were never designed with an understanding of how social comparison, achievement emotions, or goal orientation affect student behaviour.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Prior research in our lab showed that <em>which peers</em> students are shown — and the effort those peers appear to invest — meaningfully changes motivation. This study asked a sharper question:
        </Typography>

        <Paper
          elevation={0}
          sx={{ bgcolor: 'primary.main', borderRadius: 3, p: { xs: 2.5, md: 4 }, mb: 3 }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '17px', lineHeight: 1.7, mb: 1.5 }}>
            "Does a dashboard designed around social comparison theory produce measurably different motivational and emotional outcomes compared to one that resembles the industry standard?"
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em', textTransform: 'none', fontSize: '12px' }}>
            — Central research question
          </Typography>
        </Paper>

        <Typography variant="body1" color="text.secondary">
          The stakes are real. Poorly designed comparison interfaces can amplify anxiety and feelings of hopelessness, particularly for lower-performing students. Done well, they can sustain motivation across a semester and reduce the perceived cost of effort.
        </Typography>
      </Container>
    </AnimatedSection>
  );
}

function MethodsSection() {
  return (
    <AnimatedSection id="methods" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>02 — Research Methods</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>A controlled experiment across a full semester</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Students were randomly assigned to one of two dashboard conditions and completed validated psychometric instruments at multiple points across the semester.
        </Typography>

        <Grid container spacing={1.5} sx={{ mb: 5 }}>
          {methods.map(m => (
            <Grid item size={{xs: 12, md: 6}} key={m.title}>
              <Card sx={{ height: '100%', p: 0.5 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 22, mb: 1.5 }}>{m.icon}</Typography>
                  <Typography variant="h4" sx={{ mb: 0.75 }}>{m.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{m.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ mb: 3 }}>Study timeline</Typography>
        <Stepper orientation="vertical" sx={{ mb: 5 }}>
          {timelineSteps.map((step) => (
            <Step key={step.label} active={true} completed={false}>
              <StepLabel>
                <Typography variant="h4">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>{step.desc}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h3" sx={{ mb: 2 }}>The two dashboards</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          The control dashboard mirrored Canvas — showing grade distributions with a box plot and the student's position. The treatment dashboard was built from Festinger's social comparison theory, displaying peer time-on-task alongside grades to elicit upward comparison.
          These dashboards were implemented using <strong>React.js</strong>, <strong>Material UI (MUI)</strong>, and <strong>Highcharts.js</strong>. I used an 
          <strong> Express.js</strong> server to handle API routing with <strong>MySQL</strong> as the database. The application was hosted on SFU servers.
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              label: 'Control — Canvas-style',
              color: '#EDEAE3',
              textColor: '#8A8680',
              items: ['Box plot of grade distribution', "Student's own grade highlighted", 'Aggregate statistics', 'No peer-level behavioural data'],
              img: 'new-control-dashboard.PNG'
            },
            {
              label: 'Treatment — Theory-informed',
              color: '#E8F0FA',
              textColor: '#2D5A8E',
              items: ['Scatter plot: grade vs. time spent per peer', 'Highlights peers with higher grades + more effort', 'Designed to prompt upward comparison', 'Grounded in social comparison & attribution theory'],
              img: 'treatment-dashboard.png'
            },
          ].map(dash => (
            <Grid item xs={12} sm={6} key={dash.label}>
              <Card sx={{ height: '100%' }}>
                <Box sx={{ bgcolor: dash.color, px: 2, py: 1 }}>
                  <Typography variant="caption" sx={{ color: dash.textColor, textTransform: 'uppercase', letterSpacing: '0.07em', fontSize: '11px' }}>
                    {dash.label}
                  </Typography>
                </Box>
                <CardContent sx={{ pt: 1.5 }}>
                      <List dense disablePadding sx={{display: 'flex'}}>
                        {dash.items.map(item => (
                          <ListItem key={item} disablePadding sx={{ py: 0.5, borderBottom: '1px solid', borderColor: 'divider'}}>
                            <ListItemIcon sx={{ minWidth: 20 }}>
                              <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                      <img src={require(`../static/img/${dash.img}`)} className='dashboard-img' />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AnimatedSection>
  );
}

function FindingsSection() {
  return (
    <AnimatedSection id="findings" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>03 — Key Findings & Insights</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Nuanced effects — not a simple win</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Effects were conditional — varying by student goal orientation, performance level, and emotional phase. This challenged the assumption that theory-informed design would produce uniformly better outcomes.
        </Typography>

        <Grid container spacing={1.5} sx={{ mb: 5 }}>
          {[
            { icon: <TrendingUpIcon />, label: 'Sustained expectancy in treatment group vs. declining control' },
            { icon: <TrendingDownIcon />, label: 'Reduced perceived cost of effort in the treatment group' },
            { icon: <RemoveIcon />, label: 'No significant difference in task value between groups' },
          ].map(({ icon, label }) => (
            <Grid item xs={12} sm={4} key={label}>
              <Card sx={{ textAlign: 'center', p: 1 }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 1, '& svg': { fontSize: 36 } }}>{icon}</Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>{label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2}>
          {insights.map(ins => (
            <Card
              key={ins.num}
              sx={{
                borderLeft: ins.type === 'highlight' ? '3px solid' : ins.type === 'warn' ? '3px solid' : '1px solid',
                borderLeftColor: ins.type === 'highlight' ? 'primary.main' : ins.type === 'warn' ? 'secondary.main' : 'divider',
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item>
                    <Typography sx={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem', color: 'divider', lineHeight: 1 }}>
                      {ins.num}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.75 }}>
                      <Box sx={{ color: ins.type === 'highlight' ? 'primary.main' : ins.type === 'warn' ? 'secondary.main' : 'text.disabled', display: 'flex' }}>
                        {ins.icon}
                      </Box>
                      <Typography variant="h4">{ins.title}</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">{ins.body}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </AnimatedSection>
  );
}

function DesignSection() {
  return (
    <AnimatedSection id="design" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>04 — Design Process & Decisions</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>Translating theory into interface choices</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Every design decision in the treatment dashboard was grounded in a specific theoretical claim. This required resolving tensions between what motivational literature recommends and what is technically or ethically feasible in a real course context.
        </Typography>

        <Stack spacing={1.5}>
          {designDecisions.map((d, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex', gap: 2, alignItems: 'flex-start',
                py: 2, borderBottom: '1px solid', borderColor: 'divider',
                '&:last-child': { borderBottom: 0 },
              }}
            >
              <OutcomeBadge type={d.type} />
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.7, pt: 0.25 }}
                dangerouslySetInnerHTML={{ __html: d.text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#1A1814;font-weight:500">$1</strong>') }}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </AnimatedSection>
  );
}

function OutcomesSection() {
  return (
    <AnimatedSection id="outcomes" sx={{ py: { xs: 7, md: 10 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <SectionLabel>05 — Outcomes & Impact</SectionLabel>
        <Typography variant="h2" sx={{ mb: 1.5 }}>What the study established</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          This was one of the first studies to directly compare a theory-informed LAD against a widely-deployed industry dashboard using validated emotional and motivational measures across a full semester.
        </Typography>

        <Stack spacing={0}>
          {outcomes.map((o, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex', gap: 2, alignItems: 'flex-start',
                py: 2.5, borderBottom: '1px solid', borderColor: 'divider',
                '&:last-child': { borderBottom: 0 },
              }}
            >
              <OutcomeBadge type={o.type} />
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.7, pt: 0.25 }}>
                {o.text}
              </Typography>
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
        <SectionLabel>06 — Reflection & Lessons Learned</SectionLabel>
        <Typography variant="h2" sx={{ mb: 4 }}>What I would do differently</Typography>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {[
            { heading: 'What worked well', items: reflections.worked, color: 'primary' },
            { heading: "What I'd change", items: reflections.change, color: 'secondary' },
          ].map(col => (
            <Grid item xs={12} sm={6} key={col.heading}>
              <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mb: 2 }}>{col.heading}</Typography>
              <List disablePadding>
                {col.items.map(item => (
                  <ListItem key={item} disablePadding sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 } }}>
                    <ListItemIcon sx={{ minWidth: 24 }}>
                      <ArrowForwardIcon sx={{ fontSize: 14, color: `${col.color}.main` }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.6 }} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={0} sx={{ bgcolor: 'secondary.main', borderRadius: 3, p: { xs: 2.5, md: 4 } }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '16px', lineHeight: 1.75, mb: 1.5 }}>
            "The most surprising finding was that the students who benefited most from social comparison were those we might have expected to be harmed by it — lower performers with avoidance-oriented goals. Good design creates affordances that meet people where they are, not where we expect them to be."
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none', letterSpacing: '0.04em', fontSize: '12px' }}>
            — Personal reflection
          </Typography>
        </Paper>
      </Container>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <AnimatedSection component="footer" immediate sx={{ py: 5, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.disabled" sx={{ mb: 1 }}>
          Full thesis available via{' '}
          <Box
            component="a"
            href="https://summit.sfu.ca/item/39118"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            SFU Summit Research Repository
          </Box>
        </Typography>
        <Typography variant="body2" color="text.disabled" sx={{ fontSize: '12px' }}>
          Simon Fraser University · School of Interactive Arts and Technology · 2024
        </Typography>
      </Container>
    </AnimatedSection>
  );
}

export default function LAD() {
  return (
    <CaseStudyShell sections={LAD_NAV_SECTIONS}>
      <HeroSection />
      <OverviewSection />
      <MethodsSection />
      <FindingsSection />
      <DesignSection />
      <OutcomesSection />
      <ReflectionSection />
      <Footer />
    </CaseStudyShell>
  );
}
