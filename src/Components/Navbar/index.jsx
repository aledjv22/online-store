import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Shopi from '/shopi.svg';

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className='flex justify-between items-center fixed 
        z-10 top-0 w-full pt-2 px-8 pb-2 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/online-store/' onClick={() => context.setSearchByCategory('')}>
                        <img src={Shopi} alt="logo shopi" className='h-[50px]'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/mens-clothing'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/womens-clothing'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Women's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    {context.isLogged?
                    context.currentUser.email
                    :undefined}                                                
                </li>
                <li>
                    {
                    context.isLogged?
                    <NavLink to='/online-store/my-orders'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                    :
                    <NavLink to='/online-store/sign-in'>
                        My Orders
                    </NavLink>
                    }
                </li>
                <li>
                    {
                    context.isLogged?
                    <NavLink 
                        to='/online-store/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        onClick={()=>context.setIsPasswordVisible(false)}>
                        My Account
                    </NavLink>
                    : undefined
                    }
                </li>
                <li>
                    {
                    !context.isLogged?
                    <NavLink 
                        to='/online-store/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                    : undefined
                    }
                </li>
                <li className='flex item-center h-[20px]'
                onClick={()=>{
                    context.openCheckoutSideMenu();
                    context.closeProductDetail();
                }}>
                    <AiOutlineShoppingCart className='h-full w-full cursor-pointer'/>
                    <div className='cursor-pointer'>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar