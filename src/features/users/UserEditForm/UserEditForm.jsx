import styles from './UserEditForm.module.scss';
import Input from '../../../components/Input/Input.jsx';
import {Formik} from 'formik';
import Button from '../../../components/Button/Button.jsx';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../store/userSlice.js';
import {useNavigate} from 'react-router-dom';

function UserEditForm({user}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(updateUser(values));
        navigate('/users');
    };

    const userValidate = (values) => {
        let errors = {};
        if (values.name.length < 1 ) {
            errors.name = 'Name is required';
        }
        if (values.lastName.length < 1 ) {
            errors.lastName = 'Lastname is required';
        }
        return errors;
    };
    return (
        <Formik initialValues={{
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            createdAt: user.createdAt
        }}
                validate={userValidate}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={onSubmit}>
            {({
                  values,
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit
              }) => (
                <form className={styles['form']} onSubmit={handleSubmit}>
                    <Input name="name" className={styles['userEditInput']} error={errors.name} onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" placeholder="Name"/>
                    <Input name="lastName" className={styles['userEditInput']} error={errors.lastName} onChange={handleChange} onBlur={handleBlur} value={values.lastName} type="text" placeholder="Last Name"/>

                    <Button type="submit" onClick={handleSubmit} label="text" className={styles['button']}>
                        Save
                    </Button>
                </form>
            )}

        </Formik>
    );
}

export default UserEditForm;