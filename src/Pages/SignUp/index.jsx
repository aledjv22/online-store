import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import { BiSolidChevronsLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom'

function SignUp() {
  const context = useContext(ShoppingCartContext);

  const onAddUser = () => {
    let name = document.getElementById('nameUp').value;
    let email = document.getElementById('emailUp').value;
    let password = document.getElementById('passwordUp').value;
    context.addUser(name, email, password);
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6 text-2xl font-medium'>
        <Link to='/online-store/sign-in' className='absolute left-0'>
          <BiSolidChevronsLeft className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>Welcome</h1>
      </div>
      <form className='flex flex-col w-[300px]'>
        <label htmlFor='name'>Name</label>
        <input id='nameUp' type='text' htmlFor='name' placeholder='Alejandro Díaz'
        className='border border-gray-400 rounded-lg w-full px-2 py-1 mb-2' />

        <label htmlFor='email'>Email</label>
        <input id='emailUp' type='email' htmlFor='email' 
        className='border border-gray-400 rounded-lg w-full px-2 py-1 mb-2' 
        placeholder='example@gmail.com' autoComplete='username'/>

        <label htmlFor='password'>Password</label>
        <input id='passwordUp' type='password' htmlFor='password'
        className='border border-gray-400 rounded-lg w-full px-2 py-1 mb-3' 
        placeholder='******' autoComplete='current-password'/>
      </form>
      <button className='bg-black py-3 text-white rounded-lg w-[300px] mb-4'
      onClick={onAddUser}>
      CREATE ACCOUNT
      </button>
    </Layout>
  )
}

export default SignUp