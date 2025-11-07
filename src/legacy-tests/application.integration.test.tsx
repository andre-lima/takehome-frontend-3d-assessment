import { describe, expect, test, vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import '../../index';
import { userEvent } from '@testing-library/user-event';

describe('Application', () => {
  const toolbar = screen.getByTestId('top-toolbar');
  const shapePanel = screen.getByTestId('shape-panel');
  const shapeProperties = screen.getByTestId('shape-properties');

  describe('Toolbar', () => {
    test('should display initial project name', async () => {
      expect(within(toolbar).getByText('Project')).toBeInTheDocument();
      expect(within(shapeProperties).getByText('Project')).toBeInTheDocument();
      expect(within(toolbar).getByRole('button')).toHaveTextContent('Change name');
    });

    test('should be able to set and update the project name', async () => {
      const button = within(toolbar).getByRole('button');

      vi.spyOn(window, 'prompt').mockReturnValue('New project name');

      await userEvent.click(button);

      expect(prompt).toHaveBeenCalledWith('Enter new name', 'Project');
      expect(within(toolbar).queryByText('Project')).not.toBeInTheDocument();
      expect(within(toolbar).getByText('New project name')).toBeInTheDocument();
      expect(within(shapeProperties).getByText('New project name')).toBeInTheDocument();
    });
  });

  describe('Shape Management', () => {
    test('The user should be able to add shapes (sphere, cube, cylinder) to the 3D scene', async () => {
      const addShapeButtons = within(shapePanel).getAllByRole('button');

      expect(within(toolbar).getByText('0 objects')).toBeInTheDocument();

      await userEvent.click(addShapeButtons[0]);
      await userEvent.click(addShapeButtons[1]);
      await userEvent.click(addShapeButtons[2]);

      expect(within(toolbar).getByText('4 objects')).toBeInTheDocument();
    });
  });
});
