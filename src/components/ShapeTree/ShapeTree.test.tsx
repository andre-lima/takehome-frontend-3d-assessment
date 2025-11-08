import { describe, expect, test } from 'vitest';
import { createMainViewController } from '../../3d/MainViewController.ts';
import { render } from 'vitest-browser-react';
import { ShapeList } from './ShapeTree.tsx';
import { act } from 'react';

describe('ShapeTree', () => {
  async function renderSceneCanvas() {
    const controller = createMainViewController();
    const { getByText } = await render(<ShapeList />);

    return { controller, getByText };
  }

  test('should name shapes increasingly even when a shape is deleted', async () => {
    const { controller, getByText } = await renderSceneCanvas();

    act(() => {
      controller.createShape('sphere');
    });

    const shape1 = getByText('Shape 1');
    expect(shape1).toBeInTheDocument();
    await shape1.click();

    act(() => {
      controller.deleteSelectedShape();
      controller.createShape('sphere');
    });

    expect(getByText('Shape 1')).not.toBeInTheDocument();
    expect(getByText('Shape 2')).toBeInTheDocument();
  });
});
