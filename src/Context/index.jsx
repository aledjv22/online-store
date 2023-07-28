import { createContext, useState, useEffect } from 'react';

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

    // Get products 
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItems(data))
    },[]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'title') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'category') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'titleAndCategory') {
            return filteredItemsByCategory(filteredItemsByTitle(items, searchByTitle), searchByCategory) 
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('titleAndCategory', items, searchByTitle, searchByCategory))
        
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('title', items, searchByTitle, searchByCategory))
        
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('category', items, searchByTitle, searchByCategory))
        
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    },[items, searchByTitle, searchByCategory]);

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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}