import { useContext } from "react";
import { Link } from "react-router-dom";
import { CiCircleRemove } from 'react-icons/ci';
import { ShoppingCartContext } from '../../Context';
import OrderCard from "../OrderCard";
import { totalPrice } from '../../Utils/';


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelate = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.01.2023',
            products: context.cartProducts,
            totalProducts: context.count,
            totalPrice: totalPrice(context.cartProducts),
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setSearchByTitle(null);
        context.closeCheckoutSideMenu();
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} 
        flex-col fixed right-0 border border-black rounded-lg bg-white 
        w-[360px] h-[calc(100vh_-_68px)] top-[68px]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button className='h-[28px] w-[28px] rounded-full'
                    onClick={context.closeCheckoutSideMenu}>
                    <CiCircleRemove className='flex items-center justify-center 
                    w-full h-full hover:text-red-500 cursor-pointer'/>
                </button>
            </div>
            <div className='px-2 overflow-y-scroll flex-1'>
                {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    image={product.image} 
                    price={product.price}
                    handleDelate={handleDelate}/>
                ))
                }
            </div>
            <div className='px-2'>
                <p className='flex justify-between items-center mb-[6px]'>
                    <span className='font-normal text-lg'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/online-store/my-orders/last'>
                    <button 
                    className='bg-black py-3 text-white rounded-lg w-full mb-[6px]'
                    onClick={() => handleCheckout()}> 
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;