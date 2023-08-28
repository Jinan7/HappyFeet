import { styled } from "styled-components"
import {BiSolidDownArrow} from 'react-icons/bi'
import { useState } from "react"
import { brands } from "../../data"

const SideBar = () => {
    const [showSide, setShowSide] = useState(true)
    const toggleSide = () => {
        setShowSide((showSide)=>{
            return !showSide
        })
    }
    return (<Wrapper onClick={toggleSide}>
            <div className="container">
            <BiSolidDownArrow className="icon"/>
            <form action="">
                <h4>Brand</h4>
                {brands.map((brand)=>{
                    return <label className="brand">{brand} <input type="checkbox"></input></label>
                })}
            </form>
            </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    background: var(--clr-grey-5);
    text-align:center;
    
    .brand{
        display:block;
    }

    @media screen and (min-width: 768px){
        .container{
            position:sticky;
            top:var(--navheight);
            display:grid;
            padding:2rem;
            
        }
        .icon{
            display:none;
        }
    }
`

export default SideBar