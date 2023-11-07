import styles from './Input.module.scss';

function Input({
                   name,
                   placeholder,
                   type,
                   value,
                   onChange,
                   onBlur

               }) {
    return (
        <input onChange={onChange}
               onBlur={onBlur}
               value={value}
               className={styles['input']}
               name={name}
               placeholder={placeholder}
               type={type}
        />
    );
}

export default Input;