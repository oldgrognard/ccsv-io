import { Box, Typography } from '@mui/material';

const SectionHeading = ({ eyebrow, title }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant='overline'
                color='primary'
                sx={{ mb: 1, display: 'block' }}
            >
                {eyebrow}
            </Typography>
            <Typography
                variant='h2'
                sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export { SectionHeading };
