import { useLoaderData } from "react-router-dom";
import fetchUtil from "../../util/fetchUtil";
import Navbar from "../components/Navbar";
import { styled } from "styled-components";
import img from "../../images/HappyFeet.jpg"
import { useContext } from "react";
import { AppContext } from "../AppContext";


export const singleProductLoader = async ({params}) => {
    const {id} = params
    try {
        const response = await fetchUtil(`products/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
        return e
    }

}

const SingleProduct = () => {
    const product = useLoaderData()
    const {addToCart} = useContext(AppContext)
    const {brand, colors, image, inventory, name, price, description, size} = product
    
    return(<Wrapper><Navbar/>
        <div className="container">
            <img src={img} alt="single product image" className="product-img"/>
            <div className="info">
                <h1 className="title">{brand} {name}</h1>
                <p>{description||`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quam aut nisi unde, error molestias quis magnam neque quae quidem excepturi ipsam, rerum consectetur sit corporis doloremque perspiciatis alias tempora reiciendis ipsum ducimus pariatur provident! Praesentium repudiandae distinctio aliquid debitis rem, mollitia id nobis magnam. Voluptate vel assumenda veritatis provident.`}</p>
                <span className="price specs">price: $ {price}</span>
                <span className="size specs">size: {size}</span>
                <span className="inventory specs">inventory: {inventory}</span>

                <button className="btn" onClick={()=>{addToCart({name, brand, img, price})}}>add to cart</button>
            </div>
        </div>
    </Wrapper>)
}


const Wrapper = styled.div`
    background: var(--clr-grey-5);
    .container{
        padding:1rem;
        display:grid;
        gap:1rem;
        min-height: calc(100vh - var(--navheight))
    }

    .specs{
        font-family: 'Gluten', cursive;
        display:block;
        font-weight:600;
        color:var(--clr-dark-blue);
        margin-bottom: 0.5rem;
        text-transform:capitalize;
    }

    .title{
        text-transform:capitalize;
        font-family: 'Barriecito', cursive;
        color:var(--clr-dark-blue);
    }
    p{
        color: var(--clr-grey-8);
        margin-bottom:1rem;
    }

    .btn{
        margin-top:2rem;
        background:var(--clr-yellow);
        text-decoration:none;
        padding: 0.5rem 1rem;
        padding-top:0.6rem;
        text-transform:uppercase;
        font-weight:700;
        font-family: 'Gluten', cursive;
        color:var(--clr-dark-blue);
        border:none;
    }

    @media screen and (min-width: 768px){
        .container{
            grid-template-columns: 1fr 1fr;
        }
        .info{
            align-self:center;
        }
    }

`

export default SingleProduct