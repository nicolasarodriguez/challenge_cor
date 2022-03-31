import React from 'react'

export const createDropDown = (options, value) => {
  return Object.keys(options).map(key => {
    if (value === key) {
      return <option key={key} value={key} selected>{options[key]}</option>
    }
    return <option key={key} value={key}>{options[key]}</option>
  })
}
