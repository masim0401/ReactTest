import {Outlet, useNavigate} from 'react-router-dom';
import styles from './PrivateRoutes.module.scss';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

function PrivateRoutes() {
    const navigate = useNavigate();
    const {isAuthorized} = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isAuthorized) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <main className={styles['container']}>
                <Outlet />
            </main>
        </div>
    );
}

export default PrivateRoutes;