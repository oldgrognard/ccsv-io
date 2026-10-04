import { BrowserRouter, Route, Routes } from 'react-router';
import { DevNotes } from './DevNotes';
import { MySql } from './examples/MySql';
import { SqLite } from './examples/SqLite';
import { Landing } from './Landing';
import { NotFound } from './NotFound';
import { Root } from './Root';
import { CcsvToJs } from './tools/CcsvToJs';
import { JsToCcsv } from './tools/JsToCcsv';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Root />}>
                    <Route path='/' element={<Landing />} />
                    <Route path='examples/mysql' element={<MySql />} />
                    <Route path='examples/sqLite' element={<SqLite />} />
                    <Route path='tools/js-to-ccsv' element={<JsToCcsv />} />
                    <Route path='tools/ccsv-to-js' element={<CcsvToJs />} />
                    <Route path='dev-notes' element={<DevNotes />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { Router };
