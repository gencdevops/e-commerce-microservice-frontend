import React, {useContext} from 'react'
import {StoreContext} from '../context'
import ProductPanel from "../components/ProductPanel";

const CATEGORIES = [
    'bedroom',
    'office',
    'kitchen',
    'living room',
    'kids',
    'dining'
]

const COMPANIES = [
    'ikea',
    'marcos',
    'liddy',
    'caressa'
]

const COLORS = [
    '#0000ff',
    '#000',
    '#ff0000',
    '#ffb900',
    '#00ff00'
]

export default function Products() {
    const {
        query, setQuery,
        categoryIndex, setCategoryIndex,
        freeShipping, setFreeShipping,
        price, setPrice, 
        colorIndex, setColorIndex,
        companyIndex, setCompanyIndex,
        sortByIndex, setSortByIndex,
        viewGrid, setViewGrid,
        products, clearFilters
    } = useContext(StoreContext)

    // const filteredProducts = products && products.filter(product => {
    //     if(
    //         (query.trim() !== '' && !product.name.includes(query.trim().toLowerCase())) ||
    //         ((categoryIndex > -1 && categoryIndex < 6) && product.category !== CATEGORIES[categoryIndex]) ||
    //         ((companyIndex > -1 && companyIndex < 4) && product.company !== COMPANIES[companyIndex]) ||
    //         ((colorIndex > -1 && colorIndex < 5) && product.colors.find(c => c !== COLORS[colorIndex])) ||
    //         (product.price > price) ||
    //         (freeShipping && (!product.hasOwnProperty('shipping') || !product.shipping))
    //     ) return false;
    //     return true;
    // })

    // const sortProducts = (products, index) => {
    //     if(index < 0 || index > 4) return products;
    //     switch(index) {
    //         case 0:
    //             return products.sort((a, b) => a.price - b.price);
    //         case 1:
    //             return products.sort((a, b) => a.price - b.price).reverse();
    //         case 2:
    //             return products.sort((a,b) => {
    //                 const aName = a.name.toLowerCase();
    //                 const bName = b.name.toLowerCase();
    //                 if(aName < bName) return -1;
    //                 if(aName > bName) return 1;
    //                 return 0;
    //             });
    //         case 3:
    //             return products.sort((a,b) => {
    //                 const aName = a.name.toLowerCase();
    //                 const bName = b.name.toLowerCase();
    //                 if(aName < bName) return -1;
    //                 if(aName > bName) return 1;
    //                 return 0;
    //             }).reverse();
    //         default:
    //             return products;
    //     }
    // }

    return(
        <>
            <section>
                <div className="tw-container py-10 flex flex-col md:flex-row gap-10">
                    
                    <section id="products" className="w-full">
                        
                        <article id="products-list">
                            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {products == "" ?
                                    <div
                                        className="bg-red-100 border border-red-400 text-red-700  py-3 rounded"
                                        role="alert">
                                        <strong className="font-bold">Bilgilendirme!</strong>
                                        <span className="block">Mağazamızda  geçici bir süre satış yapılamamaktadır.</span>
                                    </div>
                                    :
                                    products.map(product => (
                                    <ProductPanel
                                    key={product.id}
                                {...product}
                                    grid={viewGrid}
                                    />
                                    ))
                                }
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </>
    )
}
