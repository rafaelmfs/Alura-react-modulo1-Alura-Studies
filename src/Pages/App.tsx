import { useState } from 'react';

import { ITask } from '../types/task';
import style from './App.module.scss';

import { Timer } from '../components/Timer';
import { Form } from '../components/Form';
import { List } from '../components/List';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((prevProps) =>
      prevProps.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      })),
    );
  }

  function removeTask(taskSelected: ITask) {
    const tasksList = tasks.filter((task) => {
      if (task.id !== taskSelected.id) return task;
    });

    setTasks(tasksList);
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((prevProps) =>
        prevProps.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        }),
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} removeTask={removeTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
