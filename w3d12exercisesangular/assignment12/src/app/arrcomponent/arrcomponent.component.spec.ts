import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrcomponentComponent } from './arrcomponent.component';

describe('ArrcomponentComponent', () => {
  let component: ArrcomponentComponent;
  let fixture: ComponentFixture<ArrcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
