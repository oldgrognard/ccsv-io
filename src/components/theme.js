import { createTheme } from '@mui/material/styles';
import { INTER, MONO, SANS } from '../constants/fonts.js';

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#f4f6fa',
                    paper: '#ffffff',
                },
                primary: {
                    main: '#0066cc',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#6200ea',
                },
                text: {
                    primary: '#0a1628',
                    secondary: '#546882',
                },
                divider: 'rgba(90,102,204,0.15)',
            },
        },
        dark: {
            palette: {
                background: {
                    default: '#080c14',
                    paper: '#0f1520',
                },
                primary: {
                    main: '#00e5ff',
                    contrastText: '#080c14',
                },
                secondary: {
                    main: '#c49fff',
                },
                text: {
                    primary: '#e8edf5',
                    secondary: '#8899aa',
                },
                divider: 'rgba(0,229,255,0.12)',
            },
        },
    },
    typography: {
        fontFamily: SANS,
        h1: { fontFamily: SANS, fontWeight: 800, letterSpacing: '-0.04em' },
        h2: { fontFamily: SANS, fontWeight: 700, letterSpacing: '-0.03em' },
        h3: { fontFamily: SANS, fontWeight: 700, letterSpacing: '-0.02em' },
        h4: { fontFamily: SANS, fontWeight: 600, letterSpacing: '-0.01em' },
        h5: { fontFamily: SANS, fontWeight: 600 },
        h6: { fontFamily: SANS, fontWeight: 500 },
        body1: { fontFamily: INTER, fontWeight: 400, lineHeight: 1.7 },
        body2: {
            fontFamily: INTER,
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        caption: {
            fontFamily: MONO,
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
        },
        overline: {
            fontFamily: MONO,
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
        },
    },
    shape: { borderRadius: 4 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: SANS,
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                    borderRadius: 4,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: INTER,
                    fontSize: '0.875rem',
                },
                head: {
                    fontFamily: MONO,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                },
            },
        },
    },
});
console.info('theme', theme);

export { theme };
