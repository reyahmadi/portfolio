import * as React from 'react';
import { createTheme, CssBaseline, Fade, ThemeProvider } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Work from './components/work';
import About from './components/aboutMe';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LAD from './components/LAD';
import Dashboard from './components/dashboard';
import Contact from './components/contact';

// ─── THEME ───────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#2D5A8E', light: '#E8F0FA', dark: '#1A3D6B', contrastText: '#fff' },
    secondary: { main: '#B85C38', light: '#FAF0EB', dark: '#8A3F24', contrastText: '#fff' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#1A1814', secondary: '#4A4740', disabled: '#8A8680' },
    divider: '#DDD9D0',
    success: { main: '#2A6B3C', light: '#E8F4EC' },
    warning: { main: '#B85C38', light: '#FAF0EB' },
    info:    { main: '#2D5A8E', light: '#E8F0FA' },
  },
  typography: {
    fontFamily: "'DM Sans', system-ui, sans-serif",
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    h1: {
      fontFamily: "'DM Serif Display', Georgia, serif",
      // fontSize: 'clamp(2rem, 5vw, 3.2rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: '1.25rem',
      lineHeight: 1.3,
      fontWeight: 400,
    },
    h4: { 
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: '1rem', 
      fontWeight: 500, 
      letterSpacing: '0.01em' 
    },
    body1: { fontSize: '15px', lineHeight: 1.7, fontWeight: 300 },
    body2: { fontSize: '13px', lineHeight: 1.6, fontWeight: 300 },
    caption: { fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 400, letterSpacing: '0.02em' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { border: '1px solid #DDD9D0', boxShadow: 'none', borderRadius: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400, fontSize: '12px' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #DDD9D0',
          boxShadow: 'none',
          color: '#1A1814',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 20, padding: '6px 18px' },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: '#DDD9D0' } },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { border: '1px solid #DDD9D0', boxShadow: 'none', borderRadius: '12px !important', '&:before': { display: 'none' }, mb: 1 },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: { color: '#E8F0FA', '&.Mui-active': { color: '#2D5A8E' }, '&.Mui-completed': { color: '#2D5A8E' } },
        text: { fill: '#2D5A8E', fontFamily: "'DM Sans', system-ui" },
      },
    },
  },
});

function App() {
  const [openTab, setOpenTab] = React.useState("Home");
  const location = useLocation()
  console.log(location)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar theme={theme} setOpenTab={setOpenTab} />
      
      <Routes>
        <Route path="/Home" element={
          <Fade in={openTab==="Home" || location.pathname==="/Home"} timeout={500} unmountOnExit>
            <div>
              <Intro openTab={openTab} /> 
            </div>
          </Fade>
        } />

        <Route path="/Work" element={
          <Fade in={location.pathname==="/Work"} timeout={500} unmountOnExit>
            <div>
              <Work openTab={openTab}/>
            </div>
          </Fade>
        } />

        <Route path="/About" element={
          <Fade in={location.pathname==="/About"} timeout={500} unmountOnExit>
            <div>
              <About openTab={openTab}/>
            </div>
          </Fade>
        } />
      
        <Route path="/" element={
          <Fade in={location.pathname==="/" || location.pathname==="/Home"} timeout={500} unmountOnExit>
            <div>
              <Intro openTab={openTab} /> 
            </div>
          </Fade>
        } />      

        <Route path="/contact" element={
          <Fade in={location.pathname==="/Contact"} timeout={500} unmountOnExit>
            <div>
              <Contact /> 
            </div>
          </Fade>
        } /> 

        <Route path="/LAD" element={
          <Fade in={location.pathname==="/LAD"} timeout={500} unmountOnExit>
            <div>
              <LAD /> 
            </div>
          </Fade>
        } />  

        <Route path="/Dashboard" element={
          <Fade in={location.pathname==="/Dashboard"} timeout={500} unmountOnExit>
            <div>
              <Dashboard /> 
            </div>
          </Fade>
        } />  
      </Routes>
      
      
    </ThemeProvider>
  );
}

export default App;
