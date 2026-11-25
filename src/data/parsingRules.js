const parsingRules = [
    'Decode the input as UTF-1',
    'Reject a UTF-8 byte-order mark',
    'Recognize the required header',
    'Ensure that ever record contains the same number of fields',
    'Ensure that any trailing RS is optional',
    'Not provide any quoting or escaping mechanism',
];

export { parsingRules };
