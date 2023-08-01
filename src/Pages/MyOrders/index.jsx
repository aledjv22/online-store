import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-3">
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          order.user == context.currentUser.email ? 
          <Link key={index} to={`/online-store/my-orders/${index}`}>
            <OrdersCard 
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}
            date={order.date}/>
          </Link>
          : undefined
        ))
      }
    </Layout>
  )
  }
  
  export default MyOrders