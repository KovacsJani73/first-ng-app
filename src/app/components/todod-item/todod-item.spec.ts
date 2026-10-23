import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TododItem } from './todod-item';

describe('TododItem', () => {
  let component: TododItem;
  let fixture: ComponentFixture<TododItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TododItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TododItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
