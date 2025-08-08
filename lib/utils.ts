import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Interface representing a cosmetic product
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isFeatured: boolean;
}

/
 * Function to format currency for luxury LRP cosmetics
 * @param amount - The amount to format
 * @returns A string representing the formatted currency
 */
export function formatCurrency(amount: number): string {
    return $${amount.toFixed(2)};
}

/
 * Function to generate a unique identifier for products
 * @returns A unique string identifier
 */
export function generateProductId(): string {
    return product-${Date.now()};
}

/
 * Function to format product release date
 * @param date - The date to format
 * @returns A string representing the formatted date
 */
export function formatReleaseDate(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
}

/
 * Function to create a new cosmetic product
 * @param name - The name of the product
 * @param description - A brief description of the product
 * @param price - The price of the product
 * @param category - The category of the product (e.g., lipstick, foundation)
 * @param imageUrl - The URL of the product image
 * @param isFeatured - Whether the product is featured
 * @returns A new CosmeticProduct object
 */
export function createCosmeticProduct(
    name: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string,
    isFeatured: boolean = false
): CosmeticProduct {
    return {
        id: generateProductId(),
        name,
        description,
        price,
        category,
        imageUrl,
        isFeatured,
    };
}

/
 * Function to apply luxury design principles to a product display
 * @param product - The CosmeticProduct to display
 * @returns A string representing the HTML for the product display
 */
export function renderProductDisplay(product: CosmeticProduct): string {
    return 
        <div class="product" style="border: 1px solid white; border-radius: 10px; padding: 20px; background-color: orange; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
            <img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; border-radius: 10px;">
            <h2 style="color: white;">${product.name}</h2>
            <p style="color: white;">${product.description}</p>
            <p style="color: white;">Price: ${formatCurrency(product.price)}</p>
            <p style="color: white;">Category: ${product.category}</p>
            <p style="color: white;">Release Date: ${formatReleaseDate(new Date())}</p>
        </div>
    ;
}