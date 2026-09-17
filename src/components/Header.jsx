import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import { MONO } from '../constants/fonts';

const Header = () => {
    const NAV_LINKS = [
        { label: 'HOME', to: '/' },
        { label: 'MYSQL', to: '/examples/mysql' },
        { label: 'SQLITE', to: '/examples/sqlite' },
        { label: 'JS→CCSV', to: '/tools/js-to-ccsv' },
        { label: 'CCSV→JS', to: '/tools/ccsv-to-js' },
        { label: 'DEV NOTES', to: '/dev-notes' },
    ];

    const { pathname, hash } = useLocation();

    React.useEffect(() => {
        if (hash) return;
        window.scrollTo({ top: 0 });
    }, [pathname, hash]);

    return (
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
                        {NAV_LINKS.map((link) => {
                            const active =
                                link.to === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(link.to);
                            return (
                                <Box
                                    key={link.to}
                                    component={RouterLink}
                                    to={link.to}
                                    sx={{
                                        fontFamily: MONO,
                                        fontSize: '0.72rem',
                                        whiteSpace: 'nowrap',
                                        color: active
                                            ? 'primary.main'
                                            : 'text.secondary',
                                        textDecoration: 'none',
                                        display: { xs: 'none', md: 'block' },
                                        '&:hover': { color: 'primary.main' },
                                        transition: 'color 0.15s',
                                    }}
                                >
                                    {link.label}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Header };
