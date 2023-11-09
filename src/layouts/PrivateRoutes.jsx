import {Navigate, Outlet} from 'react-router-dom';
import styles from './PrivateRoutes.module.scss';
import {useSelector} from 'react-redux';

function PrivateRoutes() {
    const {isAuthorized} = useSelector((state) => state.auth);

    return (
        isAuthorized ? <div>
            <main className={styles['container']}>
                <Outlet />
            </main>
        </div> : <Navigate to="/login"/>
    );
}

export default PrivateRoutes;