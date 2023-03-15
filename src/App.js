import React, { useState, useEffect } from 'react'
import * as C from './styles.js'

import Alert from './components/Alert'
import List from './components/List'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}
function App() {
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [list, setList] = useState(getLocalStorage())

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
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
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }

      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
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

  return (
    <C.SectionCenter>
      <C.Form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        
        <h3>grocery bud</h3>
        <C.FormControl>
          <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <C.SubmitButton type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </C.SubmitButton>
        </C.FormControl>
      </C.Form>
        {list.length > 0 && (
        <C.GroceryContainer>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <C.ClearButton onClick={clearList}>
            clear items
          </C.ClearButton>
        </C.GroceryContainer>
      )}
    </C.SectionCenter>
  )
}

export default App
