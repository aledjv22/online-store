import { useContext } from "react"
import { Link } from "react-router-dom";
import { BiSolidChevronsLeft } from 'react-icons/bi';
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = context.order.length - 1;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <Link to='/online-store/my-orders' className='absolute left-0'>
          <BiSolidChevronsLeft 
          className='h-6 w-6 text-black cursor-pointer hover:text-blue-500'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-[320px]'>
              {
              context.order?.[index]?.products.map(product => (
                  <OrderCard 
                  key={product.id}
                  id={product.id}
                  title={product.title} 
                  image={product.image} 
                  price={product.price}/>
              ))
              }
      </div>
    </Layout>
    )
  }
  
  export default MyOrder