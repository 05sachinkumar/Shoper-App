import React from "react"
import { myDatabase } from "../firebase.js"
import jquery from 'jquery'

function Card()
{
    // store this data in a array
    const [productsData,setProductsData] = React.useState([])

    React.useEffect(function()
    {
        // Logic to read the data from firestore database
        myDatabase.collection("products").onSnapshot(function(snapshot)
        {
            setProductsData(snapshot.docs.map(function(i)
            {
                return i.data()
            }))
        })
    })

    function collectData(event)
    {
        // logic to collect the data like quantity and id
        if(localStorage.getItem("cart") == null)
        {
            // means cart key is not present in the local storage,so it means even id and quantity is also not in the local storage.
            // we have to create the cart key  
            var cart = {}
        }
        else
        {
            // if cart key is already in the local Storage, it means id and quantity might be available
            // JSON data in to javascript object
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        // we need to get the Id
        let myId = event.target.id

        if(cart[myId] == undefined)
        {
            
            var name = document.getElementById("myname"+myId).innerText
            var price = Number(document.getElementById("myprice"+myId).innerText)
            var quantity = 1
            cart[myId] = [quantity,name,price]
        }
        else{
            quantity = cart[myId][0] + 1
            cart[myId][0] = quantity    
            var price = Number(document.getElementById("myprice"+myId).innerText) * quantity
            cart[myId][2] = price
        }

        localStorage.setItem("cart", JSON.stringify(cart))

        displayCart(cart)
        function displayCart(mycart)
        {
            // logic to display the data that is present inside the cart variable and put it inside the popover
            var cartData = ""
            for(let i in mycart)
            {
                cartData = cartData + "QTY:" + mycart[i][0] +" " + " NAME:" + mycart[i][1]  +" " + " PRICE:" + mycart[i][2]  +" " + "<br/>"
                // console.log(cartData)
            }
            cartData = cartData +  "<a href='productData.html' class='btn btn-success'>Continue</a>"
            document.getElementById("mypopover").setAttribute("data-content",cartData)
        }
    }

    return(
        <div className="all" style={{display:"flex"}}>
            {
                // in array using map function for access every key present in a database
                productsData.map(function(i)
                { 
                    return <div key={i.slno} className="card" style={{width: 350, margin:30,padding:30}}>
                        <h2>{i.slno}</h2>
                        <img src={i.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" id={"myname"+i.slno}>{i.name}</h5>
                            <p className="card-text">{i.description}</p>
                            <del><h5 className="card-title">{i.originalPrice}</h5></del>
                            <h5 className="card-title" id={"myprice"+i.slno}>{i.discountedPrice}</h5>
                            <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add to Cart</a>
                        </div>
                    </div>
                })
            }
        </div>
    )  
}

export default Card