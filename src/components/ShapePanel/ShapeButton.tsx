import styles from './shapePanel.module.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const ShapeButton = ({ label, onClick }: ButtonProps) => {
  const _onClick = () => {
    onClick();
  };
  return (
    <button className={styles.shapePanelButton} onClick={_onClick}>
      Add {label}
    </button>
  );
};

export default ShapeButton;
