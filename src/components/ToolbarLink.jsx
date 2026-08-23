import { Box } from '@mui/material';
import { MONO } from '../constants/fonts.js';

const ToolbarLink = ({ label }) => {
    return (
        <Box
            component='a'
            href={`#${label}`}
            sx={{
                fontFamily: MONO,
                fontSize: '0.75rem',
                color: 'text.secondary',
                textDecoration: 'none',
                display: { xs: 'none', md: 'block' },
                '&:hover': {
                    color: 'primary.main',
                },
                transition: 'color 0.15s',
            }}
        >
            {label.toUpperCase()}
        </Box>
    );
};

export { ToolbarLink };
