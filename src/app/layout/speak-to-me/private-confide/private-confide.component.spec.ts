import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateConfideComponent } from './private-confide.component';

describe('PrivateConfideComponent', () => {
  let component: PrivateConfideComponent;
  let fixture: ComponentFixture<PrivateConfideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateConfideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateConfideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
