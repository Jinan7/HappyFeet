import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {PiSmileyWinkFill} from "react-icons/pi"

const Home = () => {
    return (<Wrapper>
        <header className="header">
            <h1>happy <span>feet</span> <PiSmileyWinkFill/></h1>
            <p>Discover the Ultimate Comfort and Style Fusion at Happy Feet E-Commerce Store! 🛍️ Step into a World of Trendsetting Footwear, Where Every Pair Tells a Unique Story of Elegance and Joy. Whether You're Strolling Down the Street or Dancing Through Life's Adventures, Let Your Feet Experience True Bliss with Our Premium Collection. From Classic to Contemporary, Find Your Perfect Solemate and Walk Confidently with Unmatched Grace. Your Journey to Happy Feet Begins Here. Step In, Shop, and Step Up Your Style Game Today! </p>
            <Link to="/products" className='btn'>shop now</Link>
        </header>
        </Wrapper>)
}

const Wrapper = styled.div`
    
    min-height:100vh;
    display:grid;
    place-items:center;
    background: linear-gradient(rgb(44,174,186,0.7), rgba(0,0,0,0.7)) ,url(../../images/HappyFeet.jpg) center/cover no-repeat;

    .header{
        width:70vw;
        text-align:center;
    }

    .header h1{
        font-family: 'Barriecito', cursive;
        font-size: 4rem;
        text-transform:uppercase;
        color: var(--clr-yellow);
    }
    .header span{
        color:var(--clr-dark-blue);
    }

    .header p{
        /* font-family: 'Gluten', cursive; */
        letter-spacing: 1.5px;
        line-height: 1.5rem;
        color: var(--clr-grey-10);
        margin-bottom: 2rem;
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
    }
`




export default Home