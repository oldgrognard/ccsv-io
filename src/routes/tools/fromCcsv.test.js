import assert from 'node:assert/strict';
import { test } from 'node:test';
import { RS, US } from '../../constants/characters.js';
import { fromCcsv } from './fromCcsv.js';

for (const mode of ['arrays', 'objects']) {
    test(`${mode}: rejects empty input, an empty header, and a leading BOM`, () => {
        for (const input of ['', RS, `${RS}row`, `\uFEFFheader`]) {
            const result = fromCcsv(input, mode);
            assert.equal(result.ok, false, JSON.stringify(input));
            assert.ok(result.error);
        }
    });

    test(`${mode}: rejects empty records, including after a trailing RS`, () => {
        for (const input of [
            `header${RS}${RS}row`,
            `header${RS}row${RS}${RS}`,
            `header${RS}${RS}`,
        ]) {
            const result = fromCcsv(input, mode);
            assert.equal(result.ok, false, JSON.stringify(input));
            assert.match(result.error, /Record \d+ is empty/);
        }
    });

    test(`${mode}: rejects records with missing or extra fields`, () => {
        for (const row of ['one', `one${US}two${US}three`]) {
            const result = fromCcsv(`a${US}b${RS}${row}`, mode);
            assert.equal(result.ok, false);
            assert.match(result.error, /Record 2 has \d+ fields; expected 2/);
        }
        const result = fromCcsv(`a${US}b${RS}one${US}two${RS}three`, mode);
        assert.equal(result.ok, false);
        assert.match(result.error, /Record 3/);
    });

    test(`${mode}: accepts header-only input with or without a final RS`, () => {
        for (const suffix of ['', RS]) {
            const result = fromCcsv(`a${US}b${suffix}`, mode);
            assert.equal(result.ok, true);
            assert.deepEqual(result.value, mode === 'arrays' ? [['a', 'b']] : []);
        }
    });

    test(`${mode}: preserves empty cells, line breaks, and optional final RS`, () => {
        for (const suffix of ['', RS]) {
            const input = `a${US}b${RS}${US}line\r\nnext${RS}value${US}${suffix}`;
            const result = fromCcsv(input, mode);
            assert.equal(result.ok, true);
            assert.deepEqual(
                result.value,
                mode === 'arrays'
                    ? [['a', 'b'], ['', 'line\r\nnext'], ['value', '']]
                    : [{ a: '', b: 'line\r\nnext' }, { a: 'value', b: '' }],
            );
            assert.deepEqual(JSON.parse(result.json), result.value);
        }
    });

    test(`${mode}: accepts an all-empty multi-field record`, () => {
        const result = fromCcsv(`a${US}b${RS}${US}`, mode);
        assert.equal(result.ok, true);
        assert.deepEqual(
            result.value,
            mode === 'arrays' ? [['a', 'b'], ['', '']] : [{ a: '', b: '' }],
        );
    });

    test(`${mode}: accepts valid single-field records`, () => {
        const result = fromCcsv(`header${RS}value${RS}`, mode);
        assert.equal(result.ok, true);
        assert.deepEqual(
            result.value,
            mode === 'arrays' ? [['header'], ['value']] : [{ header: 'value' }],
        );
    });
}
