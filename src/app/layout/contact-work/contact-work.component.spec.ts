import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWorkComponent } from './contact-work.component';

describe('ContactWorkComponent', () => {
  let component: ContactWorkComponent;
  let fixture: ComponentFixture<ContactWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
