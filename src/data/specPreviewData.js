const specPreviewData = [
    ['1.', 'A CCSV file must be UTF-8 encoded.'],
    [
        '2.',
        'Every CCSV file must begin with a header row listing the column names. Colunns are separated by a Unit Separator (US).',
    ],
    ['3.', 'Each row is separated by a Record Separator (RS).'],
    ['4.', 'Every row must have the same number of columns as the header.'],
    ['5.', 'Empty fields are written as two separators in a row.'],
    [
        '6.',
        'The Special separator characters (US) and (RS) cannot appear inside a field value.',
    ],
];

export { specPreviewData };
