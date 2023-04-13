import React, { useContext } from 'react'
import { StoreContext } from '../context/index'
import PropTypes from 'prop-types'
import { useAlert } from 'react-alert'
import axios from 'axios'

const ProductPanel = ({ id, name, image, price }) => {
    const alert = useAlert()
    const { setProductIds, productIds } = useContext(StoreContext)
    const API_URL = 'http://localhost:9006'
    
    const addBasketHandler = ( id ) => {
        if(productIds.includes(id)) {
           return alert.show('Bu ürün zaten sepetinizde mevcut')
        } 
        else {
            return ( 
            axios.post(API_URL + "/basket-item/basket-item", {
                productId: id,
                quantity: 1,
                basketId: '04167873-03c3-486b-a028-01bfa7e4bf95'
            }).then((response) => (
                    setProductIds([...productIds, id]),
                    console.log(response)
                ))
            )
        }
    }

    return (
            <article>
                <div className="relative h-48 rounded">
                    <img
                        alt={name}
                        className="h-full rounded bg-black object-cover w-full"
                        src={image}
                    />
                    <div className="absolute top-0 left-0 w-full h-full rounded transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex justify-center items-center bg-opacity-40 bg-gray-800">
                        <a onClick={() => addBasketHandler(id)} className="cursor-pointer relative w-10 h-10 text-white rounded-full bg-white p-2.5">
                            <svg stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 576 512"  xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                        </a>
                    </div>
                </div>
                <footer className="flex justify-between items-center mt-4 capitalize">
                    <h6>{name}</h6>
                    <p className="text-blue-500 tracking-widest">{price.toCurrency()}</p>
                </footer>
            </article>
        )
}

ProductPanel.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    grid: PropTypes.bool
}

export default ProductPanel
