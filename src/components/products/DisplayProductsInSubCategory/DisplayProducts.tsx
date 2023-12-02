import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CardContent, Typography} from "@mui/material";
import ProductImg from "../../../resources/categoriesIcon/Akcesoria.png";
import {ProductType} from "../../../models/types/ProductType";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext} from "../../../models/context/UserContexts";
import {SuccessfullyToast} from "../../tools/toast/SuccessfullyToast";
import {StorageContext} from "../../../models/context/StorageContext";

import {
    ZoomImage,
    StyledCard,
    StyledRating,
    CardContainer,
    FilterContainer,
    StyledCardMedia,
    StyledIconButton,
    StyledProductGrid,
    StyledProductsGrid,
    StyledFavoriteIcon,
    StyledDisplayContainer,
} from "../Product.styles";

import {
    PriceContainer,
    PriceInput,
    PriceSeparator,
    StyledCheckbox,
    StyledLabel
} from "./DisplayProducts.styling";


type DisplayProductsProps = {
    products: ProductType[];
};
export const DisplayProducts: React.FC<DisplayProductsProps> = ({ products }) => {

    const [, setIsHovered] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
    const uniqueManufacturers = [...new Set(products.map(product => product.producent))];
    const [availabilityChecked, setAvailabilityChecked] = React.useState<boolean>(false);
    const [showToast, setShowToast] = useState(false);
    const [productName, setProductName] = useState('');
    const [checkedStates, setCheckedStates] = useState(
        uniqueManufacturers.map(() => false)
    );

    const { currentUser } = useContext(UserContext);
    const { addProductToStorage, storages } = useContext(StorageContext);
    const userId = currentUser?.id;
    console.log('user id z Display Products: ', userId);

    const handleCheckboxChange = (index: number) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>, product: ProductType) => {
        event.stopPropagation();
        event.preventDefault();

        console.log('Dodawanie produktu do schowka:', product);

        if (storages.length === 0) {
            toast.error("Nie masz jeszcze żadnych schowków.");
            return;
        }

        // Dodaj produkt do pierwszego schowka
        console.log('Indeks schowka: 0, Produkt:', product);
        addProductToStorage(0, product); // Indeks 0 to pierwszy schowek

        setProductName(product.name);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 15000); // Ukryj powiadomienie po 3 sekundach
    };


    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Optional: check the data
    console.log(products);

    // Optional: show loading information if products is undefined or null
    if (!products) {
        return <p>Loading...</p>;
    }

    return (
        <StyledDisplayContainer >

            <FilterContainer >
                <h3>Producent</h3>
                {uniqueManufacturers.map((producent, index) => (
                    <div key={producent}>
                        <StyledCheckbox
                            type="checkbox"
                            id={`checkbox-${producent}`}
                            checked={checkedStates[index]} // We convey the appropriate status
                            onChange={() => handleCheckboxChange(index)} // We update the appropriate status
                        />
                        <StyledLabel
                            htmlFor={`checkbox-${producent}`}
                            className={checkedStates[index] ? 'checked' : ''} // We check the appropriate condition
                        >
                            {producent}
                        </StyledLabel>
                    </div>
                ))}
                <h3>Przedział cenowy</h3>
                    <PriceContainer>
                        <PriceInput type="number" placeholder="0" />
                        <PriceSeparator>-</PriceSeparator>
                        <PriceInput type="number" placeholder="21500" />
                        <PriceSeparator>zł</PriceSeparator>
                    </PriceContainer>
                <h3>Dostępność</h3>
                    <StyledCheckbox
                        type="checkbox"
                        id="availability-checkbox"
                        checked={availabilityChecked}
                        onChange={() => setAvailabilityChecked(prev => !prev)}
                    />
                    <StyledLabel
                        htmlFor="availability-checkbox"
                        className={availabilityChecked ? 'checked' : ''}
                    >
                        Dostępny w magazynie
                    </StyledLabel>
                {/*<h3>Oceny</h3>*/}
                {/*<h3>Wybrane dla Ciebie</h3>*/}
            </FilterContainer>
            <StyledProductsGrid container>
                {products.map((product) => (
                    <StyledProductGrid item xs={isSmallScreen ? 5 : 3} key={product.id}>
                        <Link
                            to={`/categories/${product.secondSubCategory?.subCategory.category.name || 'defaultCategory'}/${product.secondSubCategory?.subCategory.name || 'defaultSub'}/${product.secondSubCategory?.name || 'defaultSecondSub'}/${product.name}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <StyledCard>
                                <StyledCardMedia
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <StyledIconButton
                                        onClick={(e) => addToFavorites(e, product)}
                                    >
                                        <StyledFavoriteIcon />
                                    </StyledIconButton>

                                    <ZoomImage
                                        src={ProductImg}
                                        alt={product.name}
                                    />
                                </StyledCardMedia>
                                <CardContainer>
                                    <CardContent>
                                        <StyledRating name="customized-color" defaultValue={2} />
                                        <Typography variant="body1" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="green">
                                            {/*{product.status}*/}
                                            Dostępny w magazynie
                                        </Typography>
                                        <Typography variant="h5" component="div"
                                                    style={{ fontWeight: 'bold' }}>
                                            {product.price} zł
                                        </Typography>
                                    </CardContent>
                                </CardContainer>
                            </StyledCard>
                        </Link>
                    </StyledProductGrid>
                ))}
            </StyledProductsGrid>
            {showToast &&
                <SuccessfullyToast closeToast={() => setShowToast(false)}>
                    Artykuł {productName} jest teraz w Twoim schowku.
                </SuccessfullyToast>
            }
        </StyledDisplayContainer>
    )
}