import React, { useEffect, useState } from 'react';
import styles from './ShapeTree.module.css';
import { getNotificationCenter } from '../../notification';
import type { Mesh } from 'three';
import ThreeEngineController from '../../3d/engine.ts';
import { ShapeNode } from './ShapeNode.tsx';

export const ShapeList: React.FC = () => {
  const [projectName, setProjectName] = useState('Project');
  const [numOfShapes, setNumOfShapes] = useState(0);
  const [shapes, setShapes] = useState<Mesh[]>([]);
  const [selectedShape, setSelectedShape] = useState<Mesh | null>(null);

  useEffect(() => {
    const setNameAction = (newName: string) => {
      setProjectName(newName);
    };
    const shapeChangeAction = (shapes: Mesh[]) => {
      setShapes(shapes);
      setNumOfShapes(ThreeEngineController.getInstance().getObjectCount());
    };
    const shapeSelectionAction = (shape: Mesh | null) => {
      setSelectedShape(shape);
    };

    getNotificationCenter().subscribe('projectName', setNameAction);
    getNotificationCenter().subscribe('shapeAdded', shapeChangeAction);
    getNotificationCenter().subscribe('shapeRemoved', shapeChangeAction);
    getNotificationCenter().subscribe('shapeSelected', shapeSelectionAction);

    return () => {
      getNotificationCenter().unsubscribe('projectName', setNameAction);
      getNotificationCenter().unsubscribe('shapeAdded', shapeChangeAction);
      getNotificationCenter().unsubscribe('shapeRemoved', shapeChangeAction);
      getNotificationCenter().unsubscribe('shapeSelected', shapeSelectionAction);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3>{projectName}</h3>
      <span>{numOfShapes} objects</span>

      <div className={styles.treeContainer}>
        {shapes.map((shape) => (
          <ShapeNode key={shape.uuid} shape={shape} selectedShape={selectedShape} level={0} />
        ))}
      </div>
    </div>
  );
};
