import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagmentComponent } from './data-managment.component';

describe('DataManagmentComponent', () => {
  let component: DataManagmentComponent;
  let fixture: ComponentFixture<DataManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
