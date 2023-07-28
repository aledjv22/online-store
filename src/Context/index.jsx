import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Count
    const [count, setCount] = useState(0);

    // Product Detail - Open and Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu - Open and Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}