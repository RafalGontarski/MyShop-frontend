import React from "react";
import {Card, CardContent, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ProductImg from "../../../resources/categoriesIcon/Akcesoria.png";
import {ProductType} from "../../../models/types/ProductType";

type DisplayProductsProps = {
    products: ProductType[];
};
export const DisplayProducts: React.FC<DisplayProductsProps> = ({ products }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '11rem',
            marginRight: '10%',
            marginTop: '1.5rem'
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
                        <Card style={{ position: 'relative', border: 'none', boxShadow: 'none' }}>
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
                                style={{background: '#f3f3f3'}}
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
    )
}