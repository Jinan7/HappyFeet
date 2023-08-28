import { styled } from "styled-components"
import Product from "./product"
import { useContext } from "react"
import { ProductContext } from "../pages/Products"
import { Link } from "react-router-dom"

const ProductsContainer = () => {
    const {products} = useContext(ProductContext)
    return (<Wrapper>
        {
            products.map((product)=>{
                const {_id, name, image, size, price, brand} = product
                return <Product key={_id} id={_id} name={name} image={image} size={size} price={price} brand={brand}/>
            })
        }
    </Wrapper>)
}


const Wrapper = styled.div`
    padding: 1rem;
    display:grid;
    gap:1rem;

    @media screen and (min-width:768px){
        grid-template-columns:1fr 1fr 1fr;
    }
    @media screen and (min-width:992px){
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
`
export default ProductsContainer