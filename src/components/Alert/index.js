import React, { useEffect } from 'react'
import * as C from './styles'


export const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line
  }, [list])
  return <C.Span><p className={`alert-${type}`}>{msg}</p></C.Span>
}
