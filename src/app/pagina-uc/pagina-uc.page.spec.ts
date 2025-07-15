import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaUcPage } from './pagina-uc.page';

describe('PaginaUcPage', () => {
  let component: PaginaUcPage;
  let fixture: ComponentFixture<PaginaUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
