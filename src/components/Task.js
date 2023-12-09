import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';

const Task = ({ id, text, status, idx, moveTask, findTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, text, status, idx, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: ({ id: draggedId, status: draggedStatus, idx: draggedIdx}) => {
        if (draggedStatus !== status || draggedIdx !== idx) {
          moveTask(draggedId, status, idx);
        }
      },
    }),
    [findTask, moveTask],
  )

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #ccc',
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: '#fff',
      }}
    >
      {text}
    </div>
  );
};

export default Task;