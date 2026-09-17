import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { MONO } from '../constants/fonts';

const CodeBlock = ({ caption, code, language }) => {
    const [copied, setCopied] = useState(false);
    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
        } catch {
            console.error('clipboard unavailable');
        }
    };

    return (
        <Box
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '1',
                overflow: 'hidden',
                bgcolor: 'background.paper',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: dark ? 'rgba(0,0,0,0.3)' : 'rba(0,0,0,0.03',
                }}
            >
                <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ fontFamily: MONO }}
                >
                    {caption ?? language ?? 'code'}
                </Typography>
                <Tooltip title={copied ? 'Copied' : 'Copy'}>
                    <IconButton size='small' onClick={copy}>
                        {copied ? <CheckIcon /> : <ContentCopyIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                component='pre'
                sx={{
                    m: 0,
                    p: { xs: 2, md: 3 },
                    overflowX: 'auto',
                    fontFamily: MONO,
                    fontSize: { xs: '0.76rem', md: '0.84rem' },
                    lineHeight: '1.8,',
                    color: 'text.secondary',
                    '& .kw': { color: dark ? '#00e5ff' : '#0066cc' },
                    '& .sep': {
                        color: dark ? '#c49fff' : '#6200ea',
                        fontWeight: 700,
                    },
                    '& .cm': {
                        color: dark ? '#445566' : '#8899aa',
                        fontStyle: 'italic',
                    },
                }}
            >
                {code}
            </Box>
        </Box>
    );
};

export { CodeBlock };
