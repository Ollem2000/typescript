import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOnInitComponent } from './title-on-init.component';

describe('TitleOnInitComponent', () => {
  let component: TitleOnInitComponent;
  let fixture: ComponentFixture<TitleOnInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleOnInitComponent]
    });
    fixture = TestBed.createComponent(TitleOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
