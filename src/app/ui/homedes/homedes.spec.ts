import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedes } from './homedes';

describe('Homedes', () => {
  let component: Homedes;
  let fixture: ComponentFixture<Homedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homedes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
