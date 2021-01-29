import React from "react"
import { render } from "@testing-library/react"
import Login from './'

// Testando a página de login
describe("Testing Login Page", () => {
    // deve ser possível fazer login
    it("should be able to make login", () => {
        render(<Login />)
    })
})