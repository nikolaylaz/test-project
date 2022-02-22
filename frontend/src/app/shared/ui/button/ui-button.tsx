import styles from './ui-button.module.scss';

export interface UiButtonProps {
  children: any;
  onClick?: (e: any) => void;
  loading?: boolean;
  disabled?: boolean;
}

export function UiButton({
  children,
  onClick,
  loading,
  disabled,
}: UiButtonProps) {
  const _onClick = (e: any) => {
    if (!loading) {
      onClick && onClick(e);
    }
  };

  return (
    <button
      onClick={_onClick}
      type="button"
      disabled={disabled}
      className={disabled ? styles.disabled : styles.btn}
    >
      {children}
    </button>
  );
}
