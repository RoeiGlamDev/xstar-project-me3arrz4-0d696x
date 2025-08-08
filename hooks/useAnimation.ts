import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides a way to create elegant and high-end animations
 * that enhance the user experience, reflecting the luxury nature of the brand.
 *
 * @param {string} animationClass - The CSS class for the animation.
 * @param {boolean} trigger - A boolean to trigger the animation.
 * @returns {React.RefObject<HTMLDivElement>} - A ref to be attached to the animated element.
 */
export const useAnimation = (animationClass: string, trigger: boolean) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current && trigger) {
            ref.current.classList.add(animationClass);
            // Remove the animation class after it completes to allow re-triggering
            const handleAnimationEnd = () => {
                ref.current?.classList.remove(animationClass);
            };
            ref.current.addEventListener('animationend', handleAnimationEnd);
            return () => {
                ref.current?.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [animationClass, trigger]);

    return ref;
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
 * Function to create a new product for luxury LRP cosmetics.
 * This function encapsulates the business logic for adding a new product
 * to the cosmetics line, ensuring that all necessary fields are provided.
 *
 * @param {Product} product - The product to be added.
 * @throws Will throw an error if any required fields are missing.
 */
export const addProduct = (product: Product) => {
    const { id, name, description, price, imageUrl, category } = product;

    if (!id || !name || !description || !price || !imageUrl || !category) {
        throw new Error('All product fields must be provided for luxury LRP cosmetics.');
    }

    // Logic to add the product to the inventory (e.g., API call or state update)
    console.log(Adding product: ${name} to luxury LRP cosmetics inventory.);
};