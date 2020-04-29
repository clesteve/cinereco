import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOverviewComponent } from './film-overview.component';

describe('FilmOverviewComponent', () => {
  let component: FilmOverviewComponent;
  let fixture: ComponentFixture<FilmOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
