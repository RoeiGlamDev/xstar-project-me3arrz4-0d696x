import { Product } from './product';
import { User } from './user';

/
 * Represents the luxury LRP cosmetics brand.
 * @interface Brand
 */
export interface Brand {
    name: string; // The name of the brand
    colors: string[]; // The primary colors associated with the brand
}

/
 * Represents a cosmetics product in the luxury LRP cosmetics line.
 * @interface CosmeticsProduct
 */
export interface CosmeticsProduct extends Product {
    brand: Brand; // The brand of the product
    category: string; // The category of the cosmetics product (e.g., lipstick, foundation)
    price: number; // The price of the product
    description: string; // A detailed description of the product
    ingredients: string[]; // List of ingredients used in the product
    isLuxury: boolean; // Indicates if the product is a luxury item
}

/
 * Represents a user in the luxury LRP cosmetics application.
 * @interface CosmeticsUser
 */
export interface CosmeticsUser extends User {
    preferredProducts: CosmeticsProduct[]; // List of preferred products by the user
    purchaseHistory: CosmeticsProduct[]; // List of products purchased by the user
}

/
 * Represents the luxury LRP cosmetics brand details.
 * @constant
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    colors: ["orange", "white"]
};

/
 * Represents a sample luxury cosmetics product.
 * @constant
 */
export const sampleProduct: CosmeticsProduct = {
    id: "1",
    name: "Luxury Velvet Lipstick",
    brand: luxuryLRPBrand,
    category: "Lipstick",
    price: 45.00,
    description: "Experience the richness of color and the smoothness of luxury with our Velvet Lipstick, designed for the modern, sophisticated individual.",
    ingredients: ["Castor Oil", "Beeswax", "Candelilla Wax", "Vitamin E"],
    isLuxury: true
};