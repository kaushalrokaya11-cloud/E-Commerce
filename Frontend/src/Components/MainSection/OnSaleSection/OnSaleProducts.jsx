import {useState,useEffect} from "react";

export default function OnSaleProducts(){
    let [products,setProducts]= useState([]);
    let data;
    useEffect( ()=>{
        let fetchData= async()=>{
            try{

                let response = await fetch('api/products/get');
                data = await response.json();
                setProducts(data)
                console.log("data fetched successfully");
                console.log(data)
            }
            catch(err){
                console.log("error in fetch");
            }
        }
       

            fetchData();
       
    },[]);
    if(products.length==0){
        return(<>Loading Products</>);
    }
    return (
        <>
        {products.map((product)=>{
           return <a href="" className="product" key = {product._id}>
                          
                           <img src ={product.imageUrl}/>
                           <div className="name">
                               {product.name}
                           </div>
                           <div className="price">
                               <p>Rs</p> <p>{product.price}</p>
                           </div>
           
                           <div className="rating">
           
                               <span className='text'>Rating:</span><span className='full'>
                                   {"★".repeat(Math.floor(product.rating))}
                               </span>
                               <span className= "empty">
                                   {"★".repeat(Math.ceil(5-product.rating))}
                               </span>
                           </div>
                       </a>
        })}
        </>
    )

}