import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import './searchbar.css'

export default function SearchBar(props) {
    let{fn}=props
    let searchbar = useRef()
    //console.log("searchbar", searchbar?.current?.value);
    const { busqueda } = useSelector( store => store.remerasF)
    //console.log("BUSQUEDA", busqueda);
    useEffect( () => {
        if (busqueda){
            searchbar.current.value = busqueda
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    
        <div class="search_wrap search_wrap_3">
            <div class="search_box">
                    <input type="text" class="input" onKeyUp={fn} ref={searchbar} placeholder="Buscar..." />
            </div>
        </div>
   
        )
    }
