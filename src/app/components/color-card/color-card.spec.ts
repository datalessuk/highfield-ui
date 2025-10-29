import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCard } from './color-card';

describe('ColorCard', () => {
  let component: ColorCard;
  let fixture: ComponentFixture<ColorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
