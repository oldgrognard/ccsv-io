import { RS, US } from '../../constants/characters.js';

const fromCcsv = (input, mode) => {
    if (input.length === 0)
        return { ok: false, error: 'Nothing to parse yet.' };

    if (input.startsWith('\uFEFF'))
        return { ok: false, error: 'The header must not begin with a BOM.' };

    const records = input.split(RS);
    if (records.at(-1) === '') records.pop();

    if (!records[0])
        return { ok: false, error: 'The header record must not be empty.' };

    const table = records.map((record) => record.split(US));
    const [header, ...rows] = table;

    for (let i = 1; i < records.length; i++) {
        if (records[i] === '') {
            return { ok: false, error: `Record ${i + 1} is empty.` };
        }
        if (table[i].length !== header.length) {
            return {
                ok: false,
                error: `Record ${i + 1} has ${table[i].length} fields; expected ${header.length}.`,
            };
        }
    }

    if (mode === 'arrays') {
        return { ok: true, value: table, json: JSON.stringify(table, null, 2) };
    }

    const objects = rows.map((cells) =>
        Object.fromEntries(header.map((key, i) => [key, cells[i]])),
    );
    return { ok: true, value: objects, json: JSON.stringify(objects, null, 2) };
};

export { fromCcsv };
