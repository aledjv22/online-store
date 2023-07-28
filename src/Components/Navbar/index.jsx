import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className='flex justify-between items-center fixed 
        z-10 top-0 w-full pt-5 px-8 pb-2 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/online-store/'>
                        Shopi
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
                        to='/online-store/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Clothes
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
                        to='/online-store/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Toys
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
                    victor.diaz.jauregui@gmail.com                                                 
                </li>
                <li>
                    <NavLink 
                        to='/online-store/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/online-store/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
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