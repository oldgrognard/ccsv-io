const specPreviewData = [
    'The file MUST be encoded in UTF-8',
    'The file MUST NOT begin with a UTF-8 byte order mark (BOM, U+FEFF).',
    'The file MUST begin with a header.',
    'US (U+001F) separates fields within a record.',
    'RS (U+001E) separates records.',
    'The header and every data record MUST contain the same number of fields.',
    'US and RS MUST NOT occur within the field contents.',
    'CR and LF may occur within field contents.',
    'A final RS is optional.',
    'A CCSV may contain a header without any data records.',
];

export { specPreviewData };
