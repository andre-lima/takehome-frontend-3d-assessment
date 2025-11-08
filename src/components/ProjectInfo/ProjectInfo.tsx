import styles from './ProjectInfo.module.css';
import { useState } from 'react';
import { getNotificationCenter } from '../../notification';

export const ProjectInfo = () => {
  const [projectName, setProjectName] = useState('Project');

  const handleClickButton = () => {
    const newName = prompt('Enter new name', projectName) || projectName;
    setProjectName(newName);
    getNotificationCenter().notify('projectName', newName);
  };

  return (
    <div className={styles.projectInfo}>
      <h2 className={styles.projectName}>{projectName}</h2>
      <button onClick={handleClickButton} className={styles.button}>
        Change name
      </button>
    </div>
  );
};
