import React from 'react'
import './searchbar.css'

export default function SearchBar(props) {
    let{value}=props
 
    return (
    
        <div class="search_wrap search_wrap_3">
            <div class="search_box">
                    <input type="text" class="input" placeholder="search" />
            </div>
        </div>
   
        )
    }
