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

declare namespace Cypress {
  interface Chainable {
    /**
     * Navigates to the home page of our application
     */
    visitHomepage(): Chainable<Element>

    /**
     * Navigates to the login page of our application
     */
    visitLoginpage(): Chainable<Element>

    /**
     * Navigates to the feedback page of our application
     */
    visitFeedbackpage(): Chainable<Element>

    /**
     * @param seconds - how many seconds should the execution wait
     */
    waitForSeconds(seconds: number): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomepage', () => {
  cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginpage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackpage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', (seconds) => {
  cy.wait(seconds * 1000)
})
