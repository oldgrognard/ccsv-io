import { Outlet } from 'react-router';
import { Providers } from '../components/Providers';

const Root = () => {
    return (
        <div className='root'>
            <Providers>
                <Outlet />
            </Providers>
        </div>
    );
};

export { Root };
