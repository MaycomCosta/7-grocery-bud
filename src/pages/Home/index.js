import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import * as C from './styles.js'
import { Alert, List } from '../../components/index.js'


const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}
export function Home() {
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [list, setList] = useState(getLocalStorage())
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Por favor coloque um valor')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Item editado')
    } else {
      showAlert(true, 'success', 'Item adicionado')
      const newItem = { id: new Date().getTime().toString(), title: name }

      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'danger', 'Lista vazia')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removido')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  function handleInfoClick() {
    setTimeout(() => {
      history.push('/info')
    }, 1000)  
  }

  return (
    <C.SectionCenter>
      <button className='info-button' onClick={handleInfoClick}>
        <AiOutlineInfoCircle />
      </button>
      <C.Form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        
        <h3>Lista de compras</h3>
        <C.FormControl>
          <input
          type='text'
          className='grocery'
          placeholder='Ovos...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <C.SubmitButton type='submit'>
            {isEditing ? 'Editar' : 'Enviar'}
          </C.SubmitButton>
        </C.FormControl>
      </C.Form>
        {list.length > 0 && (
        <C.GroceryContainer>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <C.ClearButton onClick={clearList}>
            Limpar lista
          </C.ClearButton>
        </C.GroceryContainer>
      )}
    </C.SectionCenter>
  )
}