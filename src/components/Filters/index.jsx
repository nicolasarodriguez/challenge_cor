import React from 'react'
import { func } from 'prop-types'

import { STATUS, PRIORITY } from '../../utils/constants'
import { createDropDown } from '../../utils/utils'

const namespace = 'ui-filters'

const Filters = ({ setPriorityFilter, setStatusFilter }) => {
  return (
    <div className={`${namespace}`}>
      <h3 className={`${namespace}__title`}>Filtar por:</h3>
      <div className={`${namespace}__box`}>
        <div>
          <span>Prioridad</span>
          <select onChange={e => setPriorityFilter(e.target.value)}>
              <option value='all'>Todos</option>
              { createDropDown(PRIORITY) }
          </select>
        </div>
        <div>
          <span>Estado</span>
          <select onChange={e => setStatusFilter(e.target.value)}>
              <option value='all'>Todos</option>
              { createDropDown(STATUS) }
          </select>
        </div>
      </div>
    </div>
  )
}

Filters.propTypes = {
  setPriorityFilter: func.isRequired,
  setStatusFilter: func.isRequired
}

export default Filters
