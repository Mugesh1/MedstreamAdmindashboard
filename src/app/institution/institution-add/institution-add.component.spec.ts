import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAddComponent } from './institution-add.component';

describe('InstitutionAddComponent', () => {
  let component: InstitutionAddComponent;
  let fixture: ComponentFixture<InstitutionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
