/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Cypress (https://www.udemy.com/course/automated-testing-with-cypress/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

describe('Demo Test', () => {
  it('Should login into an application', () => {
    cy.visitLoginpage()
    cy.waitForSeconds(2)

    cy.fixture('loginData').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
