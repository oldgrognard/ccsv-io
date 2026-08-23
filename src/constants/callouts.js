const callouts = [
    {
        icon: 'check',
        title: 'No quoting grammar',
        body: 'Every CSV parser ships with a state machine to handle quoted fields. .ccsv needs none. Split on RS, split on US. Done.',
    },
    {
        icon: 'check',
        title: 'Multi-line values are free',
        body: 'Because newlines are not delimiters, a value can contain paragraphs, JSON, code, or markdown without any escaping.',
    },
    {
        icon: 'check',
        title: 'Zero dialect drift',
        body: 'CSV has RFC 4180 plus dozens of vendor dialects. .ccsv has one format: US between fields, RS between records.',
    },
    {
        icon: 'warning',
        title: 'Tooling is nascent',
        body: 'Excel, Numbers, and most ETL pipelines will not open .ccsv today. The format trades ecosystem reach for correctness.',
    },
];

export { callouts };
