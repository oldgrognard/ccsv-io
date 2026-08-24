import { Box, Container, Divider, Typography } from '@mui/material';
import { MONO } from '../constants/fonts.js';
import { ToolbarLink } from '../components/ToolbarLink';
import { HeroBackground } from '../components/HeroBackground';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hero } from '../components/Hero.jsx';
import { Mechanism } from '../components/Mechanism.jsx';
import { Comparison } from '../components/Comparison.jsx';
import { Spec } from '../components/Spec.jsx';
import { Footer } from '../components/Footer.jsx';

const Landing = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            <Box
                component='nav'
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                    backdropFilter: 'blur(12px)',
                }}
            >
                <Container maxWidth='lg'>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 1.5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: MONO,
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    color: 'primary.main',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                .ccsv
                            </Box>
                            <Typography
                                variant='caption'
                                color='text.secondary'
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                }}
                            >
                                Control Character Separated Values
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <ToolbarLink label='what' />
                            <ToolbarLink label='how' />
                            <ToolbarLink label='compare' />
                        </Box>
                    </Box>
                </Container>
            </Box>
            {/* --- HERO --- */}
            <Hero />

            <Divider />

            {/* --- HOW IT WORKS --- */}
            <Mechanism />

            <Divider />

            {/* COMPARISON */}
            <Comparison />

            <Divider />

            {/* CTA / SPEC */}
            <Spec />

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export { Landing };
