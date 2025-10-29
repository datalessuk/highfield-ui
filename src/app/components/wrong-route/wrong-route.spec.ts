import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRoute } from './wrong-route';

describe('WrongRoute', () => {
  let component: WrongRoute;
  let fixture: ComponentFixture<WrongRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
