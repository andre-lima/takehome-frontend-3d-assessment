import SceneCanvas from './components/SceneCanvas/SceneCanvas.tsx';
import { createMainViewController } from './3d/MainViewController';
import { ShapePanel } from './components/ShapePanel/ShapePanel.tsx';
import { ShapeList } from './components/ShapeTree/ShapeTree.tsx';
import '../styles/app.css';
import { useEffect } from 'react';
import { ProjectInfo } from './components/ProjectInfo/ProjectInfo.tsx';
import CountComponent from './components/CountComponent.tsx';

export const App = () => {
  const shapeController = createMainViewController();

  useEffect(() => {
    const handleDeleteKey = (event: KeyboardEvent) => {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        shapeController.deleteSelectedShape();

        if ((event.target as HTMLElement).nodeName !== 'INPUT') {
          event.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleDeleteKey);

    return () => window.removeEventListener('keydown', handleDeleteKey);
  }, []);

  return (
    <>
      <div className="top-toolbar" data-testid={'top-toolbar'}>
        <ProjectInfo />
        <CountComponent />
      </div>
      <div className="main-container">
        <div id="shape-panel" className="left-bar" data-testid="shape-panel">
          <ShapePanel controller={shapeController}></ShapePanel>
        </div>

        <main id="main-view" className="center-area">
          <SceneCanvas controller={shapeController} />
        </main>

        <div id="shape-properties" className="right-bar" data-testid="shape-properties">
          <ShapeList></ShapeList>
        </div>
      </div>
    </>
  );
};
