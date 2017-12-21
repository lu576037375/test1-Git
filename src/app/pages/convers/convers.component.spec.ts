import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversComponent } from './convers.component';

describe('ConversComponent', () => {
  let component: ConversComponent;
  let fixture: ComponentFixture<ConversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
