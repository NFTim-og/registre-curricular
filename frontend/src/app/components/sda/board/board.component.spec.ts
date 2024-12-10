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
    // Initial: options section should not be visible
    let optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();  // Vérifie que la section n'est pas encore visible
  
    // Simulate click on English button
    const englishButton = fixture.debugElement.query(By.css('#english-button'));
    englishButton.nativeElement.click();
    fixture.detectChanges();  // Attendre que Angular détecte les changements
  
    // After click: options section should be visible
    optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).not.toBeNull();  // Vérifie que la section est maintenant visible
  
    // Simulate second click on English button
    englishButton.nativeElement.click();
    fixture.detectChanges();  // Attendre que les changements soient appliqués
  
    // After second click: options section should be hidden
    optionsSection = fixture.debugElement.query(By.css('#options-section'));
    expect(optionsSection).toBeNull();  // Vérifie que la section est cachée après le deuxième clic
  });

  it('should display competences data with criteris when clicking Competences button', () => {
    component.onEnglishClick();
    fixture.detectChanges();

    const competencesButton = fixture.debugElement.query(By.css('#competences-button'));
    competencesButton.nativeElement.click();
    fixture.detectChanges();

    const displayedItems = fixture.debugElement.queryAll(By.css('#display-section ul > li'));
    expect(displayedItems.length).toBe(7); 

    const subItems = displayedItems[0].queryAll(By.css('ul > li')); 
    expect(subItems.length).toBe(3); // Trois critères pour la première compétence
    expect(subItems[0].nativeElement.textContent).toContain('Identificar les diferents llengües');
  });

  it('should display sabers data with sub-items when clicking Sabers button', () => {
    component.onEnglishClick();
    fixture.detectChanges();

    const sabersButton = fixture.debugElement.query(By.css('#sabers-button'));
    sabersButton.nativeElement.click();
    fixture.detectChanges();

    const displayedItems = fixture.debugElement.queryAll(By.css('#display-section ul > li'));
    expect(displayedItems.length).toBe(7); 

    const subItems = displayedItems[0].queryAll(By.css('ul > li')); 
    expect(subItems.length).toBe(3); 
    expect(subItems[0].nativeElement.textContent).toContain('Presa de consciència');
  });


});
