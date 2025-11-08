import { describe, expect, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { App } from './App.tsx';

const renderApp = async () => {
  return await render(<App />);
};

describe('Application', async () => {
  describe('Toolbar', () => {
    test('should display initial project name', async () => {
      const { getByTestId } = await renderApp();
      const toolbar = getByTestId('top-toolbar');

      expect(toolbar.getByText('Project')).toBeInTheDocument();
      expect(toolbar.getByText('Project')).toBeInTheDocument();
      expect(toolbar.getByRole('button')).toHaveTextContent('Change name');
    });

    test('should be able to set and update the project name', async () => {
      const { getByTestId } = await renderApp();
      const toolbar = getByTestId('top-toolbar');
      const shapeProperties = getByTestId('shape-properties');
      const button = toolbar.getByRole('button');

      await button.click();

      await userEvent.keyboard(' 2');

      await button.click();

      expect(toolbar.getByText('Project', { exact: true })).not.toBeInTheDocument();
      expect(toolbar.getByText('Project 2')).toBeInTheDocument();
      expect(shapeProperties.getByText('Project 2')).toBeInTheDocument();
    });
  });

  describe('Shape Management', () => {
    test('The user should be able to add shapes (sphere, cube, cylinder) to the 3D scene', async () => {
      const { getByTestId } = await renderApp();
      const toolbar = getByTestId('top-toolbar');
      const shapePanel = getByTestId('shape-panel');

      const addShapeButtons = shapePanel.getByRole('button').all();

      expect(toolbar.getByText('0 objects')).toBeInTheDocument();

      await addShapeButtons[0].click();
      await addShapeButtons[1].click();
      await addShapeButtons[2].click();

      expect(toolbar.getByText('3 objects')).toBeInTheDocument();
    });

    test('should be able to select and remove shapes from the 3D scene', async () => {
      const { getByTestId } = await renderApp();
      const shapeProperties = getByTestId('shape-properties');
      const shapePanel = getByTestId('shape-panel');

      const addShapeButtons = shapePanel.getByRole('button').all();
      await addShapeButtons[0].click();

      const shapes = shapeProperties.getByText(/^Shape \d+$/).all();
      const shapeToDelete = shapes[shapes.length - 1];
      const nameToDelete = shapeToDelete.element().textContent;

      await shapeToDelete.click();
      await userEvent.keyboard('{Delete}');

      expect(shapeProperties.getByText(nameToDelete, { exact: true })).not.toBeInTheDocument();
    });

    test('should be able to add shapes as children to existing shapes', async () => {
      const { getByTestId } = await renderApp();
      const shapeProperties = getByTestId('shape-properties');
      const shapePanel = getByTestId('shape-panel');

      const addShapeButtons = shapePanel.getByRole('button').all();
      await addShapeButtons[0].click();

      const shapes = shapeProperties.getByText(/^Shape \d+$/).all();
      const shapeToAddChild = shapes[0];
      await shapeToAddChild.click();
      await addShapeButtons[0].click();

      expect(shapeProperties.getByText(/^Child Shape \d+$/)).toBeInTheDocument();
    });
  });

  describe('Shape Listing', () => {
    test('The user should be able to see the total amount of shapes visible in the scene', async () => {
      const { getByTestId } = await renderApp();
      const shapeProperties = getByTestId('shape-properties');

      expect(shapeProperties.getByText(/^\d+ objects$/)).toBeInTheDocument();
    });
  });
});
