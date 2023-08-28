import React from "react";
import {ProductType} from "../../models/types/ProductType";

interface ProductHeaderProps {
    product: ProductType;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Cena: {product.price} PLN</p>
            {/* Możesz dodać więcej informacji o produkcie według potrzeb */}
        </div>
    );
}
