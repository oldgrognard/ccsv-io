import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css'
import { Router } from './routes/Router';

const container = document.getElementById('app');
const root  = createRoot(container);

root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
)