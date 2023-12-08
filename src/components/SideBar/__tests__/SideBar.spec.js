import { fireEvent, render, screen } from "@testing-library/react"
import SideBar from "../SideBar"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

const mockNavigate = jest.fn()

jest.mock("react-router", () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}))

const renderComponent = () => {
    render(
        <BrowserRouter>
            <SideBar />
        </BrowserRouter>
    )
}

describe("SideBar", () => {
    it("should render correctly", () => {
        renderComponent();

        expect(screen.getByText("Home")).toBeInTheDocument()
        expect(screen.getByText("Idosos")).toBeInTheDocument()
        expect(screen.getByText("Medicamentos")).toBeInTheDocument()
        expect(screen.getByText("Produtos")).toBeInTheDocument()
    })

    it("should change route to '/produtos' when hits the products button", () => {
        renderComponent();

        const btnProdutos = screen.getByText("Produtos");

        fireEvent.click(btnProdutos);

        expect(mockNavigate).toHaveBeenCalledWith("/produtos", expect.any(Object))
    })

    it("should change route to '/medicamentos' when hits the medicines button", () => {
        renderComponent();
        
        const btnProdutos = screen.getByText("Medicamentos");

        fireEvent.click(btnProdutos);

        expect(mockNavigate).toHaveBeenCalledWith("/medicamentos", expect.any(Object))
    })

    it("should change route to '/idosos' when hits the elderly button", () => {
        renderComponent();

        const btnProdutos = screen.getByText("Idosos");

        fireEvent.click(btnProdutos);

        expect(mockNavigate).toHaveBeenCalledWith("/idosos", expect.any(Object))
    })

    it("should change route to '/' when hits the home button", () => {
        renderComponent();

        const btnProdutos = screen.getByText("Home");

        fireEvent.click(btnProdutos);

        expect(mockNavigate).toHaveBeenCalledWith("/", expect.any(Object))
    })
})