import Button from '../../../components/Button/Button.jsx';
import Input from '../../../components/Input/Input.jsx';
import styles from './LoginForm.module.scss';
import {Formik} from 'formik';

function LoginForm() {
    const onSubmit = (values) => {
        console.log(values);
        if (values.username !== 'admin') {
            alert('Access denied');
            return;
        }
    };



    const validate = (values) => {
        let errors = {};
        let specialChar = /[`!@#$%^&*() ]/;
        if (!specialChar.test(values.password)) {
            errors.password = 'Password should contain at least one symbol !@#$%^&*()';
        }

        if (values.username.length < 3 ) {
            errors.username = 'Username should contain at least three symbols';
        }

        if (values.password.length < 6 ) {
            errors.password = 'Password should contain at least three symbols';
        }

        return errors;
    };

    return (
        <Formik initialValues={{
            username: '',
            password: ''
        }}
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit
              }) => (
                <form className={styles['form']} onSubmit={handleSubmit}>
                    {JSON.stringify(errors)}
                    {JSON.stringify(touched)}
                    <Input name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} type="text" placeholder="Username"/>
                    <Input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" placeholder="Password"/>

                    <Button type="submit" onClick={handleSubmit} label="text">
                        Login
                    </Button>
                </form>
            )}

        </Formik>
    );
}

export default LoginForm;