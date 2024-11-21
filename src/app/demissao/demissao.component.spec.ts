import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemissaoComponent } from './demissao.component';

describe('DemissaoComponent', () => {
  let component: DemissaoComponent;
  let fixture: ComponentFixture<DemissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemissaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
