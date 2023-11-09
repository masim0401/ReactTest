import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import UserEditForm from '../features/users/UserEditForm/UserEditForm.jsx';

function UserEdit() {
    const {id} = useParams();
    const user = useSelector((state) => {
        return state.user.users.find((user) => {
            // console.log(user.id, id);
            if (user.id === id) {
                return user;
            }
        });
    });

    return (
        <div>
            <UserEditForm user={user}/>
        </div>
    );
}

export default UserEdit;