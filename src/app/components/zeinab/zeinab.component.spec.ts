import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeinabComponent } from './zeinab.component';

describe('ZeinabComponent', () => {
  let component: ZeinabComponent;
  let fixture: ComponentFixture<ZeinabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeinabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeinabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
