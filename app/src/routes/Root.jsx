import { Outlet } from 'react-router';
import { Providers } from '../components/Providers';

const Root = () => {
    return (
        <div className='root'>
            <Provideers>
                <Outlet/>
            </Provideers>
        </div>
    )
}

export { Root };