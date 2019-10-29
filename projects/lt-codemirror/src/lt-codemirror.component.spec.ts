import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtCodemirrorComponent } from './lt-codemirror.component';

describe('LtCodemirrorComponent', () => {
  let component: LtCodemirrorComponent;
  let fixture: ComponentFixture<LtCodemirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtCodemirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtCodemirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
