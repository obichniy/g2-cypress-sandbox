describe('locators suite', ()=> {
  
    it('HW data-test locators', () => {
      cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');
      
   
      cy.get('.dropdown-toggle').click();
      //cy.get('.dropdown-menu > .active > a'); 
      cy.get('.dropdown-menu > :nth-child(1) > a');
      cy.get('.dropdown-menu > :nth-child(2) > a');
      cy.get('.dropdown-menu > :nth-child(3) > a');
      cy.get('.dropdown-menu > :nth-child(4) > a');
      cy.get('.dropdown-menu > :nth-child(5) > a');
      cy.get('.dropdown-menu > :nth-child(6) > a');
      cy.get('.dropdown-menu > :nth-child(7) > a');
      cy.get('.dropdown-menu > :nth-child(8) > a');
      cy.get('.dropdown-menu > :nth-child(9) > a');
      cy.get('.dropdown-menu > :nth-child(10) > a');
      cy.get('.dropdown-menu > :nth-child(11) > a');
      cy.get('.dropdown-menu > :nth-child(12) > a');
      cy.get('.dropdown-menu > :nth-child(13) > a');
      cy.get('.dropdown-menu > :nth-child(14) > a');
      cy.get('.dropdown-menu > :nth-child(15) > a');
      cy.get('.dropdown-menu > :nth-child(16) > a');
      cy.get('.dropdown-menu > :nth-child(17) > a');



  
  
  
    })
  })