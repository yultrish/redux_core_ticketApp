import { ADD_TICKETS, DELETE_TICKET, FETCH_TICKET, UPDATE_TICKET } from "../actions/ticketActions"

export const addTicketRequest = (ticket) => async (dispatch, getState) => {
    const body = JSON.stringify(ticket)

    try {
        const response = await fetch(`http://localhost:8000/createTicket`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body
        }) 
        const newTicket = await response.json()
        console.log(newTicket)
        dispatch({ type: ADD_TICKETS, payload: newTicket });
    } catch (error) {
      console.log(error)  
    }
}

export const fetchTickets = () => async (dispatch) => {
    try {
        const response =  await fetch('http://localhost:8000/tickets')
        const tickets = await response.json()
        console.log(tickets)
        dispatch({ type: FETCH_TICKET, payload: tickets });
    } catch (error) {
        console.log(error)
    }
}

export const deleteTicketRequest = (ticketId) => async (dispatch, getState) => {
    console.log("getState", getState())
    try {
    const response =  await fetch(`http://localhost:8000/delete/${ticketId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
      const ticketDeleted = await response.json()
      dispatch({ type: DELETE_TICKET, payload: ticketDeleted});
    } catch (error) {
      console.log(error);
    }
  };

  export const updateTicketRequest = (ticketId) => async (dispatch, getState) => {
    
    try {
      const response = await fetch(`http://localhost:8000/update/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const ticketUpdated = await response.json()

  
      dispatch({ type: UPDATE_TICKET, payload: ticketUpdated });
    } catch (error) {
      console.log(error);
    }
  };


  
