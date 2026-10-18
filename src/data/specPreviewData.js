const specPreviewData = [
    'The file MUST be encoded in UTF-8',
    'The file MUST NOT begin with a UTF-8 byte order mark (BOM, U+FEFF).',
    'The file MUST begin with a header. The header consists of one or more fields separated by US (U+001F).',
    'US (U+001F) MUST occur between adjacent fields in a record.',
    'RS (U+001E) MUST occur between adjacent records, including between the header and the first data record.',
    'RS MAY occur immediately after the final record. A producer SHOULD NOT add an RS after the final record unless doing so is useful for the producer or its surrounding processing system.',
    'The header and every record MUST contain the same number of fields.',
    'Empty fields are represented by consecutive delimiters or by a delimiter adjacent to the beginning or end of a record, as applicable.',
    'US (U+001F) and RS (U+001E) MUST NOT occur within the contents of a field.',
    'Carriage return (CR, U+000D) and line feed (LF, U+000A) are valid field characters and MUST NOT be interpreted as record separators.',
];

export { specPreviewData };
