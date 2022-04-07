import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazemComponent } from './hazem.component';

describe('HazemComponent', () => {
  let component: HazemComponent;
  let fixture: ComponentFixture<HazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
