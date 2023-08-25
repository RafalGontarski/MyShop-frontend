type AddCategoryResponse = {
    categoryId: number;
    name: string;
    iconUrl?: string; // Zakładam, że iconUrl jest opcjonalne, ale możesz to dostosować
    // Możesz dodać inne pola, które są zwracane w odpowiedzi, na przykład:
    // description: string;
    // imageUrl?: string;
    // slug?: string;
    // displayOrder?: number;
    // createdAt: Date;
    // updatedAt: Date;
};

export default AddCategoryResponse;
