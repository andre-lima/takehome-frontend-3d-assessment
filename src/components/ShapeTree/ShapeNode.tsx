import type { Mesh } from 'three';
import type { MouseEvent } from 'react';
import { ShapeItem } from './ShapeItem.tsx';
import styles from './ShapeTree.module.css';

import ThreeEngineController from '../../3d/engine';
import { getNotificationCenter } from '../../notification';
import ShapePreview from './ShapePreview.tsx';

interface ShapeNodeProps {
  shape: Mesh;
  selectedShape: Mesh | null;
  level: number;
}

export const ShapeNode = ({ shape, selectedShape, level }: ShapeNodeProps) => {
  const label = level === 0 ? shape.name : `Child ${shape.name}`;

  const handleDeleteShape = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    const view = ThreeEngineController.getInstance();

    if (shape.userData.isSelected) {
      getNotificationCenter().notify('shapeSelected', null);
    }

    shape.parent?.remove(shape);
    getNotificationCenter().notify('shapeRemoved', view.getObjectsInScene());
  };

  const { geometryType = '?', color = 'black' } = shape.userData;

  return (
    <ShapeItem key={shape.uuid} shape={shape} isSelected={shape.uuid === selectedShape?.uuid}>
      <div className={styles.labelContainer}>
        <ShapePreview type={geometryType} color={color} />
        <div className={styles.label}>{label}</div>
        <button className={styles.deleteButton} onClick={handleDeleteShape}>
          x
        </button>
      </div>
      <div className={styles.shapeChildren}>
        {shape.children.length > 0 && (
          <div style={{ marginLeft: '10px' }}>
            {shape.children.map((child) => (
              <ShapeNode key={child.uuid} shape={child as Mesh} selectedShape={selectedShape} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    </ShapeItem>
  );
};
