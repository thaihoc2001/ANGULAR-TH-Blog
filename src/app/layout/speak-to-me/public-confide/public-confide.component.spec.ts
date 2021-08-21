import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicConfideComponent } from './public-confide.component';

describe('PublicConfideComponent', () => {
  let component: PublicConfideComponent;
  let fixture: ComponentFixture<PublicConfideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicConfideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicConfideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
