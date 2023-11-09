import styles from './Button.module.scss';
import cn from 'classnames';

function Button({ children, onClick, type, className  }) {
    return (
        <button type={type} onClick={onClick} className={cn(styles['button'], styles['text-color'], className)}>
            {children}
        </button>
    );
}

export default Button;