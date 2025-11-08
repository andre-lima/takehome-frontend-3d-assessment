# Mini MachineBuilder

After going through the application and its codebase, here are a proposal for a Roadmap of improvements, new features and bug fixes.

*Note: Most likely, not all of these items will be tackled by the end of the assignment.*

# Assumptions

## Shapes' Labels

- The shape labels should include a number that represents the number of shapes created so far +1.

- If a shape was deleted, the number of shapes created is not subtracted by 1.

- Child labels will use the same global counter, and not be numbered after its parent's chldren shapes created.

## Shape Preview

- I'm using a simple unicode character that represents roughly the shape displayed. A better image could be used in the future.

# 1 - Application Improvements

## Code 

- [x] Reactifying the whole application
  - [x] Replace jquery with React components
- [x] Improve test coverage
- [ ] Change project name with an input
- [ ] CSS architecture
  - [ ] Create a design system
    - [ ] Color palette
    - [ ] Spacing variables
    - [ ] Typography variables

## 3D Scene

- [x] Add a 3D grid
- [x] Add axis at point (0, 0, 0)
- [ ] Change geometry material

# 2 - Bugs

- [x] Count value is not correct
- [x] useEffect subscriptions are not being cleared
- [x] When deleting shapes, the shape names changes based on index

# 3 - Features

- [x] The user should be able to remove a shape from the scene shape from the shape tree by clicking a "delete" button
    - [x] The button should be next to each item in the tree
- [ ] Allow the user to see the shape's geometry type and color in the tree view

# 4 - Performance improvements

TBD

# 5 - Future Improvements

- [ ] Using Radix Theme to improve page design (sorry Danilo, but it's quite ugly now!)
- [ ] Add a debug toggle, toggling an overlay showing on top of the objects, displaying its label and position.
- [ ] Add a wireframe toggle, showing the geometries' wireframe when toggled.
- [ ] Collapsing children shape list to improve visualization of nodes.