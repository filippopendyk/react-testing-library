import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
    
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0}/>);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
        const incrementBttn = screen.getByRole("button", {name: "Increment"});
        fireEvent.click(incrementBttn);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(1);

    })

})