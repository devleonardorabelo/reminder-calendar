import React, { useContext, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import ReminderContext from '../../contexts/reminder';
import { TReminder, TReminderProps } from '../../types';
import getMonthName from '../../utils/setNameMonth';
import { CircularButton } from '../Button';
import Modal from '../Modal';
import './styles.css';

const Dashboard = ({ selectedDay }: TReminderProps): JSX.Element => {
  const [selectedReminder, setSelectedReminder] = useState<TReminder>();

  const [showModal, setShowModal] = useState(false);
  const { remindersOfDay, reminders, loadRemindersOfDay } = useContext(
    ReminderContext,
  );

  useEffect(() => {
    if (selectedDay) loadRemindersOfDay(selectedDay);
  }, [selectedDay, reminders]);

  return (
    <>
      <div className="dashboard">
        <div className="space-between">
          <div>
            <h1>
              {selectedDay &&
                `${selectedDay.day} de ${getMonthName(selectedDay.month)} de ${
                  selectedDay.year
                }`}
            </h1>
          </div>
          <CircularButton
            onClick={() => {
              setSelectedReminder(undefined);
              setShowModal(true);
            }}
            disabled={remindersOfDay.length >= 8}
          >
            <FiPlus size={16} color="#FFFFFF" />
          </CircularButton>
        </div>

        <div className="calendar">
          <div className="col-12">
            {remindersOfDay.map((item) => {
              return (
                <button
                  key={item.id}
                  type="button"
                  className={item.color}
                  onClick={() => {
                    setSelectedReminder(item);
                    setShowModal(true);
                  }}
                >
                  <span className="time">{item.hour}</span>
                  {item.title}
                  <div className="tempPreview">
                    <span className="actualTemp">28º</span>
                    <span className="image">
                      <img
                        src="//cdn.weatherapi.com/weather/64x64/night/113.png"
                        alt=""
                      />
                    </span>
                    <span className="maxMinTemp">min 16º / max 28º</span>
                  </div>
                </button>
              );
            })}
            <div className="calendarFooter">
              <span>
                Lembretes restantes:
                <strong>{`  ${8 - remindersOfDay.length}`}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        reminder={selectedReminder}
        currentDay={selectedDay}
        show={showModal}
        closeAction={() => setShowModal(false)}
      />
    </>
  );
};

export default Dashboard;
