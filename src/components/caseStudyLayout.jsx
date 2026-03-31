import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/** Sticky section jump links below the portfolio AppBar */
export function CaseStudyShell({ sections, children }) {
  const theme = useTheme();
  const [active, setActive] = React.useState(sections[0]?.id ?? '');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', { noSsr: true });
  const appBarOffset = React.useMemo(() => {
    const t = theme.mixins?.toolbar;
    if (typeof t?.minHeight === 'number') return t.minHeight;
    return 64;
  }, [theme]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      {
        threshold: 0.2,
        rootMargin: `-${appBarOffset + 48}px 0px -50% 0px`,
      }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections, appBarOffset]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });

  return (
    <Box
      className="case-study-root"
      sx={{
        minHeight: '100vh',
        background: (t) =>
          `linear-gradient(180deg, ${t.palette.primary.light} 0%, ${t.palette.background.default} 28%, ${t.palette.background.default} 100%)`,
      }}
    >
      <Box sx={{ pt: { xs: 7, sm: 8 } }}>
        <Box
          sx={{
            position: 'sticky',
            top: { xs: 56, sm: 64 },
            zIndex: (t) => t.zIndex.appBar - 1,
            bgcolor: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="md" sx={{ py: 1.25 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} flexWrap="wrap" useFlexGap>
              <Button
                component={Link}
                to="/Work"
                startIcon={<ArrowBackIcon fontSize="small" />}
                size="small"
                sx={{ color: 'text.secondary', fontWeight: 500 }}
              >
                All work
              </Button>
              <Stack
                direction="row"
                spacing={0.25}
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  flex: 1,
                  justifyContent: { xs: 'flex-start', md: 'flex-end' },
                  pb: 0.25,
                  width: { xs: '100%', md: 'auto' },
                  mt: { xs: 0.5, md: 0 },
                  '&::-webkit-scrollbar': { height: 4 },
                }}
              >
                {sections.map(({ id, label }) => (
                  <Button
                    key={id}
                    size="small"
                    onClick={() => scrollTo(id)}
                    sx={{
                      flexShrink: 0,
                      fontSize: '12px',
                      letterSpacing: '0.02em',
                      px: 1,
                      color: active === id ? 'primary.main' : 'text.disabled',
                      fontWeight: active === id ? 600 : 400,
                      borderRadius: 2,
                      '&:hover': { bgcolor: 'primary.light', color: 'primary.dark' },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box component="main">{children}</Box>
      </Box>
    </Box>
  );
}

/**
 * Scroll-in fade + slight lift. Use immediate for hero sections above the fold.
 */
export function AnimatedSection({ id, immediate = false, component = 'section', sx = {}, children, ...props }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(!!immediate);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', { noSsr: true });

  React.useEffect(() => {
    if (immediate || prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate, prefersReducedMotion]);

  const motionSx = prefersReducedMotion
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
      };

  return (
    <Box ref={ref} id={id} component={component} sx={{ ...motionSx, ...sx }} {...props}>
      {children}
    </Box>
  );
}
