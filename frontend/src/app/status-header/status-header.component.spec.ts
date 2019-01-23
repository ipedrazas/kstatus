import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusHeaderComponent } from './status-header.component';

describe('StatusHeaderComponent', () => {
  let component: StatusHeaderComponent;
  let fixture: ComponentFixture<StatusHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
