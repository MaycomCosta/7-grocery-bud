import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import * as C from './styles'

function List ({ items, removeItem, editItem }) {
  return (
    <C.GroceryList>
      {items.map((item) => {
        const {id, title} = item
        return (
          <C.Article>
            <p>{title}</p>
          <C.ButtonContainer>
            <C.EditButton
            type='button'
            onClick={() => editItem(id)}
            >
            <FaEdit />
            </C.EditButton>
            <C.DeleteButton
            type='button'
            onClick={() => removeItem(id)}
            >
            <FaTrash />
            </C.DeleteButton>
          </C.ButtonContainer>
          </C.Article>
        )
      })

      }
    </C.GroceryList>
  )
}

export default List
