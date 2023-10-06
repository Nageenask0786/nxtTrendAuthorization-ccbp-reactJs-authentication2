import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

// Write your JS code here

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
        <h1>Products</h1>
      </div>
    </>
  )
}

export default Products
