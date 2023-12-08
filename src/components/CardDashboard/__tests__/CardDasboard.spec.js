import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardDash from "../CardDash";

describe("CardDash Component", () => {
  it("should render CardDash with correct content", () => {
    render(
      <CardDash
        srcImg="/path/to/image.jpg"
        altImg="Image Alt Text"
        title="Card Title"
        content="Card Content"
        backgroundColor="rgb(242, 234, 225)"
      />
    );

    // Verifica se as informações estão presentes
    expect(screen.getByAltText("Image Alt Text")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();

    // Verifica se o estilo de fundo está correto
    const cardContainer = screen.getByTestId("card-dash-container");
    expect(cardContainer).toHaveStyle("backgroundColor: rgb(242, 234, 225)");
  });
});