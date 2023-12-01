import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NilaiPage } from './nilai.page';

describe('NilaiPage', () => {
  let component: NilaiPage;
  let fixture: ComponentFixture<NilaiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NilaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
