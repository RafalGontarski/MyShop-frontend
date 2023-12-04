import SubCategoryType from "./SubCategoryType";

type SecondSubCategoryType = {
    id?: number; // Opcjonalne, ponieważ podczas tworzenia nowej kategorii ID może jeszcze nie istnieć
    name: string;
    // description?: string; // Opcjonalne, jeśli nie każda kategoria musi mieć opis
    // imageUrl?: string; // Opcjonalne, jeśli nie każda kategoria musi mieć obraz
    iconUrl?: string;     // Opcjonalne, jeśli nie każda kategoria musi mieć ikonę
    // slug?: string; // Opcjonalne, może służyć do tworzenia przyjaznych URL dla kategorii
    // displayOrder?: number; // Opcjonalne, jeśli chcesz kontrolować kolejność wyświetlania kategorii
    subCategory: SubCategoryType;
    // Możesz dodać inne pola, które uważasz za potrzebne
};

export default SecondSubCategoryType;