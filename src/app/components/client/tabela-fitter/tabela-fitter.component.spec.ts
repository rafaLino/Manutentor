import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFitterComponent } from './tabela-fitter.component';

describe('TabelaFitterComponent', () => {
  let component: TabelaFitterComponent;
  let fixture: ComponentFixture<TabelaFitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaFitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaFitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
