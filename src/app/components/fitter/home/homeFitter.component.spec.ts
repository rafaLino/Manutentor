import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFitterComponent } from './homeFitter.component';


describe('HomeComponent', () => {
  let component: HomeFitterComponent;
  let fixture: ComponentFixture<HomeFitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
