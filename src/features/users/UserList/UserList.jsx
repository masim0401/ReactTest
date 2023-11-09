import styles from './UserList.module.scss';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

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
                        <td><Link to={`/users/edit/${user.id}`}>Edit</Link></td>
                    </tr>
                );
            })}
            </tbody>
        </table>

    );
}

export default UserList;