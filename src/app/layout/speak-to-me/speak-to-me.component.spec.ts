import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakToMeComponent } from './speak-to-me.component';

describe('SpeakToMeComponent', () => {
  let component: SpeakToMeComponent;
  let fixture: ComponentFixture<SpeakToMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakToMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
