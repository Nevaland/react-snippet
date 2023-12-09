import React from 'react';
import { useDrop } from 'react-dnd'

import { ItemTypes } from '../constants';
import Task from './Task';

const Column = ({ title, tasks, status, moveTask, findTask }) => {
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: ({ id: draggedId, status: draggedStatus, idx: draggedIdx }) => {
        if (draggedStatus !== status) {
          const { task } = findTask(draggedId)
          if (task.status === draggedStatus && task.idx === draggedIdx) {
            moveTask(draggedId, status, 0);
          }
        }
      },
    }),
    [findTask, moveTask],
  )
  return (
    <div
      ref={(node) => drop(node)}
      style={{
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '8px',
        marginRight: '8px',
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <h3>{title}</h3>
      {tasks.map((task) => (
        <Task key={task.id} {...task} moveTask={moveTask} findTask={findTask} />
      ))}
    </div>
  );
};

export default Column;