import { BoxGeometry, BufferGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three';
import { vi } from 'vitest';
import { createMainViewController } from '../3d/MainViewController';
import { render } from 'vitest-browser-react';
import SceneCanvas from '../components/SceneCanvas';
import * as exports from '../3d/buildShape';
vi.mock('../3d/buildShape', { spy: true });

export function mockNewMesh({
  color = 'red',
  position = new Vector3(),
  mockedMesh = new Mesh(new BoxGeometry(), new MeshBasicMaterial({ color })),
}: {
  color?: string;
  mockedMesh?: Mesh<BufferGeometry, MeshBasicMaterial>;
  position?: Vector3;
} = {}) {
  vi.spyOn(mockedMesh.position, 'copy').mockImplementationOnce(() => position);

  vi.mocked(exports.buildShape).mockImplementationOnce(() => mockedMesh);
  return mockedMesh;
}

export async function renderSceneCanvas() {
  const controller = createMainViewController();
  const { getByTestId } = await render(<SceneCanvas controller={controller} />);
  const canvas = getByTestId('scene-canvas');

  return { controller, canvas };
}
