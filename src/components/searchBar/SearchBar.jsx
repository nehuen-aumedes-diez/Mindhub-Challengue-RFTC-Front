import React from 'react'
import './searchbar.css'

export default function SearchBar(props) {
    let{fn}=props
    return (
    
        <div class="search_wrap search_wrap_3">
            <div class="search_box">
                    <input type="text" class="input" onKeyUp={fn} placeholder="Buscar..." />
            </div>
        </div>
   
        )
    }
