import { useContext } from "react";
import { CiCircleRemove } from 'react-icons/ci';
import { BsCartPlus } from 'react-icons/bs';
import { ShoppingCartContext } from '../../Context';


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} 
        flex-col fixed right-0 border border-black rounded-lg bg-white 
        w-[360px] h-[calc(100vh_-_68px)] top-[68px]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button className='h-[28px] w-[28px] rounded-full'
                    onClick={context.closeProductDetail}>
                    <CiCircleRemove className='flex items-center justify-center 
                    w-full h-full hover:text-red-500 cursor-pointer'/>
                </button>
            </div>
            <figure className='px-6'>
                <img 
                className='w-full rounded-lg' 
                src={context.productToShow.image} 
                alt={context.productToShow.title} />
            </figure>
            <div className='flex justify-between items-center cursor-pointer mb-2 pl-6 pr-6 mt-2'>
                <span className='font-medium text-2xl'>
                    ${context.productToShow.price}
                </span> 
                <button className='bg-lime-200 w-[45px] h-[32px] rounded-full 
                text-[20px] font-serif flex justify-center items-center' 
                onClick={()=>context.setCount(context.count+1)}>
                    <BsCartPlus className='w-[25px] h-[25px]'/>
                </button>
            </div>
            <p className='flex flex-col pl-6 pr-6 h-[100px]'>
                <span className='font-medium text-md'>
                    {context.productToShow.title}
                </span>
                <span className='font-light text-sm'>
                    {context.productToShow.description}
                </span>
            </p>
        </aside>
    );
}

export default ProductDetail;