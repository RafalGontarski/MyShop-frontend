

type CategoryType = {
    categoryId?: number; // Optional because when creating a new category the ID may not already exist
    name: string;
    // description?: string; // Optional, if not every category must have a description
    imageUrl?: string;    // Optional if not every category must have an image
    iconUrl?: string;     // Optional if not every category must have an icon
    // slug?: string;        // Optional, can be used to create friendly URLs for categories
    // displayOrder?: number; // Optional if you want to control the order in which categories are displayed
    // You can add other fields that you think are necessary
};

export default CategoryType;
