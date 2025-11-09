# Mini MachineBuilder

This is the result of the 3D Frontend test, taken by Andre Lima, and finished on Nov 9th, 2025.

Below, I list the assumptions I took while working on this challenge, as well as the list of tasks, fixes and features I planned to work on and completed.

# Assumptions

## Shapes' Labels

- The shape labels should include a number that represents the number of shapes created so far +1.

- If a shape is deleted, the number of shapes created is not subtracted by 1.

- Children shapes' labels will use the same global counter, and will not be numbered after its parent's chldren shapes created.

## Shape Preview

- I'm using a simple unicode character that represents roughly the shape displayed. An image file could be used in the future.

## Performance

- I'm simply reducing the geometries' segment count to improve performance. This way I managed to instantiate 1000 shapes with some performance hit but still usable.
- With 10000 shapes, after the objects are instantiated, it's still possible to navigate the scene, but raycasting seems to cause the application to freeze.
- InstantiatedMeshes made the performance worse. To be investigated why.

# Roadmap

After going through the application and its codebase, here's a proposal for a Roadmap of improvements, new features and bug fixes.

Each item has a checkbox showing its current state of completion.

*Note: As expected, not all of these items were tackled by the end of the assignment.*

## 1 - Application Improvements

### Components 

- [x] Reactifying the whole application.
  - [x] Replace jquery with React components.
- [x] Change project name with an input element.
- [x] Organize components

### Tests

- [x] Add integration tests to help with refactoring.
- [x] Increase test coverage.
- [ ] Write unit tests for the 3D modules.

### 3D Scene

- [x] Add a 3D grid.
- [x] Add axis at point (0, 0, 0).
- [x] Change geometry material and add lights.

## 2 - Bugs/Issues

- [x] Objects count value is not correct.
- [x] useEffect and notification subscriptions are not being cleared.
- [x] When deleting shapes, the shape names changes based on index.
- [x] When deleting shapes with the backspace key, the browser navigates back to previous history.

## 3 - Features

- [x] The user should be able to remove a shape from the scene shape from the shape tree by clicking a "delete" button.
    - [x] The button should be next to each item in the tree.
- [x] Allow the user to see the shape's geometry type and color in the tree view.

## 4 - Performance improvements

- [x] Rendering 1000 objects.
- [ ] Rendering 10000 objects.

## 5 - Future Improvements

- [ ] Revisit pub/sub library and propose alternatives.
- [ ] Using Radix Theme or custom library to improve page design.
- [ ] Add a debug toggle, toggling an overlay showing on top of the objects, displaying its label and position.
- [ ] Add a wireframe toggle, showing the geometries' wireframe when toggled.
- [ ] Collapsing children shape list to improve visualization of nodes.
- [ ] CSS architecture.
  - [x] Dark mode.
  - [ ] Create a design system.
    - [ ] Color palette.
    - [ ] Spacing variables.
    - [ ] Typography variables.