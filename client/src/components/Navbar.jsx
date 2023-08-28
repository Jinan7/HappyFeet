import { FaShoppingCart, FaCartPlus} from "react-icons/fa"
import { Link } from "react-router-dom"
import { styled } from "styled-components"


const Navbar = () => {
    return (<Wrapper>
        <a href="/products"><h2>happy feet</h2></a>
        <Link><FaShoppingCart className="icon"/></Link>
    </Wrapper>)
}

const Wrapper = styled.div`
    height: var(--navheight);
    background: var(--clr-yellow);
    padding: 0.2rem 1rem;
    display:grid;
    grid-template-columns: 1fr auto auto;
    align-items:center;
    position:sticky;
    top:0;
    left:0;

    h2{
        font-family: 'Barriecito', cursive;
        text-transform:uppercase;
        color: var(--clr-dark-blue);
    }

    a{
        text-decoration:none;
    }
    .icon{
        color: var(--clr-dark-blue);
        font-size:1.5rem;
    }
`
export default Navbar