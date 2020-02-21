import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Calendar from './Calendar/Calendar'

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosWithAuth().get('/api/events');
        // console.log('data', data.events.items);
        setEvents(data.events.items);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  useEffect(() => {
    if (events) console.log('events', events);
  }, [events]);

  return (
    <div>
      <h1>Events</h1>
      <div>
        <Calendar events={events} />
      </div>
    </div>
  );
};

export default Events;

