import { type PropsWithChildren } from 'react';
import styles from './ShapeTree.module.css';

import type { Mesh } from 'three';
import { getNotificationCenter } from '../../notification';

export const ShapeItem = ({ children, isSelected, shape }: PropsWithChildren<{ isSelected: boolean; shape: Mesh }>) => {
  return (
    <div
      className={styles.shapeItem}
      style={{
        backgroundColor: isSelected ? '#ffff00' : 'transparent',
      }}
      onClick={(e) => {
        getNotificationCenter().notify('shapeSelected', shape);
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};
