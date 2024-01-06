import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {App} from "./App";


test("display UI elements", async () => {
    render(<App/>);

    const nameInput = screen.getByLabelText("Full Name")
    const domainInput = screen.getByLabelText("Company Domain")

    fireEvent.change(nameInput, {target: {value: "Samory Ka"}})
    fireEvent.change(domainInput    , {target: {value: "babbel.com"}})

    screen.getByText("Email Guesser")
    screen.getByDisplayValue("Samory Ka")
    screen.getByDisplayValue("babbel.com")
    screen.getByText("Derive email")
});
