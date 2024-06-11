import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { BoxGeometry, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

@Component({
  standalone:true,
  selector: 'app-phase1',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.scss']
})
export class Phase1Component implements OnInit,AfterViewInit  {

  @ViewChild('threeContainer') threeContainer: ElementRef | undefined;

  private scene: THREE.Scene = new Scene;
  private camera: THREE.PerspectiveCamera = new PerspectiveCamera;
  private renderer: THREE.WebGLRenderer = new WebGLRenderer;
  private geometry: THREE.BoxGeometry = new BoxGeometry;
  private material: THREE.MeshBasicMaterial = new MeshBasicMaterial;
  private cube!: THREE.Mesh;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initThreeJs();
  }

  initThreeJs(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({color: 0x00FFFF, wireframe: true});
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);

    this.camera.position.z = 4;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if(this.threeContainer){
      this.threeContainer.nativeElement.appendChild(this.renderer.domElement);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
