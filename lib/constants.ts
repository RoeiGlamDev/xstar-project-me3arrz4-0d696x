export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    BASE_URL: "https://www.luxurylrpcosmetics.com",
    SUPPORT_EMAIL: "support@luxurylrpcosmetics.com",
    PHONE_NUMBER: "+1-800-555-0199",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://www.instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://www.facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
};

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Interface representing a customer in the luxury LRP cosmetics ecosystem.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

/
 * Function to get the full URL for a product image.
 * @param productId - The ID of the product.
 * @returns The full URL for the product image.
 */
export function getProductImageUrl(productId: string): string {
    return ${CONFIG.BASE_URL}/images/products/${productId}.jpg;
}

/
 * Function to format the price for display.
 * @param price - The price of the product.
 * @returns A formatted string representing the price.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}