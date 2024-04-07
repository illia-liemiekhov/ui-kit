import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * What color should the button be?
   */
  color?: 'primary' | 'primaryLight' | 'danger';
  /**
   * What variant should the button be?
   */
  variant?: 'contained' | 'text';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        styles.root,
        styles[`${variant}-${color}`],
        styles[`${size}`],
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
