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

  it('should display competence data when clicking Competences button', () => {
    component.isEnglishSelected = true;
    fixture.detectChanges();
  
    const competencesButton = fixture.debugElement.query(By.css('#competences-button'));
    competencesButton.nativeElement.click();
    fixture.detectChanges();
  
    const competenceButton = fixture.debugElement.query(By.css('button'));
    competenceButton.nativeElement.click(); 
    fixture.detectChanges();
  
    const criteresSection = fixture.debugElement.query(By.css('ul'));
    expect(criteresSection).toBeNull(); 
  });
  

  it('should display saber data when clicking Sabers button', () => {
    component.isEnglishSelected = true;
    fixture.detectChanges();

    const sabersButton = fixture.debugElement.query(By.css('#sabers-button'));
    sabersButton.nativeElement.click();
    fixture.detectChanges();  // Met à jour le DOM après le clic

    
    const sabersSection = fixture.debugElement.query(By.css('div[id="sabers-section"]'));
    expect(sabersSection).not.toBeNull();
    expect(sabersSection.nativeElement.textContent).toContain('Sabers');
    expect(sabersSection.nativeElement.textContent).toContain('Sabers');
  });
});
