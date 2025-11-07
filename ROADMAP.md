# Mini MachineBuilder

After going through the application and its codebase, here are a proposal for a Roadmap of improvements, new features and bug fixes.

*Note: Most likely, not all of these items will be tackled by the end of the assignment.*

# 1 - Application Improvements

## Code 

- [ ] Reactifying the whole application
  - [ ] Replace jquery with React components
- [ ] Improve test coverage
- [ ] CSS architecture
  - [ ] Create a design system
    - [ ] Color pallete
    - [ ] Spacing variables
    - [ ] Typography variables
  - [ ] Rename classes to use camelCase as recommended by CSS Modules documentation

## 3D Scene

- [ ] Add a 3D grid
- [ ] Add axis at point (0, 0, 0)
- [ ] Change geometry material

# 2 - Bugs

- [ ] Count value is not correct
- [ ] Two scenes are created
- [ ] useEffect subscriptions are not being cleared

# 3 - Features

- [ ] The user should be able to remove a shape from the scene shape from the shape tree by clicking a "delete" button
    - [ ] The button should be next to each item in the tree
- [ ] Allow the user to see the shape's geometry type and color in the tree view

# 4 - Performance improvements

TBD

# 5 - Future Improvements

- [ ] Add a debug toggle, toggling an overlay showing on top of the objects, displaying its label and position.
- [ ] Add a wireframe toggle, showing the geometries' wireframe when toggled.