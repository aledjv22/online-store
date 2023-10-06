import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";
import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (product) => {
        context.openProductDetail();
        context.setProductToShow(product);
        context.closeCheckoutSideMenu();
    }

    const addToCart = (event, product) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, product]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        return (
            isInCart ?
            <CiCircleCheck className='absolute top-0 right-0 flex 
            justify-center items-center bg-white w-8 h-8 rounded-full 
            m-2 p-0 stroke-0 text-green-500' />
            :
            <CiCirclePlus className='absolute top-0 right-0 flex 
            justify-center items-center bg-white w-8 h-8 rounded-full 
            m-2 p-0 stroke-0 hover:text-green-500' 
            onClick={(event) => addToCart(event, data.data)}/>
        )
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2 
            border-gray-500' onClick={()=>{showProduct(data.data)}}>
                <figure className='relative mb-2 w-full h-4/5 rounded-3xl'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg
                    text-black text-xs m-2 px-3 py-0.5 text-medium'>
                        {data.data.category}
                    </span>
                    <img className='w-full h-full object-contain rounded-lg max-h-full 
                    p-1' src={data.data.image} alt={data.data.title} />
                    <button>
                        {renderIcon(data.data.id)}
                    </button>
                </figure>
                <p className='flex justify-between items-center'>
                    <span className='text-sm font-light pl-1 pr-1 pb-1 line-clamp-2'>
                        {data.data.title}
                    </span>
                    <span className='text-lg font-medium pr-1'>
                        ${data.data.price}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card