import React from "react"
import renderer from "react-test-renderer"

import Header from "./Header"


// Using SnapShot testing
// This ensures that a change we makes elesewhere does not change the behaviour of existing components
// If the test fails due to an INTENTIONAL change run `jest --updateSnapshot`
describe("Header", () => {

    // What we are testing
    it("renders correct", () => {
        const tree = renderer
    
        // Crate the component
        .create(<Header />)
        .toJSON() // Convert to JSON

        // Check if it matches what we expect by checking a snapshot from the past
        // https://jestjs.io/docs/en/snapshot-testing
        expect(tree).toMatchSnapshot()
    })

})