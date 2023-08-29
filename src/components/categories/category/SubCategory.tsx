import React, {useEffect, useState} from "react";
import {CategoryHeader} from "../categoryHeader/CategoryHeader";
import {useParams} from "react-router-dom";
import {ProductType} from "../../../models/types/ProductType";
import {CategoryApi} from "../../../api/CategoryApi";
import {ProductApi} from "../../../api/ProductApi";
import {SubCategoryHeader} from "../categoryHeader/SubCategoryHeader";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProductImg from '../../../resources/categoriesIcon/catfishIcon.png';

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        ProductApi.getAllProducts()
            .then(fetchedProducts => {
                const filteredProducts = fetchedProducts.filter(product =>
                    product.subCategory && product.subCategory.name === subCategoryName
                );
                console.log('Filtered Products' + filteredProducts);
                setProducts(filteredProducts);
            })
            .catch(error => console.error("Błąd podczas pobierania produktów:", error));
    }, [subCategoryName]);


    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <SubCategoryHeader categoryName={categoryName} subCategoryName={subCategoryName} />

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
