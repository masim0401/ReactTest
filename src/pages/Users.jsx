import UserList from '../features/users/UserList/UserList.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setUsers} from '../store/userSlice.js';

function Users() {
    const {users} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const fetchData = async () => {
        if (!users.length) {
            const response = await fetch('https://654ba4a15b38a59f28ef7233.mockapi.io/api/v1/users');
            if (response.ok) {
                let json = await response.json();
                dispatch(setUsers(json));
                console.log(json);
            } else {
                alert('HTTP-Error: ' + response.status);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <UserList data={users}/>
        </div>
    );
}

export default Users;

// 1. Компонент создать UserList который будет отвечать за вывод списка пользователей .
// 2. Стилизовать список