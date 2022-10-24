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
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(incrementBttn);
        const countValue1 = Number(screen.getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
    })

    it("count should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementBttn = screen.getByRole("button", {name: "Decrement"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(decrementBttn);
        const countValue1 = Number(screen.getByTestId("count").textContent);
        expect(countValue1).toEqual(-1);
    })

    it("count should go back to 0 if the restart button gets pressed", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50}/>);
        const restartButton = screen.getByRole("button", {name: "Restart"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(50);
        fireEvent.click(restartButton);
        const countValue1 = Number(screen.getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
    })

})