import { ITask } from '../../../types/task';
import style from './item.module.scss';

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void;
  removeTask: (taskSelected: ITask) => void;
}

export function Item({ task, time, selected, completed, id, selectTask, removeTask }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <li
        className={`${style.item} ${selected ? style.itemSelected : ''} ${completed ? style.itemCompleted : ''}`}
        onClick={() => !completed && selectTask({ task, time, selected, completed, id })}
      >
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && <span className={style.completed} aria-label="tarefa competada"></span>}
      </li>
      <span className={style.remove} onClick={() => removeTask({ task, time, selected, completed, id })}>
        X
      </span>
    </div>
  );
}
