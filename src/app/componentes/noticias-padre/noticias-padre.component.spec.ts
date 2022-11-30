import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPadreComponent } from './noticias-padre.component';

describe('NoticiasPadreComponent', () => {
  let component: NoticiasPadreComponent;
  let fixture: ComponentFixture<NoticiasPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
