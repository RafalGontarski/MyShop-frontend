import React from "react";
import {BasketContainer, BasketMainContainer, BasketTitle, Payment} from "./Basket.styles";


export const Basket: React.FC = () => {
    return (
        <div style={{flexDirection: "row"}}>
            <BasketTitle>Twój Koszyk</BasketTitle>
            <BasketMainContainer>
                <BasketContainer>
                    <div style={{
                        flexDirection: "row",
                        borderTopColor: 'black'
                    }}>
                        <h1>Produkt1</h1>

                        <h1>Produkt2</h1>

                        <h1>Produkt3</h1>
                    </div>

                </BasketContainer>
                <Payment>
                    <h1>Suma</h1>
                </Payment>
            </BasketMainContainer>
        </div>
    )
}