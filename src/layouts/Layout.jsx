import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';


function Layout() {
    return (
        <div>
            <main className={styles['container']}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;