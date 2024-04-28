import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoAddComponent } from './contatto-add.component';

describe('ContattoAddComponent', () => {
  let component: ContattoAddComponent;
  let fixture: ComponentFixture<ContattoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContattoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContattoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
