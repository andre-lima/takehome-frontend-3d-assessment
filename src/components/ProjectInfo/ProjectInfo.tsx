import styles from './ProjectInfo.module.css';
import { useRef, useState } from 'react';
import { getNotificationCenter } from '../../notification';

export const ProjectInfo = () => {
  const [projectName, setProjectName] = useState('Project');
  const [isEditingName, setIsEditingName] = useState(false);
  const inputValue = useRef<HTMLInputElement>(null);

  const handleClickButton = () => {
    if (isEditingName && inputValue.current && inputValue.current?.value.length > 0) {
      setProjectName(inputValue.current.value);
      getNotificationCenter().notify('projectName', inputValue.current.value);
      setIsEditingName(false);
    } else {
      setIsEditingName(true);
    }
  };

  return (
    <div className={styles.projectInfo}>
      {isEditingName ? (
        <input
          data-testid="project-name-input"
          ref={inputValue}
          className={styles.nameInput}
          type="text"
          defaultValue={projectName}
        ></input>
      ) : (
        <h2 onClick={handleClickButton} className={styles.projectName}>
          {projectName}
        </h2>
      )}
      <button onClick={handleClickButton} className={styles.button}>
        {isEditingName ? 'Save' : 'Change name'}
      </button>
    </div>
  );
};
