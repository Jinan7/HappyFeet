import { createContext } from "react"
import fetchUtil from "../../util/fetchUtil"
import Navbar from "../components/Navbar"
import ProductsContainer from "../components/productsContainer"
import { useLoaderData } from "react-router-dom"
import SideBar from "../components/SideBar"
import { styled } from "styled-components"


export const productLoader = async (data) =>{
    try {
        const response = await fetchUtil('products')
        return response.data
    } catch (e) {
        console.log(e)
        return e;
    }
}

export const ProductContext = createContext()
const Products = () => {
    const products = useLoaderData()
    return (<Wrapper>
        <ProductContext.Provider value={{products}}>
        <Navbar/>
        <div className="container">
            <SideBar/>
            <ProductsContainer/>
        </div>
        </ProductContext.Provider>
    </Wrapper>)
}


const Wrapper = styled.div`
    

    @media screen and (min-width: 768px){
        .container{
            display:grid;
            grid-template-columns: auto 1fr;
        }
    }
`




export default Products