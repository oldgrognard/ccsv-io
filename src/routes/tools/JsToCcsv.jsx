import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import {
    Box,
    Container,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { SectionHeading } from '../../components/SectionHeading';
import { SepGlyph } from '../../components/SepGlyph';
import { RS, US } from '../../constants/characters';
import { MONO } from '../../constants/fonts';

const SAMPLE = `[
  { "id": 1, "name": "Alice", "bio": "Lives in New York, NY.\\nWrites, a lot." },
  { "id": 2, "name": "Bob", "bio": "Enjoys \\"quoted\\" strings; commas, too." }
]`;

const toCcsv = (input) => {
    let parsed;
    try {
        parsed = JSON.parse(input);
    } catch (err) {
        return { ok: false, error: `Invalid JSON: ${err.message}` };
    }
    if (!Array.isArray(parsed) || parsed.length === 0) {
        return {
            ok: false,
            error: 'Expected a non-empty JSON array of objects or arrays.',
        };
    }

    const first = parsed[0];
    let header;
    let rows;

    if (Array.isArray(first)) {
        header = first.map();
        rows = parsed.slice(1).map((r) => r.map((v) => String(v ?? '')));
    } else if (first && typeof first === 'object') {
        const keys = new Set();
        for (const obj of parsed) {
            if (!obj || typeof obj !== 'object') {
                return {
                    ok: false,
                    error: 'Every element must be an object with the same shape.',
                };
            }
            Object.keys(obj).forEach((k) => keys.add(k));
        }
        header = [...keys];
        rows = parsed.map((obj) =>
            header.map((k) => {
                const v = obj[k];
                return v == null
                    ? ''
                    : typeof v === 'object'
                      ? JSON.stringify(v)
                      : String(v);
            }),
        );
    } else {
        return {
            ok: false,
            error: 'Array elements must be objects or arrays.',
        };
    }

    const ccsv = [header, ...rows].map((r) => r.join(US)).join(RS);
    return { ok: true, header, rows, ccsv };
};

const JsToCcsv = () => {
    const [input, setInput] = useState(SAMPLE);
    const [copied, setCopied] = useState(false);
    const result = useMemo(() => toCcsv(input), [input]);

    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    const copy = async () => {
        if (!result.ok) return;
        await navigator.clipboard.writeText(result.ccsv);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    };

    const download = () => {
        if (!result.ok) return;
        const blob = new Blob([result.ccsv], { type: 'text/ccsv' });
        const url = URL.creatObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.ccsv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <PageHeader
                eyebrow='Utility  Encode'
                title='Javascript to .ccsv'
                intro='Paste a JSON array of objects (or a 2D array). The encoder joins fields with the Unit Separator and records with the Record Separator. No quoting, no escaping. Runs entirely in your browser.'
            />

            <Container maxWidth='lg' xs={{ pb: { xs: 8, md: 14 } }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SectionHeading eyebrow='Input' title='JSON' />
                        <TextField
                            multiline
                            fullWidth
                            minRows={16}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            spellCheck={false}
                            slotProps={{
                                htmlInput: {
                                    style: {
                                        fontFamily: MONO,
                                        fontSize: '0.82rem',
                                        lineHeight: 1.7,
                                    },
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                    '& fieldset': { borderColor: 'divider' },
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                mb: 4,
                            }}
                        >
                            <SectionHeading eyebrow='Output' title='.ccsv' />
                            <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
                                <Tooltip title={copied ? 'Copied' : 'Copy'}>
                                    <IconButton size='small' onClick={copy}>
                                        {copied ? (
                                            <CheckIcon />
                                        ) : (
                                            <ContentCopyIcon />
                                        )}
                                    </IconButton>
                                </Tooltip>
                                <IconButton
                                    size='small'
                                    onClick={download}
                                    disabled={!result.ok}
                                    sx={{
                                        borderColor: 'divider',
                                        color: 'text.primary',
                                        fontSize: '0.72rem',
                                    }}
                                >
                                    <DownloadIcon />
                                </IconButton>
                            </Box>
                        </Box>

                        {result.ok ? (
                            <Box
                                sx={{
                                    minHeight: 340,
                                    p: 2.5,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 1,
                                    bgcolor: 'background.paper',
                                    fontFamily: MONO,
                                    fontSize: '0.82rem',
                                    lineHeight: 2.2,
                                    overflowX: 'auto',
                                    color: 'text.secondary',
                                }}
                            >
                                {[result.header, ...result.rows].map(
                                    (row, ri) => (
                                        <Box
                                            key={ri}
                                            sx={{ whiteSpace: 'pre' }}
                                        >
                                            {row.map((cell, ci) => (
                                                <span key={ci}>
                                                    <span
                                                        style={{
                                                            color: dark
                                                                ? '#e8edf5'
                                                                : '#0a1628 ',
                                                        }}
                                                    >
                                                        {cell}
                                                    </span>
                                                    {ci < row.length - 1 && (
                                                        <SepGlyph kind='US' />
                                                    )}
                                                </span>
                                            ))}
                                            {ri < result.rows.length && (
                                                <SepGlyph kind='RS' />
                                            )}
                                        </Box>
                                    ),
                                )}
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    minHeight: 340,
                                    p: 2.5,
                                    border: '1px solid',
                                    borderColor: dark ? '#ff5252' : '#c62828',
                                    borderRadius: 1,
                                    bgcolor: dark
                                        ? 'rgba(255,82,82,0.06'
                                        : 'rgba(198,40,40,0.04)',
                                    fontFamily: MONO,
                                    fontSize: '0.82rem',
                                    color: dark ? '#ff8a80' : '#c62828',
                                }}
                            >
                                {result.error}
                            </Box>
                        )}

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mt: 2,
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 0.75,
                                    alignItems: 'center',
                                }}
                            >
                                <SepGlyph kind='US' />
                                <Typography
                                    variant='caption'
                                    color='text.secondary'
                                >
                                    field separator: 0x1F
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 0.75,
                                    alignItems: 'cetner',
                                }}
                            >
                                <SepGlyph kind='RS' />
                                <Typography
                                    variant='caption'
                                    color='text.secondary'
                                >
                                    record separator: 0x1E
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 8 }}>
                    <SectionHeading eyebrow='Reference' title='The encoder' />
                    <Box
                        component='pre'
                        sx={{
                            m: 0,
                            p: { xs: 2.5, md: 3 },
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            fontFamily: MONO,
                            fontSize: '0.82rem',
                            lineHeight: 1.9,
                            color: 'text.secondary',
                            overflowX: 'auto',
                        }}
                    >
                        {`const US = "\\u001F"; // field separator
const RS = "\\u001E"; // record separator

function toCcsv(rows) {
  const header = Object.keys(rows[0]);
  const body = rows.map(r => header.map(k => String(r[k] ?? "")));
  return [header, ...body].map(r => r.join(US)).join(RS);
}`}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { JsToCcsv };
