import {
  ADD_TICKETS,
  DELETE_TICKET,
  UPDATE_TICKET,
  FETCH_TICKET,
} from "../actions/ticketActions";

const initialState = {
  tickets: [],
};

export const ticketReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_TICKET:
      return { tickets: action.payload };
    case ADD_TICKETS:
      return { tickets: [...state.tickets, action.payload] };
    case DELETE_TICKET:
      return {
        tickets: state.tickets.filter(
          (ticket) => ticket._id !== action.payload._id
        ),
      };
    case UPDATE_TICKET: {
      return {
        tickets: state.tickets.map((ticket) =>
          ticket._id === action.payload._id ? action.payload : ticket
        ),
      };
    }
    default:
      return state;
  }
};
