import { ITask } from '../../types/task';
import { Item } from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[];
  selectTask: (taskSelected: ITask) => void;
  removeTask: (taskSelected: ITask) => void;
}

export function List({ tasks, selectTask, removeTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} removeTask={removeTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
