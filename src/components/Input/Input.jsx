import styles from './Input.module.scss';

function Input({
                   name,
                   placeholder,
                   type,
                   value,
                   onChange,
                   onBlur,
                   error
// передать объект ошибки (текст ошибки)
               }) {
    return (
        <div>
            <input onChange={onChange}
                   onBlur={onBlur}
                   value={value}
                   className={styles['input']}
                   name={name}
                   placeholder={placeholder}
                   type={type}
            />
            <div className={styles['error']}>
                {error && error}
            </div>
        {/*  // вывести текст ошибки, по-умолчанию не показывать  */}
        </div>
    );
}

export default Input;