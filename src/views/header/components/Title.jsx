import React from "react"
import '../styles.scss'
import {Link } from "react-router-dom"
const Title = () => {

    return (
        <div className="title">
        <Link to={'/home'}> <img width="200px" src="/marvelcomics.png" alt="Logo de marvel"/> </Link>   
            <h1>Comics</h1>
        </div>
    )
}

export default Title