import { Box, Container, Typography } from '@mui/material';
import { HeroBackground } from './HeroBackground';

const PageHeader = ({ eyebrow, title, intro }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                py: { xs: 8, md: 12 },
                overflow: 'hidden',
            }}
        >
            <HeroBackground />
            <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant='overline'
                    color='primary'
                    sx={{ mb: 1.5, display: 'block' }}
                >
                    {eyebrow}
                </Typography>
                <Typography
                    variant='h1'
                    sx={{
                        fontSize: { xs: '2.2rem', md: '3.6rem' },
                        lineHeight: 1.05,
                        mb: 2.5,
                        maxWidth: 820,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                        fontSize: '1.05rem',
                        maxWidth: 640,
                    }}
                >
                    {intro}
                </Typography>
            </Container>
        </Box>
    );
};

export { PageHeader };
