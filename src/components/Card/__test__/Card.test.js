import {render, screen} from "@testing-library/react";
import { isVisible } from "@testing-library/user-event/dist/utils";
import Card from "../Card";

const cardProps = {
    name: "Sydney",
    phone: "111-111-1111",
    email: "subi@gmail.com",
    image: {
        url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        alt: "cute cat 1"
    },
    favoured: false
}

describe("Card", () => {
    test ("Card has name", () => {
        render(<Card {...cardProps} />)

        expect(screen.getByText("Sydney")).toBeVisible()
    })

    test ("Card has phone", () => {
        render(<Card {...cardProps} />)

        expect(screen.getByText("111-111-1111")).toBeVisible()
    })

    test ("Card has email", () => {
        render(<Card {...cardProps} />)

        expect(screen.getByText("subi@gmail.com")).toBeVisible()
    })

    test ("Card has image", () => {
        render(<Card {...cardProps} />)

        expect(screen.getByAltText("cute cat 1").src).toBe(cardProps.image.url)
    })
})