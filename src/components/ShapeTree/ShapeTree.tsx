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

  getNotificationCenter().subscribe('projectName', (newName) => {
    setProjectName(newName);
  });

  useEffect(() => {
    getNotificationCenter().subscribe('shapeAdded', (shapes: Mesh[]) => {
      setShapes(shapes);
      setNumOfShapes(ThreeEngineController.getInstance().getObjectCount());
    });
    getNotificationCenter().subscribe('shapeRemoved', (shapes: Mesh[]) => {
      setShapes(shapes);
      setNumOfShapes(ThreeEngineController.getInstance().getObjectCount());
    });

    getNotificationCenter().subscribe('shapeSelected', (shape: Mesh | null) => {
      setSelectedShape(shape);
    });
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
