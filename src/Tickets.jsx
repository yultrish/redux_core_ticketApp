import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ticket from './Ticket';
import { fetchTickets } from './Redux/store/thunk';

const Tickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  console.log(tickets)

  useEffect(() => {
    // const fetchData = async () => {
       dispatch(fetchTickets());
    // };
  }, []);

  return (
    <>
   
    
      <div style={{ display: 'flex', margin: '4rem', flexFlow: 'row wrap', gap: '2rem', height: '50%' }}>
      {tickets ? (
    tickets.map((ticket) => (
      <Ticket key={ticket._id} ticket={ticket} />
    ))
  ) : (
    <h3>no</h3>
  )}

      </div>
    </>
  );
};

export default Tickets;
