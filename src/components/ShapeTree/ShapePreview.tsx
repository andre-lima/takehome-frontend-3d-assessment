import type { Shape } from '../../3d/buildShape.ts';

const shapeCharacter = {
  sphere: '●',
  cube: '■',
  cylinder: '▮',
  '?': '?',
};

export const ShapePreview = ({ type, color }: { type: Shape; color: string }) => {
  return <div style={{ width: '20px', color, fontSize: '14px' }}>{shapeCharacter[type]}</div>;
};

export default ShapePreview;
