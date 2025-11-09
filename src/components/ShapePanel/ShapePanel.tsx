import { type MainViewController } from '../../3d/MainViewController';
import Button from './ShapeButton.tsx';
import type { Shape } from '../../3d/buildShape.ts';

export const ShapePanel = ({ controller }: { controller: MainViewController }) => {
  const createMultipleShapes = (amount: number) => {
    const shapes: Shape[] = ['sphere', 'cube', 'cylinder'];

    for (let i = 0; i < amount; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      controller.createShape(shape);
    }
  };

  return (
    <div>
      <Button label="sphere" onClick={() => controller.createShape('sphere')} />
      <Button label="cube" onClick={() => controller.createShape('cube')} />
      <Button label="cylinder" onClick={() => controller.createShape('cylinder')} />
      <Button label="1000 shapes" onClick={() => createMultipleShapes(1000)} />
      <Button label="10000 shapes" onClick={() => createMultipleShapes(10000)} />
    </div>
  );
};
