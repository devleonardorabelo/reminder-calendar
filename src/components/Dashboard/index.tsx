import React, { useContext, useEffect, useState } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import ReminderContext from '../../contexts/reminder';
import { TReminder, TDashBoardProps } from '../../types';
import getMonthName from '../../utils/setNameMonth';
import { CircularButton } from '../Button';
import Modal from '../Modal';
import Reminder from '../Reminder';
import './styles.css';

const Dashboard = ({ selectedDay }: TDashBoardProps): JSX.Element => {
  const [selectedReminder, setSelectedReminder] = useState<TReminder>();

  const [showModal, setShowModal] = useState(false);
  const {
    remindersOfDay,
    reminders,
    loadRemindersOfDay,
    removeReminders,
  } = useContext(ReminderContext);

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
            {remindersOfDay.map((reminder) => (
              <Reminder
                reminder={reminder}
                onClick={() => {
                  setSelectedReminder(reminder);
                  setShowModal(true);
                }}
              />
            ))}
            <div className="calendarFooter">
              <div>
                <span>
                  Lembretes restantes:
                  <strong>{`  ${8 - remindersOfDay.length}`}</strong>
                </span>
              </div>
              <CircularButton
                onClick={() => removeReminders(remindersOfDay)}
                transparent
              >
                <FiTrash size={16} color="#777" />
              </CircularButton>
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
