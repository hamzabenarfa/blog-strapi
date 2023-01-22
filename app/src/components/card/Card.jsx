import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
function Card() {
  return (

    <div>
        <div className='card-xd'>
            <div className='image'>
                <img src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390" alt="photo" />
            </div>

            <div className='text'>
                <h1 className='title'>Comment aligner la stratégie RH et la stratégie d'entreprise</h1>
                <p className='description'>La création d’une stratégie d'entreprise implique la prise en compte de nombreux éléments. Qu’il s’agisse des messages de marque, des roadmaps produit ou des processus métier, les stratégies de mise sur le marché efficaces reposent également sur la contribution de nombreux collaborateurs dans différents services. </p>
                <Link to="/" className='button'>Read More</Link>
            </div>

        </div>

    </div>
  )
}

export default Card