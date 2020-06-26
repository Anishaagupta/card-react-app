/* eslint-disable */
import React from 'react'
import Image from './Image'
import Heading from './Heading'
 
//cards function is a component
function Cards(props){
    return (
    <>
    <div className = "container">
        <div className="cards">
             <Image imgLink={props.imgLink}/>
             <div className="card_info"> 
                <span className="title">{props.title}</span>
                <Heading name={props.name} />
                <a href={props.srcLink} target="_blank"><button className="btn">WATCH NOW</button></a>
             </div>
        </div>
    </div>
    </>
    )
}

//to export a component
export default Cards
