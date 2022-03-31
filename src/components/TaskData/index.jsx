import React from 'react'
import { shape, string, func } from 'prop-types'

import { STATUS, PRIORITY } from '../../utils/constants'
import { createDropDown } from '../../utils/utils'

const namespace = 'taskdata'

const TaskData = ({
  data: {
    id,
    title,
    priority,
    status,
    description
  },
  onChangeHandler,
}) => {
  return (
    <div className={`${namespace}`}>
      <div className={`${namespace}__info`}>
        <div>
          <p>
            <span>Prioridad:</span>
            <select onChange={(event) => onChangeHandler(event, id, 'priority')}>
              { createDropDown(PRIORITY, priority) }
            </select>
          </p>
        </div>
        <div>
          <p>
            <span>Estado:</span>
            <select onChange={(event) => onChangeHandler(event, id, 'status')}>
            { createDropDown(STATUS, status) }
            </select>
          </p>
        </div>
      </div>
      <h2 className={`${namespace}__title`}>#{id} {title}</h2>
      <p>Descripcion<br />{description}</p>
    </div>
  )
}

TaskData.propTypes = {
  data: shape({
    title: string.isRequired,
    priority: string.isRequired,
    status: string.isRequired,
    description: string.isRequired
  }).isRequired,
  onChangeHandler: func.isRequired,
}

export default TaskData
