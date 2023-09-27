import React, {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {SubCategoryHeader} from "../categoryHeader/SubCategoryHeader";
import {DisplaySecondSubCategories} from "../displaySecondSubCategories/DisplaySecondSubCategories";

import {CategoryApi} from "../../../api/CategoryApi";
import SecondSubCategoryType from "../../../models/types/SecondSubCategoryType";
import SubCategoryType from "../../../models/types/SubCategoryType";
import {ProductApi} from "../../../api/ProductApi";
import {ProductType} from "../../../models/types/ProductType";
import {Card, CardContent, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ProductImg from "../../../resources/categoriesIcon/catfishIcon.png";

type RouteParams = {
    categoryName: string;
    subCategoryName: string;
};

export const SubCategory: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<RouteParams>();
    const [, setCategoryId] = useState<number | null>(null);
    const [subCategoryId, setSubCategoryId] = useState<number | null>(null);
    const [, setCurrentSubCategory] = useState<SubCategoryType | null>(null);
    const [secondSubCategories, setSecondSubCategories] = useState<SecondSubCategoryType[]>([]);
    const [hasSecondSubCategories, setHasSecondSubCategories] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductType[]>([]);

    console.log("Pole secondSubCategories: " + JSON.stringify(secondSubCategories));
    console.log("Pole hasSecondSubCategories: " + hasSecondSubCategories);
    console.log("Producty dla SubKategori: " + products);

    useEffect(() => {
        console.log("Rozpoczęcie useEffect dla categoryName:", categoryName, "i subCategoryName:", subCategoryName);

        CategoryApi.getAllCategories()
            .then(categories => {
                console.log("Otrzymane wszystkie kategorie:", categories);
                const category = categories.find(cat => cat.name === categoryName);

                if (!category) {
                    throw new Error("Nie można znaleźć kategorii.");
                }

                return Promise.all([category, CategoryApi.getAllSubCategories(category.categoryId)]);
            })
            .then(([category, subCategories]) => {
                console.log("Otrzymane podkategorie dla kategorii:", category, "Są to:", subCategories);
                const subCategory = subCategories.find(sub => sub.name === subCategoryName);

                if (!subCategory) {
                    throw new Error("Nie można znaleźć podkategorii.");
                }

                return { category, subCategory };
            })
            .then(({ category, subCategory }) => {
                return Promise.all([
                    CategoryApi.getAllSecondSubCategories(category.categoryId, subCategory.id),
                    subCategory
                ]);
            })
            .then(([fetchedSecondSubCategories, subCategory]) => {
                console.log("Otrzymane drugorzędne podkategorie:", fetchedSecondSubCategories);
                setSecondSubCategories(fetchedSecondSubCategories);

                const hasSecondSubs = fetchedSecondSubCategories.length > 0;
                setHasSecondSubCategories(hasSecondSubs);

                console.log('HasSecondSubs: ', hasSecondSubs);
                if (!hasSecondSubs) {
                    console.log("Nie ma drugorzędnych podkategorii. Pobieranie produktów dla subCategory.id:", subCategory.id);
                    return ProductApi.getProductsBySubCategoryId(subCategory.id!);
                }

                return [];
            })
            .then(fetchedProducts => {
                console.log("Otrzymane produkty:", fetchedProducts);
                setProducts(fetchedProducts);
            })
            .catch(error => console.error("Wystąpił błąd w useEffect:", error));
    }, [categoryName, subCategoryName]);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
    }, []);

    if (!categoryName || !subCategoryName) {
        return <div>Brak kategorii lub podkategorii w URL</div>;
    }

    return (
        <div>
            <SubCategoryHeader
                categoryName={categoryName}
                subCategoryName={subCategoryName}
                hasSecondSubCategories={hasSecondSubCategories}
            />

            {hasSecondSubCategories ? (
                <DisplaySecondSubCategories
                    categoryName={categoryName}
                    secondSubCategories={secondSubCategories}
                    subCategoryName={subCategoryName} />
            ) : (
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
            )}
        </div>
    );
}
