import { Route, Routes } from 'react-router';
import { Root } from './Root.jsx';
import { Landing } from './Landing';

const Router = () => {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route path='/' element={<Landing />} />
            </Route>
        </Routes>
    );
};

export { Router };
