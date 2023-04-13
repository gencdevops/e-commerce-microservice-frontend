import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context'
import { Link } from 'react-router-dom'


function RenderBasketList() {
    const { basketItems } = useContext(StoreContext)
    return(
        <>
              <div style={{width:'300px', backgroundColor:'#eeeee4', display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px', border:'1px solid transparent', borderRadius:'10px', zIndex:3, position:'absolute'}}>
              <p style={{textAlign:'center'}}>My Cart</p>
              {basketItems.length ? (
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:'10px'}}>
                {
                    basketItems.map((item) => (
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'5px 0', alignItems:'center'}}>
                        <img src={item.imgUrl} alt={item.name} width={100} />
                        <div>{item.name}</div>
                        </div>
                    ))
                }
                </div>
              ) :  (
                <div style={{textAlign:'center', padding:'10px 0'}}>Your cart is empty!</div>
            )}
          </div>
        </>
    )
}

export default RenderBasketList