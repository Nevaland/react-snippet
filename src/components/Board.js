import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// npm install react-dnd react-dnd-html5-backend
import update from 'immutability-helper'
// npm install immutability-helper

import Column from './Column';

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', status: 'todo', idx: 0 },
    { id: 2, text: 'Task 2', status: 'doing', idx: 0 },
    { id: 3, text: 'Task 3', status: 'done', idx: 0 },
    { id: 5, text: 'Task 5', status: 'done', idx: 2 },
    { id: 4, text: 'Task 4', status: 'done', idx: 1 },
  ]);
  
  const findTask = useCallback(
    (id) => {
      const task = tasks.filter((item) => item.id === id)[0]
      return {
        task: task,
      }
    },
    [tasks],
  )
  
  const moveTask = useCallback(
    (id, newStatus, to_idx) => {
      setTasks(
        (prevTasks) => {
          const { task } = findTask(id)
          task.idx = to_idx < task.idx || task.status !== newStatus ? to_idx - 0.5 : to_idx
          task.status = newStatus

          prevTasks = prevTasks.filter((_task) => _task.id !== task.id)
          prevTasks = [...prevTasks, task]

          let todoTasks = prevTasks.filter((_task) => _task.status === "todo");
          let doingTasks = prevTasks.filter((_task) => _task.status === "doing");
          let doneTasks = prevTasks.filter((_task) => _task.status === "done");

          todoTasks = todoTasks
          .sort((a, b) => a.idx - b.idx)
          .map((task, index) => ({ ...task, idx: index }))

          doingTasks = doingTasks
          .sort((a, b) => a.idx - b.idx)
          .map((task, index) => ({ ...task, idx: index }))

          doneTasks = doneTasks
          .sort((a, b) => a.idx - b.idx)
          .map((task, index) => ({ ...task, idx: index }))

          prevTasks = [...todoTasks, ...doingTasks, ...doneTasks]
          return prevTasks
        }
      )
    },
    [findTask, tasks, setTasks],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <Column 
          title="To Do" 
          tasks={tasks
            .filter((task) => task.status === 'todo')
            .sort((prev, next) => prev.idx - next.idx)
          } 
          status="todo"
          moveTask={moveTask}
          findTask={findTask} />
        <Column 
          title="Doing" 
          tasks={tasks
            .filter((task) => task.status === 'doing')
            .sort((prev, next) => prev.idx - next.idx)
          } 
          status="doing"
          moveTask={moveTask}
          findTask={findTask} />
        <Column 
          title="Done" 
          tasks={tasks
            .filter((task) => task.status === 'done')
            .sort((prev, next) => prev.idx - next.idx)
          } 
          status="done"
          moveTask={moveTask}
          findTask={findTask} />
      </div>
    </DndProvider>
  );
};

export default Board;