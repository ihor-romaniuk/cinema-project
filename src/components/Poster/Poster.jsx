import React from "react";

import { BuyButton } from "..";
import "./Poster.scss";

export const Poster = ({ poster, title, additionalClass = "", showBuyBtn = true }) => {
    return (
       <div className="MoviePoster">
           <figure className={`MoviePoster-Wrapper MoviePoster-Wrapper_inner ${additionalClass}`}>
               <img
                   src={poster}
                   className="MoviePoster-Image"
                   alt={title}
               />
           </figure>
           {
               showBuyBtn && <BuyButton />
           }
       </div>
    )
};
