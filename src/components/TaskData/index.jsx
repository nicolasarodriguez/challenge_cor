import React, { useState } from 'react'
import { shape, string, func } from 'prop-types'
import classnames from 'classnames'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { STATUS, PRIORITY } from '../../utils/constants'
import { createDropDown } from '../../utils/utils'

const namespace = 'ui-taskdata'

const TaskData = ({
  data: {
    id,
    title,
    priority,
    status,
    description
  },
  onChangeHandler,
  deleteTask,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const taskStyle = classnames(`${namespace}`, {
    [`${namespace}--high`]: (PRIORITY[priority] === PRIORITY.HIGH),
    [`${namespace}--medium`]: (PRIORITY[priority] === PRIORITY.MEDIUM),
    [`${namespace}--low`]: (PRIORITY[priority] === PRIORITY.LOW),
  });

  const onDeleteHandler = () => {
    deleteTask(id);
    handleClose();
  }

  const formatDescription = () => {
    return description.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

  return (
    <>
      <Card className={taskStyle}>
        <Card.Body>
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
            <div className={`${namespace}__button-container`}>
              <Button variant="danger" onClick={handleShow}>
                Eliminar
              </Button>
            </div>
          </div>
          <span className={`${namespace}__id`}>#{id}</span>
          <h2 className={`${namespace}__title`}>{title}</h2>
          <p>Descripcion<br />
            <span dangerouslySetInnerHTML={{ __html: formatDescription() }} />
          </p>
        </Card.Body>
      </Card>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro que desea eliminar la tarea?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={onDeleteHandler}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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
  deleteTask: func.isRequired,
}

export default TaskData
