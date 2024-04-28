import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoModificaComponent } from './contatto-modifica.component';

describe('ContattoModificaComponent', () => {
  let component: ContattoModificaComponent;
  let fixture: ComponentFixture<ContattoModificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContattoModificaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContattoModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
