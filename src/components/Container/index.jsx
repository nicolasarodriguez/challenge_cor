import React, { useState } from 'react'

import TaskList from '../TaskList'
import Filters from '../Filters'
import FormTodo from '../FormTodo'

const Container = () => {
  const [list, setList] = useState([])
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const handleAddItem = addItem => {
    setList([...list, addItem])
  }

  return (
    <>
      <FormTodo
        handleAddItem={handleAddItem}
      />
      <Filters
        setPriorityFilter={setPriorityFilter}
        setStatusFilter={setStatusFilter}
      />
      <TaskList
        list={list}
        setList={setList}
        priorityFilter={priorityFilter}
        statusFilter={statusFilter}
      />
    </>
  )
}

export default Container
