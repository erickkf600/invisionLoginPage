import React from "react"
import { render } from "@testing-library/react"
import Register from './'

// Testando a página de Registro
describe("Testing Login Page", () => {
    // deve ser possível fazer um Registro
    it("should be able to make a regsiter", () => {
        render(<Register />)
    })
})