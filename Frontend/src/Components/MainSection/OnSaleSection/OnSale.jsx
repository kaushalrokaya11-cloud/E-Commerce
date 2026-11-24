import OnSaleProducts from './OnSaleProducts.jsx';
import './OnSale.css';

import '../MainSection.css';
import {useState,useRef} from "react";
function click(){
    console.log("button clicked")
}
function OnSale(){
    let data1 = "<"
    let data2 = ">"

    
    let listScroll = useRef({});
    function scroll(direction){
        listScroll.current.scrollBy({
            left : direction,
            behavior:'smooth'
        });
      
    }
    return(
        <>
        <div className="on-sale">
            <div className="title">
                <p>
                    On Sale!
                </p>
               <hr/>
            </div>
        <div className="carousel">
                
            <button className="navigation" onClick={()=>scroll(-300)}>
                ‹
            </button>
            <div className="listing" ref ={listScroll}>

            <OnSaleProducts></OnSaleProducts>
                
          
            </div >
                
             <button className="navigation" onClick= {()=>scroll(300)}>
                ›
            </button>
           
        </div>
              
           
        </div>
        </>
    )
}
export default OnSale;