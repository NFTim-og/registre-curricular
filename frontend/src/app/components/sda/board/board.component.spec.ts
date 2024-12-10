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

  it('should display buttons only after clicking English', () => {
    // Initial state: buttons should not be visible
    const optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();

    // Simulate click on English button
    const englishButton = fixture.debugElement.query(By.css('#english-button'));
    englishButton.nativeElement.click();
    fixture.detectChanges();

    // After click: buttons should appear
    const newOptionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(newOptionsSection).not.toBeNull();
    const competencesButton = newOptionsSection.query(By.css('#competences-button'));
    const sabersButton = newOptionsSection.query(By.css('#sabers-button'));
    expect(competencesButton).not.toBeNull();
    expect(sabersButton).not.toBeNull();
  });
});
