import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfficeComponent } from '@src/app/components/list-office/list-office.component';

describe('ListOfficeComponent', () => {
  let component: ListOfficeComponent;
  let fixture: ComponentFixture<ListOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
