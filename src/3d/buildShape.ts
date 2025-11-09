import * as THREE from 'three';
import { Mesh } from 'three';

export type Shape = 'sphere' | 'cube' | 'cylinder';

function toCssHex(color: number): string {
  return `#${color.toString(16).padStart(6, '0')}`;
}

const preInstancedGeometry = {
  sphere: new THREE.BufferGeometry().copy(new THREE.SphereGeometry(1, 8, 8)),
  cube: new THREE.BufferGeometry().copy(new THREE.BoxGeometry(1, 1, 1)),
  cylinder: new THREE.BufferGeometry().copy(new THREE.CylinderGeometry(1, 1, 2, 8)),
};

const preInstancedMaterial = {
  0xff0000: new THREE.MeshPhongMaterial({ color: 0xff0000 }),
  0x00ff00: new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
  0x0000ff: new THREE.MeshPhongMaterial({ color: 0x0000ff }),
};

export function buildShape(shape: Shape): Mesh {
  const colors = [0xff0000, 0x00ff00, 0x0000ff];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const mesh: Mesh = new Mesh(preInstancedGeometry[shape], preInstancedMaterial[color]);

  mesh.userData = { ...mesh.userData, color: toCssHex(color), geometryType: shape };

  return mesh;
}
