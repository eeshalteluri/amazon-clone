import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{basket, user}] = useStateValue();

  const handleAuth =  (user) => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>

      <div className='header_search'>
        <input type="text" className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
     </div>

       <div  className='header_nav'>
        <Link to={!user && '/login'}>
        <div className='header_option' onClick={handleAuth}>
          <span className='header_optionLineOne'>Hello {user?.email? user.email:'Guest'}</span>
          <span className='header_optionLineTwo'>{user? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>

        <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
       </div>
       </Link>
    </div>
    </div>
  )
}

export default Header
