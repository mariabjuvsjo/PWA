import React from 'react'
import { useNavigate } from 'react-router-dom'

import { HiArrowLeft } from "react-icons/hi";


function Thanks() {

    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()


        navigate('/raport')

    }


    return (
        <div className='thanks'>
            <button className='btn-back' onClick={handleClick}><HiArrowLeft /></button>
            <h2>Thanks</h2>
        </div>

    )
}

export default Thanks