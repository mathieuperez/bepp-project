import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresContainerComponent } from './membres-container.component';

describe('MembresContainerComponent', () => {
  let component: MembresContainerComponent;
  let fixture: ComponentFixture<MembresContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
