import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { BiChevronsRight } from 'react-icons/bi';


const OrdersCard = props => {
    const context = useContext(ShoppingCartContext);

    const { totalPrice, totalProducts, date } = props;

    return (
        <div className='flex justify-between items-center mb-2 border 
        border-black p-4 w-80 rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-normal text-lg'>{date}</span>
                    <span className='font-normal text-lg'>{totalProducts} articles </span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='text-2xl'>${totalPrice}</span>
                    <BiChevronsRight className='h-6 w-6 text-black cursor-pointer hover:text-blue-500'/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard;