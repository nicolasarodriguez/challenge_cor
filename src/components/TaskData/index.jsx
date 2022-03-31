import React from 'react'
import { shape, string } from 'prop-types'

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
  }
}) => {
  return (
    <div className={`${namespace}`}>
      <div className={`${namespace}__info`}>
        <div>
          <p>
            <span>Prioridad:</span>
            <select>
              { createDropDown(PRIORITY, priority) }
            </select>
          </p>
        </div>
        <div>
          <p>
            <span>Estado:</span>
            <select>
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
  }).isRequired
}

export default TaskData
