import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ProductType} from "../../../models/types/ProductType";
import {ProductApi} from "../../../api/ProductApi";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProductImg from '../../../resources/categoriesIcon/catfishIcon.png';
import {SecondSubCategoryHeader} from "../categoryHeader/SecondSubCategoryHeader";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
    secondSubCategoryName?: string;
};

export const SecondSubCategory: React.FC = () => {
    const { categoryName, subCategoryName, secondSubCategoryName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        ProductApi.getAllProducts()
            .then(fetchedProducts => {
                const filteredProducts = fetchedProducts.filter(product =>
                    product.secondSubCategory && product.secondSubCategory.name === secondSubCategoryName
                );
                console.log('Filtered Products:', filteredProducts);
                setProducts(filteredProducts);
            })
            .catch(error => console.error("Błąd podczas pobierania produktów:", error));
    }, [secondSubCategoryName]);



    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <SecondSubCategoryHeader
                categoryName={categoryName}
                subCategoryName={subCategoryName}
                secondSubCategoryName={secondSubCategoryName}
            />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '11rem',
                marginRight: '10%'
            }}>
                <div style={{
                    width: '30%',
                }}>
                    <h3>Producent</h3>
                    <h3>Przedział cenowy</h3>
                    <h3>Dostępność</h3>
                    <h3>Oceny</h3>
                    <h3>Wybrane dla Ciebie</h3>
                </div>
                <Grid container spacing={2} justifyContent="center">
                    {products.map((product) => (
                        <Grid item xs={3} key={product.id}>
                            <Card style={{ position: 'relative' }}>
                                <IconButton
                                    style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 1 }}
                                    onClick={() => console.log('Zapisano w ulubionych')}
                                >
                                    <FavoriteIcon style={{color: 'black'}}/>
                                </IconButton>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={ProductImg}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="body1" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="green">
                                        {/*{product.status}*/}
                                        Dostępny w magazynie
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {product.price} zł
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
