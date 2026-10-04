import React from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './components/Providers.jsx';
import { Router } from './routes/Router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Providers>
            <Router />
        </Providers>
    </React.StrictMode>,
);
