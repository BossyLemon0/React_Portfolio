describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-portfolio')
  })
  it('displays Glowing Name', () => {
    cy.get('.first_slide').should('have.text', 'Omar Ramirez')
      .and('have.css','opacity', '1')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .invoke('css', 'text-shadow')
      .then(textShadow =>{
        expect(textShadow).to.include('rgb(248, 100, 2)');
        expect(textShadow).to.include('0px 0px 10px');
        expect(textShadow).to.include('0px 0px 20px');
        expect(textShadow).to.include('0px 0px 40px');
        expect(textShadow).to.include('0px 0px 80px');
        expect(textShadow).to.include('0px 0px 100px');
      })
    
  })
})