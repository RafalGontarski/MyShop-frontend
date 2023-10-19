import React, {useEffect, useState} from "react";
import {Card, CardContent, Grid, IconButton, Rating, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ProductImg from "../../../resources/categoriesIcon/Akcesoria.png";
import {ProductType} from "../../../models/types/ProductType";
import {
    CardContainer, FilterContainer,
    StyledCard,
    StyledCardMedia, StyledDisplayContainer,
    StyledFavoriteIcon,
    StyledIconButton, StyledProductGrid, StyledProductsGrid, StyledRating,
    ZoomImage
} from "../Product.styles";
import {Link} from "react-router-dom";



type DisplayProductsProps = {
    products: ProductType[];
};
export const DisplayProducts: React.FC<DisplayProductsProps> = ({ products }) => {

    const [, setIsHovered] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Opcjonalnie: sprawdź dane
    console.log(products);

    // Opcjonalnie: pokaż informację o ładowaniu, jeśli products jest undefined lub null
    if (!products) {
        return <p>Loading...</p>;
    }

    return (
        <StyledDisplayContainer >
            <FilterContainer >
                <h3>Producent</h3>
                <h3>Przedział cenowy</h3>
                <h3>Dostępność</h3>
                <h3>Oceny</h3>
                <h3>Wybrane dla Ciebie</h3>
            </FilterContainer>
            <StyledProductsGrid container spacing={2} >
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
                                        onClick={() => console.log('Zapisano w ulubionych')}
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
        </StyledDisplayContainer>
    )
}