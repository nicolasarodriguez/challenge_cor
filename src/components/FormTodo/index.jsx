import React, { useState } from 'react'
import { func } from 'prop-types'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { STATUS, PRIORITY } from '../../utils/constants'
import { createDropDown } from '../../utils/utils'

const namespace = 'ui-formtodo'

const FormTodo = ({ handleAddItem }) => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('HIGH')
  const [status, setStatus] = useState('NEW')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
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
    <Card className={`${namespace}`}>
      <Card.Body>
        <div className={`${namespace}__input--text`}>
            <input
              type="text"
              value={title}
              placeholder={'Titulo'}
              onChange={e => setTitle(e.target.value)}
            />
            <select onChange={e => setPriority(e.target.value)}>
              { createDropDown(PRIORITY, priority) }
            </select>
            <select onChange={e => setStatus(e.target.value)}>
              { createDropDown(STATUS, status) }
            </select>
        </div>
        <div className={`${namespace}__input--textarea`}>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <Button variant="primary" onClick={handleSubmit} disabled={title ? '' : 'disabled'}>
          Crear tarea
        </Button>
      </Card.Body>
    </Card>
  )
}

FormTodo.propTypes = {
  handleAddItem: func.isRequired
}

export default FormTodo
