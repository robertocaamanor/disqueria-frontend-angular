/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscosComponent } from './discos.component';

describe('DiscosComponent', () => {
  let component: DiscosComponent;
  let fixture: ComponentFixture<DiscosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
