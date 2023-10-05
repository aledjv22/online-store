import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const navigateTo = useNavigate();

    // Local Storage
    const {
        users,
        saveUser,
        ordersHistory : order,
        saveOrder : setOrder,
    } = useLocalStorage('sign-up', []);

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
    // const [order, setOrder] = useState([]);

    // Get products 
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Current user
    const [currentUser, setCurrentUser] = useState({});

    // Login status
    const [isLogged, setIsLogged] = useState(false);

    // My Account - Password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItems(data))
    },[]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => (item.category.toLowerCase()) === (searchByCategory.toLowerCase()))
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

    // Adding new users
    const addUser = (name, email, password) => {
        if (!name || !email || !password) return alert('Todos los campos son obligatorios');

        if (users.find(user => user.email === email)) return alert('El email ya está registrado');

        let add = { user: name, email: email, password: password };
        let newUsers = [...users, add];
        saveUser(newUsers);
        navigateTo('/online-store/sign-in');
    }

    // Sign in
    const signIn = (email, password) => {
        if (!email || !password) return alert('Todos los campos son obligatorios');

        let user = users.find(user => user.email === email);

        if (!user) return alert('El email no está registrado');

        if (user.password !== password) return alert('La contraseña es incorrecta');

        setCurrentUser({ user: user.user, email: user.email, password: user.password });

        setIsLogged(true);

        navigateTo('/online-store/');
    }

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
            setSearchByCategory,
            addUser,
            signIn,
            isLogged,
            setIsLogged,
            currentUser,
            setCurrentUser,
            navigateTo,
            isPasswordVisible, 
            setIsPasswordVisible,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}