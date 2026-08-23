import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Router } from './routes/Router';

const container = document.getElementById('root');
const root  = createRoot(container);

root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
)