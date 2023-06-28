  import Card from "../Card"
import { render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { Button } from "@mui/material"

const mockCourseObr = {
  displayName: "TestOBRName",
  code: "FGA0000",
  period: 5,
  alias: "teste",
  nature: "OBRIGATORIO",
}

it("should render the card with correct information and mandatory style", async () => {
  render(<Card course={mockCourseObr} />)

  const buttonElement = screen.getByRole('button');
  const cardElement = buttonElement.querySelector('div');
  const titleElement = cardElement.getAttribute('title');

  expect(titleElement).toEqual(`${mockCourseObr.displayName}\n${mockCourseObr.code} / ${mockCourseObr.period}º Per`) 

  const aliasElement = screen.getByText(mockCourseObr.alias)
  const tipoElement = screen.getByTestId("tipo-element")
  
  expect(aliasElement).toHaveTextContent("teste")
  expect(tipoElement).toHaveClass("mandatory")

})

const mockCourseOpt = {
    displayName: "OptTeste",
    code: "FGA9999",
    period: 10,
    alias: "validacao",
    nature: "OPTATIVA",
  }
  
  it("should render the card with correct information and optative style", () => {
    render(<Card course={mockCourseOpt} />)
  
    const titleElement = screen.getByRole('button').querySelector('div').getAttribute('title') //encurtei a sintaxe pra caber numa linha só

    expect(titleElement).toEqual(`${mockCourseOpt.displayName}\n${mockCourseOpt.code} / ${mockCourseOpt.period}º Per`) 

    const aliasElement = screen.getByText(mockCourseOpt.alias)
    const tipoElement = screen.getByTestId("tipo-element")
  
    expect(aliasElement).toHaveTextContent("validacao")
    expect(tipoElement).toHaveClass("optative")
    
  })
