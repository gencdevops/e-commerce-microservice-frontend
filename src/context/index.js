import React, {createContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'

const StoreContext = createContext(null)

const StoreProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage('commerce_cart', [])
    const [productIds , setProductIds] = useLocalStorage('ProductIds', [])

    // Store Filtration
    const [query, setQuery] = useState('')
    const [categoryIndex, setCategoryIndex] = useState(-1)
    const [companyIndex, setCompanyIndex] = useState(-1)
    const [colorIndex, setColorIndex] = useState(-1)
    const [price, setPrice] = useState(309999)
    const [freeShipping, setFreeShipping] = useState(false)

    // Store Grid
    const [sortByIndex, setSortByIndex] = useState(0)
    const [viewGrid, setViewGrid] = useState(true)

    // login & logout
    const [isLogin, setLogin] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const {response: products, error } = useFetch('http://localhost:9003/product')

    if(error) return 'error....';
    
    

    const clearFilters = () => {
        setQuery('');
        setCategoryIndex(-1);
        setCompanyIndex(-1);
        setColorIndex(-1);
        setPrice(309999)
        setFreeShipping(false)
    }
    
    return (
        <StoreContext.Provider value={{
            cart, setCart,
            productIds, setProductIds,
            query, setQuery,
            categoryIndex, setCategoryIndex,
            freeShipping, setFreeShipping,
            price, setPrice, 
            colorIndex, setColorIndex,
            companyIndex, setCompanyIndex,
            sortByIndex, setSortByIndex,
            viewGrid, setViewGrid,
            products, error,
            isLogin, setLogin,
            showModal,setShowModal,
            clearFilters
        }}>
            {products ? children : ''}
        </StoreContext.Provider>
    );
}

export { StoreProvider, StoreContext }
