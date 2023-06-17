
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumplingComponent } from './dumpling.component';

describe('DumplingComponent', () => {
  let component: DumplingComponent;
  let fixture: ComponentFixture<DumplingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumplingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
