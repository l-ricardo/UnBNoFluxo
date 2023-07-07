import Card from "../Card"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'


describe('Card', () => {
  const mockCourseObr = {
    displayName: "TestOBRName",
    code: "FGA0000",
    period: 5,
    alias: "teste",
    nature: "OBRIGATORIO",
  }

  it("should render the card with correct information and mandatory style", () => {
    render(<Card course={mockCourseObr} />)

    const buttonElement = screen.getByRole('button')
    const titleElement = buttonElement.getAttribute('title')

    expect(titleElement).toEqual(`${mockCourseObr.displayName}\n${mockCourseObr.code} / ${mockCourseObr.period}º Per`) 

    const aliasElement = screen.getByText(mockCourseObr.alias || mockCourseObr.displayName)
    const tipoElement = screen.getByTestId("tipo-element")
    
    expect(aliasElement).toHaveTextContent("teste")
    expect(tipoElement).toHaveClass("mandatory")
  })

  const mockCourseOpt = {
      displayName: "OptTeste",
      code: "FGA9999",
      period: 10,
      alias: "",
      nature: "OPTATIVA",
  }
    
  it("should render the card with correct information and optative style", () => {
    render(<Card course={mockCourseOpt} />)

    const titleElement = screen.getByRole('button').getAttribute('title') //encurtei a sintaxe pra caber numa linha só

    expect(titleElement).toEqual(`${mockCourseOpt.displayName}\n${mockCourseOpt.code} / ${mockCourseOpt.period}º Per`) 

    const aliasElement = screen.getByText(mockCourseOpt.alias || mockCourseOpt.displayName)
    const tipoElement = screen.getByTestId("tipo-element")
    
    //se receber alias ele procura por aliasTeste, se nao receber alias ele procura pelo displayName
    mockCourseOpt.alias?expect(aliasElement).toHaveTextContent(mockCourseOpt.alias):expect(aliasElement).toHaveTextContent(mockCourseOpt.displayName)

    expect(tipoElement).toHaveClass("optative")
  })

  const mockCourseComp = {
    displayName: "CompTeste",
    code: "FGA9999",
    period: 10,
    alias: "",
    nature: "COMPLEMENTAR",
}

  it("should render the card with correct information and UNNATURAL style", () => {
    render(<Card course={mockCourseComp} />)

    const titleElement = screen.getByRole('button').getAttribute('title')

    expect(titleElement).toEqual(`${mockCourseComp.displayName}\n${mockCourseComp.code} / ${mockCourseComp.period}º Per`) 

    const aliasElement = screen.getByText(mockCourseComp.alias || mockCourseComp.displayName)
    const tipoElement = screen.getByTestId("tipo-element")
    
    //se receber alias ele procura por aliasTeste, se nao receber alias ele procura pelo displayName
    mockCourseComp.alias?expect(aliasElement).toHaveTextContent(mockCourseComp.alias):expect(aliasElement).toHaveTextContent(mockCourseComp.displayName)

    expect(tipoElement).toHaveClass("unatural")
  })
})