const specPreviewData = [
    [
        '1.',
        'A .ccsv file is a sequence of records, each terminated by RS (0x1E).',
    ],
    ['2.', 'Within a record, fileds are separated by US (0x1F).'],
    ['3.', 'Fields may contain any byte sequence except RS and US.'],
    [
        '4.',
        'Fields may contain newlines, commas, tabs, and quotes without escaping.',
    ],
    ['5.', 'The first record MUST be a header record.'],
    ['6.', 'All records MUST contain the same number of fields.'],
    ['7.', 'Encoding MUST be UTF-8'],
    [
        '8.',
        'A file containing only a header terminated by RS (0x1E) is a valid file with zero records.',
    ],
];

export { specPreviewData };
