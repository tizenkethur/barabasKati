import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessConscComponent } from './access-consc.component';

describe('AccessConscComponent', () => {
  let component: AccessConscComponent;
  let fixture: ComponentFixture<AccessConscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessConscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessConscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
