import React, { useState } from 'react'
import { func } from 'prop-types'

import { STATUS, PRIORITY } from '../../utils/constants'
import { createDropDown } from '../../utils/utils'

const namespace = 'formtodo'

const FormTodo = ({ handleAddItem }) => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('HIGH')
  const [status, setStatus] = useState('NEW')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    handleAddItem({
      id: (+new Date()).toString(),
      title,
      priority,
      status,
      description
    })
    resetForm()
  }

  const resetForm = () => {
    setTitle('')
    setPriority('HIGH')
    setStatus('NEW')
    setDescription('')
  }

  return (
    <div className={`${namespace}`}>
      <form onSubmit={handleSubmit}>
        <div className={`${namespace}__input--text`}>
            <input
              type="text"
              value={title}
              placeholder={'Titulo'}
              onChange={e => setTitle(e.target.value)}
            />
            <select onChange={e => setPriority(e.target.value)}>
              { createDropDown(PRIORITY) }
            </select>
            <select onChange={e => setStatus(e.target.value)}>
              { createDropDown(STATUS) }
            </select>
        </div>
        <div className={`${namespace}__input--textarea`}>
          <textarea id="noter-text-area" name="textarea" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button
          className={`${namespace}__input--submit`}
          disabled={title ? '' : 'disabled'}
        >
          Crear tarea
        </button>
      </form>
    </div>
  )
}

FormTodo.propTypes = {
  handleAddItem: func.isRequired
}

export default FormTodo
