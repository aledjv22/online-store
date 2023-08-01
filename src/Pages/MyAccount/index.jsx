import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6 text-2xl font-medium'>
        <h1>MyAccount</h1>
      </div>

      <div className='flex flex-col w-[350px]'>
        <p className=' w-full px-2 py-1 mb-2'>
          <span className='text-black font-semibold'>Name: </span>
          <span className='text-gray-600 font-medium'>
            {context.currentUser.user}
          </span>
        </p>

        <p className='w-full px-2 py-1 mb-3'>
          <span className='text-black font-semibold'>Email: </span>
          <span className='text-gray-600 font-medium'>
            {context.currentUser.email}
          </span>
        </p>

        <p className='w-full px-2 py-1 mb-3'>
          <span className='text-black font-semibold'>Password: </span>
          <span className='text-gray-600 font-medium'>Not visible</span>
        </p>

        <button className='bg-black py-3 text-white rounded-lg w-full mb-4'
        onClick={() => {
          context.setCurrentUser('');
          context.setIsLogged(false);
          context.navigateTo('/online-store/');
        }}>
          Log Out
        </button>
      </div>
    </Layout>
  )
}

export default MyAccount