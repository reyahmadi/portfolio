import * as React from 'react';
import {
  Box, Container, Typography, Stack, Divider, Link, Chip,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const contacts = [
  {
    icon: <EmailIcon sx={{ fontSize: 18 }} />,
    label: 'Email',
    value: 'r.ahmadi1377@gmail.com',
    href: 'mailto:r.ahmadi1377@gmail.com',
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 18 }} />,
    label: 'Phone',
    value: '+1 778 323 1648',
    href: 'tel:+17783231648',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 18 }} />,
    label: 'LinkedIn',
    value: 'Reyhaneh Ahmadi Nokabadi',
    href: 'https://www.linkedin.com/in/reyhaneh-ahamdi-nokabadi-b9a992183/',
    external: true,
  },
];

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={8} alignItems="center">

          {/* ── Left column ── */}
          <Grid item size={{md:6, sx:12}}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Let's get in touch!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 340 }}>
              I'm currently open to new opportunities in UX research and front-end development.
              Feel free to reach out through any of the channels on the right.
            </Typography>
          </Grid>

          {/* ── Divider (desktop only) ── */}
          <Grid item size={{md: 1}} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Divider orientation="vertical" flexItem sx={{ height: 180, borderColor: 'divider' }} />
          </Grid>

          {/* ── Right column — contact rows ── */}
          <Grid item size={{md: 5, xs: 12}}>
            <Stack spacing={0}>
              {contacts.map((c, i) => (
                <Box
                  key={c.label}
                  component={Link}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 2.25,
                    borderBottom: '0.5px solid',
                    borderColor: 'divider',
                    borderTop: i === 0 ? '0.5px solid' : 'none',
                    borderTopColor: 'divider',
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      color: 'primary.main',
                      pl: 0.5,
                      '& .arrow': { opacity: 1, transform: 'translateX(3px)' },
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.75} alignItems="center">
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        sx={{ display: 'block', mb: 0.1, textTransform: 'uppercase', letterSpacing: '0.07em', fontSize: '10px' }}
                      >
                        {c.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 400, color: 'inherit' }}>
                        {c.value}
                      </Typography>
                    </Box>
                  </Stack>
                  <ArrowForwardIcon
                    className="arrow"
                    sx={{
                      fontSize: 16,
                      color: 'primary.main',
                      opacity: 0,
                      transition: 'all 0.15s ease',
                      flexShrink: 0,
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
