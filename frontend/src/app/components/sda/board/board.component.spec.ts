import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle buttons visibility when clicking English', () => {
    // Initial state: buttons should not be visible
    let optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();

    // Simulate click on English button
    const englishButton = fixture.debugElement.query(By.css('#english-button'));
    englishButton.nativeElement.click();
    fixture.detectChanges();

    // After click: buttons should appear
    optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).not.toBeNull();

    // Simulate another click on English button
    englishButton.nativeElement.click();
    fixture.detectChanges();

    // After second click: buttons should disappear
    optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();
  });
});
