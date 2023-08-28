import { styled } from "styled-components"
import img from "../../images/HappyFeet.jpg"
import { Link } from "react-router-dom"

const Product = (props) => {
    const {id, name, image, size, price, brand} = props
    console.log(name)
    return (<Link to={`./${id}`} className="link" style={{ textDecoration: 'none' }}>
    <Wrapper>
        <img src={img} alt="product image" className="product-img"/>
        <div className="info">
        <h4>{brand} {name}</h4>
        <span className="price">${price}</span>
        </div>
    </Wrapper>
    </Link>)
}

const Wrapper = styled.div`
    background:var(--clr-grey-9);
   
    .product-img{
        height: 17rem;
        object-fit: cover;
    }

    .info{
        display:flex; 
        justify-content:space-between;
        gap:1rem;
        padding: 1rem;
        text-transform:capitalize;
        color: var(--clr-grey-3);
    }
    .price{
        font-style:italic;
        font-weight:500;
    }

`


export default Product