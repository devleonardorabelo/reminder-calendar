import React, { useContext, useEffect, useState } from 'react';
import { FiChevronRight, FiTrash } from 'react-icons/fi';
import ReminderContext from '../../contexts/reminder';
import { TModalProps, TReminder } from '../../types';
import { CircularButton, RectangularButton } from '../Button';
import './styles.css';

const Modal = ({
  reminder,
  show,
  currentDay,
  closeAction,
}: TModalProps): JSX.Element | null => {
  const { addReminder, removeReminder, editReminder } = useContext(
    ReminderContext,
  );

  const [hour, setHour] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [color, setColor] = useState<string>('red');
  const [done, setDone] = useState<boolean>(false);

  const addNewReminder = () => {
    if (currentDay) {
      addReminder({
        id: Math.random(),
        title,
        color,
        city,
        date: currentDay,
        hour,
      });
      closeAction();
    }
    resetForm();
  };

  const editCurrentReminder = () => {
    if (reminder) {
      editReminder({
        id: reminder.id,
        title,
        color,
        city,
        date: reminder.date,
        hour,
      });
      closeAction();
    }
    resetForm();
  };

  const removeCurrentReminder = () => {
    if (reminder) {
      removeReminder(reminder);
      closeAction();
      resetForm();
    }
    resetForm();
  };

  const resetForm = () => {
    setHour('');
    setTitle('');
    setCity('');
    setColor('');
  };

  useEffect(() => {
    if (reminder) {
      setHour(reminder.hour);
      setTitle(reminder.title);
      setCity(reminder.city);
      setColor(reminder.color);
    }
  }, [reminder]);

  useEffect(() => {
    if (hour.length === 5 && city.length >= 3 && title.length > 5)
      setDone(true);
    else setDone(false);
  }, [hour, city, title]);

  return (
    <div className={`lateralModal ${show ? 'active' : 'inactive'}`}>
      <div className="contentModal">
        <div className="space-between">
          <CircularButton
            onClick={() => {
              closeAction();
              resetForm();
            }}
          >
            <FiChevronRight size={16} color="#FFFFFF" />
          </CircularButton>
          {reminder && (
            <CircularButton onClick={removeCurrentReminder} transparent>
              <FiTrash size={16} color="#777" />
            </CircularButton>
          )}
        </div>
        <label htmlFor="time">
          <p>Horário</p>
          <input
            value={hour}
            type="time"
            id="time"
            step="1800"
            className="time"
            onChange={(e) => setHour(e.target.value)}
          />
        </label>
        <label htmlFor="title">
          <textarea
            value={title}
            name="title"
            className="eventTitle"
            id="title"
            maxLength={30}
            placeholder="Título do Evento"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="city">
          <p>Cidade</p>
          <input
            value={city}
            type="text"
            placeholder="Cidade"
            id="city"
            className="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <p>Etiqueta</p>

        <button
          className={`color red ${color === 'red' ? 'active' : ''}`}
          type="button"
          onClick={() => setColor('red')}
        >
          .
        </button>
        <button
          className={`color blue ${color === 'blue' ? 'active' : ''}`}
          type="button"
          onClick={() => setColor('blue')}
        >
          .
        </button>
        <button
          className={`color green ${color === 'green' ? 'active' : ''}`}
          type="button"
          onClick={() => setColor('green')}
        >
          .
        </button>
        <button
          className={`color yellow ${color === 'yellow' ? 'active' : ''}`}
          type="button"
          onClick={() => setColor('yellow')}
        >
          .
        </button>
        <div className="action-buttons">
          {reminder ? (
            <RectangularButton
              title="Salvar"
              onClick={() => editCurrentReminder()}
              disabled={!done}
            />
          ) : (
            <RectangularButton
              title="Adicionar"
              onClick={() => addNewReminder()}
              disabled={!done}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
