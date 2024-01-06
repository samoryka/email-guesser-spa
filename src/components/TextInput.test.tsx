import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {TextInput} from "./TextInput";

test("triggers value update", () => {
    const setValue = jest.fn()
    render(<TextInput id={"id"} label={"label"} placeholder={"placeholder"} value={"value"} disabled={false}
                      setValue={setValue}/>)
    const input = screen.getByLabelText("label")

    fireEvent.change(input, {target: {value: "newValue"}})

    expect(setValue).toHaveBeenCalledWith("newValue")
});

test("displays placeholder", () => {
    render(<TextInput id={"id"} label={"label"} placeholder={"placeholder"} value={"value"} disabled={false}
                      setValue={jest.fn()}/>)
    screen.getByPlaceholderText("placeholder")
});

test("displays value", () => {
    render(<TextInput id={"id"} label={"label"} placeholder={"placeholder"} value={"value"} disabled={false}
                      setValue={jest.fn()}/>)
    screen.getByDisplayValue("value")
});

test("can be disabled", () => {
    render(<TextInput id={"id"} label={"label"} placeholder={"placeholder"} value={"value"} disabled={true}
                      setValue={jest.fn()}/>)
    expect(screen.getByDisplayValue("value")).toBeDisabled()
});

test("can be enabled", () => {
    render(<TextInput id={"id"} label={"label"} placeholder={"placeholder"} value={"value"} disabled={false}
                      setValue={jest.fn()}/>)
    expect(screen.getByDisplayValue("value")).toBeEnabled()
});
