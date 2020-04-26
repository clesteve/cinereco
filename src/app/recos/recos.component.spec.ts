import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecosComponent } from './recos.component';

describe('RecosComponent', () => {
  let component: RecosComponent;
  let fixture: ComponentFixture<RecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
