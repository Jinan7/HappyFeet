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
    return (<Wrapper >
            <div className="container">
            <div className="icon-container" onClick={toggleSide}><BiSolidDownArrow className="icon"/></div>
            {showSide?<form action="">
                <h4>Brand</h4>
                <label className="brand" htmlFor="brand">all<input type="checkbox" name="brand" value='all' checked/></label>
                {brands.map((brand)=>{
                    return <label className="brand" htmlFor="brand">{brand} <input type="checkbox" name="brand" value={brand}/></label>
                })}
            </form>:''}
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
        .icon-container{
            display:none;
        }
    }
`

export default SideBar