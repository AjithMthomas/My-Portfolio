/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Phase1Component } from './phase1.component';

describe('Phase1Component', () => {
  let component: Phase1Component;
  let fixture: ComponentFixture<Phase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
