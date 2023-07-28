import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0){
      return (
        context.filteredItems?.map((item)=>(
          <Card key={item.id} data={item}/>
        ))
      )
    }else{
      return (
        <div>
          No results found 
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-3">
        <h1 className='font-medium text-xl'>
          Exclusive Products
        </h1>
      </div>
      <input type="text" 
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
      onChange={(event) => context.setSearchByTitle(event.target.value)}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
