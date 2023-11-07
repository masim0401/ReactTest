import styles from './Button.module.scss';
import cn from 'classnames';

function Button({ children, onClick, type }) {
    return (
        <button type={type} onClick={onClick} className={cn(styles['button'], styles['text-color'])}>
            {children}
        </button>
    );
}

export default Button;