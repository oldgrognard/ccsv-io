import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { SectionHeading } from '../../components/SectionHeading';
import { SepGlyph } from '../../components/SepGlyph';
import { RS, US } from '../../constants/characters';
import { MONO } from '../../constants/fonts';

const SAMPLE =
    ['id', 'name', 'bio'].join(US) +
    RS +
    ['1', 'Alice', 'Lives in New York, NY.\nWrites a lot.'].join(US) +
    RS +
    ['2', 'Bob', 'Enjoys "quoted" strings; commas, too.'].join(US);

const fromCcsv = (input, mode) => {
    const clean = input.replace(/\r/g, '');
    if (clean.length === 0)
        return { ok: false, error: 'Nothing to parse yet.' };

    // Split on RS, then US
    const records = clean.split(RS).filter((r) => r.length > 0);
    const table = records.map((r) => r.split(US));

    if (mode === 'arrays') {
        return { ok: true, value: table, json: JSON.stringify(table, null, 2) };
    }

    const [header, ...rows] = table;
    if (!header) return { ok: false, error: 'No header reocrd found.' };
    const objects = rows.map((cells) =>
        Object.fromEntries(header.map((key, i) => [key, cells[i] ?? ''])),
    );
    return { ok: true, value: objects, json: JSON.stringify(objects, null, 2) };
};

const CcsvToJs = () => {
    const [input, setInput] = React.useState(SAMPLE);
    const [shape, setShape] = React.useState('objects');
    const [copied, setCopied] = React.useState(false);
    const result = React.useMemo(() => fromCcsv(input, shape), [input, shape]);

    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    const copy = async () => {
        if (!result.ok) return;
        await navigator.clipboard.writeText(result.json);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    };

    return (
        <>
            <PageHeader
                eyebrow='Utility - Decode'
                title='.ccsv to JavaScript'
                intro='Paste raw .cssv (control characters and all) and get back a JSON array. The parser is two splits: on RS for records, on US for fields. No state machine, no quoting rules. Runs entirely in your browser.'
            />

            <Container maxWidth='lg' sx={{ pb: { xs: 8, md: 14 } }}>
                <Grid container spacing={4}>
                    <Grid sixe={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                mb: 4,
                                flexWrap: 'wrap',
                                gap: 2,
                            }}
                        >
                            <SectionHeading eyebrow='Input' title='.ccsv' />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 0.75,
                                    alignItems: 'center',
                                    mb: 0.5,
                                }}
                            >
                                <SepGlyph kind='US' />
                                <SepGlyph kind='RS' />
                                <Typography variant='caption'>
                                    separators are invisible here
                                </Typography>
                            </Box>
                        </Box>
                        <TextField
                            multiline
                            fullWidth
                            minRows={16}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
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
                                flexWrap: 'wrap',
                                gap: 2,
                            }}
                        >
                            <SectionHeading eyebrow='Output' title='JSON' />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                    mb: 0.5,
                                    alignItems: 'center',
                                }}
                            >
                                <ToggleButtonGroup
                                    size='small'
                                    exclusive
                                    value={shape}
                                    onChange={(_, v) => v && setShape(v)}
                                    sx={{
                                        '& .MuiToggleButton-root': {
                                            fontFamily: MONO,
                                            fontSize: '0.68rem',
                                            px: 1.25,
                                            py: 0.5,
                                            borderColor: 'divider',
                                            color: 'text.secondary',
                                            '&.Mui-selected': {
                                                color: 'primary.main',
                                                bgcolor: dark
                                                    ? 'rgba(0,229,255,0.08)'
                                                    : 'rgba(0,102,204,0.06)',
                                            },
                                        },
                                    }}
                                >
                                    <ToggleButton value='objects'>
                                        objects
                                    </ToggleButton>
                                    <ToggleButton value='arrays'>
                                        arrays
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                <Button
                                    variant='outlined'
                                    size='small'
                                    onClick={copy}
                                    disabled={!result.ok}
                                    sx={{
                                        borderColor: 'divider',
                                        color: 'text.primary',
                                        fontSize: '0.72rem',
                                    }}
                                >
                                    {copied ? 'Copied' : 'Copy'}
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            component='pre'
                            sx={{
                                m: 0,
                                minHeight: 372,
                                p: 2.5,
                                border: '1px solid',
                                borderColor: result.ok
                                    ? 'divider'
                                    : dark
                                      ? '#ff5252'
                                      : '#c62828',
                                borderRadius: 1,
                                bgcolor: result.ok
                                    ? 'background.paper'
                                    : dark
                                      ? 'rgba(255, 82,82, 0.06)'
                                      : 'rgba(198,40,40,0.04)',
                                fontFamily: MONO,
                                fontSize: '0.82rem',
                                lineHeight: 1.8,
                                color: result.ok
                                    ? 'text.secondary'
                                    : dark
                                      ? '#ff8a80'
                                      : 'c62828',
                                overflowX: 'auto',
                            }}
                        >
                            {result.ok ? result.json : result.error}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 8 }}>
                    <SectionHeading eyebrow='Reference' title='The parser' />
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
                        
function toCssv(rows) {
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

export { CcsvToJs };
