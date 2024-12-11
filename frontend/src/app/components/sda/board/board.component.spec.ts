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
  it('should toggle checkbox based on sub-id selection', () => {
    // Initialement, le checkbox est désactivé
    expect(component.isCheckboxEnabled).toBeFalse();

    // Sélectionner un sous-id et vérifier que le checkbox est activé
    component.onSubIdSelected('1.1');
    fixture.detectChanges();
    expect(component.isCheckboxEnabled).toBeTrue();

    // Désélectionner le sous-id et vérifier que le checkbox est désactivé
    component.onSubIdDeselected('1.1');
    fixture.detectChanges();
    expect(component.isCheckboxEnabled).toBeFalse();

    // Sélectionner un autre sous-id pour tester la logique
    component.onSubIdSelected('2.3');
    fixture.detectChanges();
    expect(component.isCheckboxEnabled).toBeTrue();

    // Désélectionner ce sous-id et vérifier le retour à l'état désactivé
    component.onSubIdDeselected('2.3');
    fixture.detectChanges();
    expect(component.isCheckboxEnabled).toBeFalse();
  });
});
