import * as THREE from 'three';
import { Mesh } from 'three';

export type Shape = 'sphere' | 'cube' | 'cylinder';

function toCssHex(color: number): string {
  return `#${color.toString(16).padStart(6, '0')}`;
}

export function buildShape(shape: Shape): Mesh {
  const colors = [0xff0000, 0x00ff00, 0x0000ff];

  const color = colors[Math.floor(Math.random() * colors.length)];

  let mesh: Mesh;

  switch (shape) {
    case 'sphere':
      mesh = new Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial({ color }));
      break;
    case 'cube':
      mesh = new Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color }));
      break;
    case 'cylinder':
      mesh = new Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), new THREE.MeshStandardMaterial({ color }));
      break;
  }

  mesh.userData = { ...mesh.userData, color: toCssHex(color), geometryType: shape };

  return mesh;
}
