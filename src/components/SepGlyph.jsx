import { Box } from '@mui/material';
import { MONO } from '../constants/fonts';

const SepGlyph = ({ kind }) => {
    if (!kind.match(/RS|US/))
        throw new Error('Invalid SepGlyph kind.  Must be "US" or "RS"');
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 0.75,
                mx: 0.25,
                borderRadius: 0.5,
                fontFamily: MONO,
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: kind === 'US' ? 'primary.main' : 'secondary.main',
                border: '1px solid',
                borderColor: kind === 'US' ? 'primary.main' : 'secondary.main',
                opacity: 0.9,
            }}
        >
            {kind}
        </Box>
    );
};

export { SepGlyph };
