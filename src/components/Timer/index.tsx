import { Button } from '../Button';
import { Clock } from './Clock';
import { ITask } from '../../types/task';
import style from './timer.module.scss';
import { useEffect, useState } from 'react';
import { timeForSeconds } from '../../common/utils/time';

interface TimerProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export function Timer({ selected, finishTask }: TimerProps) {
  const [time, setTime] = useState<number>();

  function regressive(counter = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o Cronometro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}
