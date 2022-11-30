import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaComponent } from './noticia.component';

describe('NoticiaComponent', () => {
  let component: NoticiaComponent;
  let fixture: ComponentFixture<NoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
