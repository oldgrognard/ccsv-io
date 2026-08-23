const comparisonData = [
    {
        attribute: 'Delimiter collision',
        ccsv: {
            value: 'NONE: control chars never appear in text data',
            score: 5,
        },
        csv: {
            value: 'FREQUENT: commas appear in prose, numbers, addresses',
            score: 2,
        },
        tsv: {
            value: 'MODERATE: tabs appear in source code, logs, notes',
            score: 3,
        },
    },
    {
        attribute: 'Quoting / escaping required',
        ccsv: { value: 'NEVER: no quoting rules needed by design', score: 5 },
        csv: {
            value: 'Always when commas, newlines, or quotes in values',
            score: 2,
        },
        tsv: { value: 'When tabs or newlines appear in values', score: 3 },
    },
    {
        attribute: 'Multi-line cell values',
        ccsv: { value: 'NATIVE: newlines are just data characters', score: 5 },
        csv: {
            value: 'Requires quoting; parsers often disagree on behavior',
            score: 2,
        },
        tsv: { value: 'Requires escaping; poorly standardized', score: 2 },
    },
    {
        attribute: 'Parser complexity',
        ccsv: {
            value: 'TRIVIAL: split on RS, then US. No state machine needed',
            score: 5,
        },
        csv: {
            value: 'COMPLEX: quoting, escaping, and edge cases abound',
            score: 1,
        },
        tsv: {
            value: 'MODERATE: simpler than CSV but quoting still needed',
            score: 3,
        },
    },
    {
        attribute: 'Human readability',
        ccsv: {
            value: 'LOW; control chars invisible in most editors',
            score: 2,
        },
        csv: {
            value: 'HIGH: immediately readable in any text editor',
            score: 5,
        },
        tsv: { value: 'HIGH: tab alignment is visible and clear', score: 4 },
    },
    {
        attribute: 'Spec ambiguity',
        ccsv: {
            value: 'NONE: delimiter is unambiguous by ASCII definition',
            score: 5,
        },
        csv: {
            value: 'HIGH: RFC 4180 is advisory; dialects proliferate',
            score: 1,
        },
        tsv: {
            value: 'MODERATE: no formal RFC; de-facto standard varies',
            score: 2,
        },
    },
    {
        attribute: 'Streaming / chunked parse',
        ccsv: {
            value: 'TRIVIAL: RS and US are unambiguous boundary markers',
            score: 5,
        },
        csv: {
            value: 'HARD: must buffer quoted fields across chunks',
            score: 2,
        },
        tsv: {
            value: 'MODERATE: simpler than CSV but still stateful',
            score: 3,
        },
    },
    {
        attribute: 'Tooling & ecosystem',
        ccsv: {
            value: 'EMERGING: growing adoption, few dedicated tools',
            score: 2,
        },
        csv: {
            value: 'UBIQUITOUS: Excel, pandas, every ETL pipeline',
            score: 5,
        },
        tsv: {
            value: 'GOOD: supported in many databases and tools',
            score: 4,
        },
    },
];

export { comparisonData };
