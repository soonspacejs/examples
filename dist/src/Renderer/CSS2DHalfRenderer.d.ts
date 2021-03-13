import { Object3D, Scene, Camera } from 'three';
export declare class CSS2DHalfObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;
    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
}
export declare class CSS2DHalfSprite extends CSS2DHalfObject {
    constructor(element: HTMLElement);
}
export declare class CSS2DHalfRenderer {
    constructor();
    domElement: HTMLElement;
    getSize(): {
        width: number;
        height: number;
    };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
}
