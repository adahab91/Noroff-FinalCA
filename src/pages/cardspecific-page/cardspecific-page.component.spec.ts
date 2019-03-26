import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardspecificPageComponent } from './cardspecific-page.component';

describe('CardspecificPageComponent', () => {
  let component: CardspecificPageComponent;
  let fixture: ComponentFixture<CardspecificPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardspecificPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardspecificPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
