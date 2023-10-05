import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';

function SignIn() {
  const context = useContext(ShoppingCartContext);

  const onSignIn = () => {
    let email = document.getElementById('emailIn').value;
    let password = document.getElementById('passwordIn').value;
    context.signIn(email, password);
  }
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6 text-2xl font-medium'>
        <h1>Welcome</h1>
      </div>

      <form className='flex flex-col w-[350px]'>
        <label htmlFor='emailIn'>Email</label>
        <input className='border border-gray-400 rounded-lg w-full px-2 py-1 mb-2' 
        type='email' htmlFor='emailIn' placeholder='example@gmail.com' 
        autoComplete='username' id='emailIn'/>
        
        <label htmlFor='passwordIn'>Password</label>
        <input className='border border-gray-400 rounded-lg w-full px-2 py-1 mb-3' 
        type='password' htmlFor='passwordIn' placeholder='********' 
        autoComplete='current-password' id='passwordIn' />
      </form>

      <button className='bg-black py-3 text-white rounded-lg w-[350px] mb-4'
        onClick={onSignIn}>
        Log in
      </button>

      <button className='mb-6 underline underline-offset-4'>
        Forgot my password
      </button>

      <Link to='/online-store/sign-up'>
        <button className='bg-white py-3 text-black rounded-lg w-[350px] border border-gray-400'>
          Sign up
        </button>
      </Link>

    </Layout>
  )
}

export default SignIn