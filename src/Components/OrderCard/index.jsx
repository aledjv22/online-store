import { useContext } from "react";
import { CiCircleRemove } from 'react-icons/ci';
import { ShoppingCartContext } from '../../Context';


const OrderCard = props => {
    const context = useContext(ShoppingCartContext);

    const { id, title, image, price, handleDelate } = props;
    let renderXMarkIcon;

    if(handleDelate) {
        renderXMarkIcon = <CiCircleRemove 
                    className='flex items-center justify-center w-full h-full
                    hover:text-red-500 cursor-pointer'
                    onClick={() => handleDelate(id)}/>
    }
    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-[70px] h-[70px]'>
                    <img className='flex justify-center items-center h-full rounded-lg object-contain' 
                    src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>
            <div className='flex items-center'>
                <p className='text-lg font-medium ml-1 mr-1'>
                    ${price}
                </p>
                <button className='h-[28px] w-[28px] rounded-full'>
                    {renderXMarkIcon}
                </button>
            </div>
        </div>
    )
}

export default OrderCard;