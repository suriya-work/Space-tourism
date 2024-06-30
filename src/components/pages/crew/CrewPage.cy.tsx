import { CREW_MEMBERS } from '@/constants/crewData'

import CrewPage from '.'

// Cypress Component Test
describe('<CrewPageComponent />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the crew page
    cy.mount(<CrewPage />)

    // The new page should contain an h1 with "02 meet your crew"
    cy.get('[data-testid="title-index"]')
      .should('exist')
      .should('have.text', '02')
    cy.get('[data-testid="title-text"]')
      .should('exist')
      .should('have.text', 'meet your crew')

    // Verify initial member displayed
    cy.get('h3').contains(CREW_MEMBERS[0].name)
    cy.get('h4').contains(CREW_MEMBERS[0].role)
    cy.get('p').contains(CREW_MEMBERS[0].description)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
