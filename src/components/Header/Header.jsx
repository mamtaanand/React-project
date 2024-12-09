import React from 'react'
import { Logo, LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.authStatus)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: !authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: !authStatus
    },
    // {
    //   name: 'Login',
    //   slug: '/login',
    //   active: !authStatus
    // },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
  ]
  return (
   <>
   <header className='py-3 shadow bg-gray-500'>
      <>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </>
    </header>
    </>
  );
}


export default Header