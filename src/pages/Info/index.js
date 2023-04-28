import React from 'react'
import { useHistory } from 'react-router-dom'


import * as C from './styles.js'
export function Info() {
  const history = useHistory()


  function handleBackPageClick() {
    setTimeout(() => {
      history.push('/')
    }, 1000)  
  }

  return (
    <C.SectionCenter>
        <h1>Oi, tudo bom?</h1>
        <p>O projeto feito criado para ajudar no dia a dia na hora de fazer as compras</p>
        <p>Você pode conhecer um outro projeto, uma <a href='https://thetodoliist.netlify.app/'>lista de tarefas</a> diarias!</p>
        <p>Você também pode me seguir no <a href='https://www.linkedin.com/in/maycomcosta/'>Linkedin</a>, <a href='https://github.com/MaycomCosta'>Github</a> e no <a href='https://twitter.com/DamnDolar'>Twitter</a></p>
        <div><button onClick={handleBackPageClick}>Voltar</button></div>
    </C.SectionCenter>
  )
}