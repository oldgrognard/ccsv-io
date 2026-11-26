const parsingRules = [
    'Decode the input as UTF-8',
    'Reject a UTF-8 byte-order mark',
    'Recognize the required header',
    'Ensure that every record contains the same number of fields',
    'Ensure that any trailing RS is optional',
    'Do not provide any quoting or escaping mechanism',
];

export { parsingRules };
