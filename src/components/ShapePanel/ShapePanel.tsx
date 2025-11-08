import { type MainViewController } from '../../3d/MainViewController';
import Button from './ShapeButton.tsx';

export const ShapePanel = ({ controller }: { controller: MainViewController }) => {
  return (
    <div>
      <Button label="sphere" onClick={() => controller.createShape('sphere')} />
      <Button label="cube" onClick={() => controller.createShape('cube')} />
      <Button label="cylinder" onClick={() => controller.createShape('cylinder')} />
    </div>
  );
};
