import React, { useState } from "react";
import axios from 'axios';

function Card(){

    const [quote,setQuote] = useState(" Press 'Get Quote' to view quote");

    let getQuote = ()=>{
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then( (res)=>{
            console.log(res.data);
            setQuote(res.data[0])
        });
    }

    return (
        <div className="Card-container">
            <h1 className="align-center roboto-condensed">Quotes from Ron Swanson</h1>
            <p className="align-center quote montserrat">{quote}</p>
            <button type="button" class="btn btn-primary get-quote-button roboto-condensed" onClick={getQuote}>Get Quote</button>
        </div>
    );
}

export default Card;