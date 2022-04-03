import React from 'react'
import { array, func, string } from 'prop-types'

import Card from 'react-bootstrap/Card'

import TaskData from '../TaskData'
import EmptyState from '../EmptyState'

const namespace = 'ui-tasklist'

const TaskList = ({ list, setList, priorityFilter, statusFilter }) => {
  const onChangeHandler = (event, id, property) => {
    const { value } = event.target
    const objIndex = list.findIndex((obj => obj.id === id));
    list[objIndex][property] = value
    setList([...list])
  }

  const deleteTask = (id) => {
    const objIndex = list.findIndex((obj => obj.id === id));
    list.splice(objIndex, 1);
    setList([...list])
    
  }

  const todoItems = list.filter(item => (
    !((statusFilter !== 'all' && item.status !== statusFilter) ||
    (priorityFilter !== 'all' && item.priority !== priorityFilter))
  )).map(filteredItem => {
    return (
      <TaskData
        key={filteredItem.id}
        data={filteredItem}
        onChangeHandler={onChangeHandler}
        deleteTask={deleteTask}
      />
    )
  })

  const renderResult = () => {
    if (list.length > 0) {
      if (todoItems.length > 0) {
        return todoItems
      } else {
        return (<EmptyState text="No se encontro ningun resultado" image="no-results.jpg" />)
      }
    } else {
      return (<EmptyState text="No hay tareas cargadas" image="no-tasks.jpg" />)
    }
  }

  return (
    <Card className={`${namespace}`}>
      <Card.Body>
        {renderResult()}
      </Card.Body>
    </Card>
  )
}

TaskList.propTypes = {
  list: array.isRequired,
  setList: func.isRequired,
  priorityFilter: string.isRequired,
  statusFilter: string.isRequired
}

export default TaskList
