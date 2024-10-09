import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPersonComponent } from './modify-person.component';

describe('ModifyPersonComponent', () => {
  let component: ModifyPersonComponent;
  let fixture: ComponentFixture<ModifyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
