import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

// Write your JS code here

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
        <h1>Cart</h1>
      </div>
    </>
  )
}

export default Cart
