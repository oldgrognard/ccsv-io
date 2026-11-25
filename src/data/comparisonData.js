const comparisonData = [
    {
        attribute: 'Field delimiter',
        ccsv: {
            value: 'US (U+001F)',
        },
        csv: {
            value: 'Comma',
        },
        tsv: {
            value: 'Tab',
        },
    },
    {
        attribute: 'Record delimiter',
        ccsv: { value: 'RS (U+001E)' },
        csv: {
            value: 'Varies by format and implementation',
        },
        tsv: { value: 'Varies by format and implementation' },
    },
    {
        attribute: 'Required header',
        ccsv: { value: 'Yes' },
        csv: {
            value: 'No',
        },
        tsv: { value: 'Not inherently' },
    },
    {
        attribute: 'Required encoding',
        ccsv: {
            value: 'UTF-8',
        },
        csv: {
            value: 'Not defined by the original format specification',
        },
        tsv: {
            value: 'Not defined by a single format specification',
        },
    },
    {
        attribute: 'Quoting syntax',
        ccsv: {
            value: 'None',
        },
        csv: {
            value: 'Yes',
        },
        tsv: { value: 'Implementation dependent' },
    },
    {
        attribute: 'CF/LF in field values',
        ccsv: {
            value: 'Permitted',
        },
        csv: {
            value: 'Requires handling according to the CSV rules',
        },
        tsv: {
            value: 'Implementation dependent',
        },
    },
    {
        attribute: 'Printable delimiter characters',
        ccsv: {
            value: 'Have no delimiter meaning',
        },
        csv: {
            value: 'Comma has delimiter meaning',
        },
        tsv: {
            value: 'Tab has delimiter meaning',
        },
    },
];

export { comparisonData };
