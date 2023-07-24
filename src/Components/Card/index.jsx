import { CiCirclePlus } from "react-icons/ci";
const Card = (data) => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2 border-gray-500'>
            <figure className='relative mb-2 w-full h-4/5 rounded-3xl'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 text-medium'>{data.data.category}</span>
                <img className='w-full h-full object-contain rounded-lg max-h-full p-1' src={data.data.image} alt={data.data.title} />
                <button >
                    <CiCirclePlus className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-0 stroke-0 hover:text-green-500' />
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light pl-1 pr-1 pb-1 line-clamp-2'>{data.data.title}</span>
                <span className='text-lg font-medium pr-1'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card