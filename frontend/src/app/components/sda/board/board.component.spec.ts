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
    
    let optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();

    
    const englishButton = fixture.debugElement.query(By.css('#english-button'));
    englishButton.nativeElement.click();
    fixture.detectChanges();

    
    optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).not.toBeNull();

    
    englishButton.nativeElement.click();
    fixture.detectChanges();

    
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
    fixture.detectChanges();  

    
    const sabersSection = fixture.debugElement.query(By.css('div[id="sabers-section"]'));
    expect(sabersSection).not.toBeNull();
    expect(sabersSection.nativeElement.textContent).toContain('Sabers');
    expect(sabersSection.nativeElement.textContent).toContain('Sabers');
  });
  it('should toggle competence checkbox based on criteria selection', () => {
    
    expect(component.isCompetenceCheckboxEnabled(1)).toBeFalse();  
  
   
    component.onCriterionSelected('1.1');  
    fixture.detectChanges();
    expect(component.isCompetenceCheckboxEnabled(1)).toBeTrue();  
    
    component.onCriterionDeselected('1.1');  
    fixture.detectChanges();
    expect(component.isCompetenceCheckboxEnabled(1)).toBeFalse();  
    
    component.onCriterionSelected('1.2');  
    fixture.detectChanges();
    expect(component.isCompetenceCheckboxEnabled(1)).toBeTrue();   
  
    
    component.onCriterionDeselected('1.2');  
    fixture.detectChanges();
    expect(component.isCompetenceCheckboxEnabled(1)).toBeFalse();  
  });

  
  
});
