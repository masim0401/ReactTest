import styles from './Input.module.scss';
import cn from 'classnames';

function Input({
                   name,
                   placeholder,
                   type,
                   value,
                   onChange,
                   onBlur,
                   error,
                   className
// передать объект ошибки (текст ошибки)
               }) {
    return (
        <div>
            <input onChange={onChange}
                   onBlur={onBlur}
                   value={value}
                   className={cn(styles['input'],className, (error ? styles['inputError'] : null))}
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
/*cn(styles['userEditInput'])*/
export default Input;