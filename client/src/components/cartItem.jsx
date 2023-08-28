
import { useContext } from "react"
import { FaTrash } from "react-icons/fa"
import { styled } from "styled-components"
import { AppContext } from "../AppContext"

const CartItem  = (props) => {
    const {brand, name, price, img, id} = props
    const {removeFromCart} = useContext(AppContext)
    return (<Wrapper>
        <img src={img} alt="cart item" className="img"/>
        <div className="info-container">
            <div className="info">
                <h4>{name}</h4>
                <h4>{brand}</h4>
                <h4>${price}</h4>
            </div>
            <div className="trash-icon">
                <FaTrash onClick={()=>{removeFromCart(id)}}/>
            </div>
        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    margin-bottom: 1rem;
    border: 1px solid var(--clr-grey-5);
    .img{
        height:10rem;
        width:10rem;
        object-fit:cover;
    }
    display:grid;
    grid-template-columns:auto 1fr;

    .info-container{
        font-family: 'Gluten', cursive;
        color: var(--clr-grey-10);
        line-height: 1.5;
        padding:1rem;
        display:grid;
        grid-template-columns: 1fr auto;
        align-items:center;
    }

    
`
export default CartItem