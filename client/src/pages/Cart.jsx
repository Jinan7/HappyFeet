import { useContext } from "react"
import { AppContext } from "../AppContext"
import Navbar from "../components/Navbar"
import { styled } from "styled-components"
import CartItem from "../components/cartItem"


const Cart = () => {
    const {state} = useContext(AppContext)
    const {cart} = state
    console.log(cart)
    return (<Wrapper>
        <Navbar/>
        <h2 className="title">
            cart
        </h2>
        {cart.length!==0?<div className="container">
            <div className="cart-items">
            {cart.map((item)=>{
                console.log(item)
                const {name, brand, img, price, _id} = item
                return <CartItem id={_id} name={name} brand={brand} img={img} price={price}/>
            })}
            </div>
            <div className="order">
                <h4>order summary</h4>
                <span className="item"><span className="desc">subtotal</span><span className="amount">0</span></span>
                <span className="item"><span className="desc">shipping</span><span className="amount">0</span></span>
                <span className="item item-total"><span className="desc">total</span><span className="amount">0</span></span>
                <button className="btn">place order</button>
            </div>
        </div>:<div className="empty"><h3>no items in cart...</h3></div>}
    </Wrapper>)
}


const Wrapper = styled.div`
    min-height: 100vh;
    background: var(--clr-grey-1);
    .container{
        padding:1rem;
        height:100%;
    }
    .empty{
        padding:1rem;
        text-transform:capitalize;
        color:var(--clr-grey-5);
    }

    .order{
        border: 1px solid var(--clr-yellow);
        padding:1rem;
        display:grid;
        grid-template-rows:repeat(5, 1fr)
    }
    .order h4{
        text-align:center;
        font-family: 'Barriecito', cursive;
        font-size:1.7rem;
        color:var(--clr-grey-5);
    }
    .item{
        display:flex;
        justify-content:space-between;
        font-size:1.2rem;
        text-transform: capitalize;
        color:var(--clr-grey-5);
    }

    .btn{
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

    @media screen and (min-width: 768px) {
        .container{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:1rem;
        }
    }
`




export default Cart