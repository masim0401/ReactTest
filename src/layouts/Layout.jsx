import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';

function Layout() {
    return (
        <div>
            header
            <main className={styles['container']}>
                <Outlet />
            </main>
            footer
        </div>
    );
}

export default Layout;