import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'

function Footer() {
  return (
    <>
    <section>
      <div className='py-3 shadow bg-gray-500'>Footer
        <Link to='/'>
        {/* <Logo /> */}
        </Link>
      </div>
    </section>
    </>
  )
}

export default Footer;
