import { Box, Chip } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeroBackground = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box
            aria-hidden
            sx={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {/* Grid lines */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: dark
                        ? `linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)`
                        : `linear-gradient(rgba(0,102,204,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,102,204,0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
            {/* radial glow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: '60%',
                    background: dark
                        ? 'radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(0,102,204,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />
        </Box>
    );
};

export { HeroBackground };
