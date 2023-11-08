import styles from './UserList.module.scss';
import {useEffect} from 'react';
import Button from '../../../components/Button/Button.jsx';

function UserList({data}) {
    useEffect(() => {
        console.log(data);
    }, []);
    return (
        <table className={styles['table']}>
            <thead className={styles['header']}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Created at</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {data.map((user) => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.createdAt}</td>
                        <td><Button>Edit</Button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>

    );
}

export default UserList;