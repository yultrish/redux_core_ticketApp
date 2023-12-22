import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { DELETE_TICKET, UPDATE_TICKET } from "./Redux/actions/ticketActions";
import { deleteTicketRequest } from "./Redux/store/thunk";
import { updateTicketRequest } from "./Redux/store/thunk";
import { useDispatch } from "react-redux";

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();

  const deleteTicket = () => {
    console.log("Ticket ID:", ticket._id);
    dispatch(deleteTicketRequest(ticket._id));
    // window.location.reload(true)
  };

  const updateTicket = () => {
    console.log("Ticket ID:", ticket._id);
    dispatch(updateTicketRequest(ticket._id));
  };

  return (
    <>
      <div
        style={
          ticket.workedOn
            ? {
                backgroundColor: "red",
                border: "2px solid #ccc",
                width: "18vw",
                height: "15vh",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }
            : {
                border: "2px solid #ccc",
                width: "18vw",
                height: "15vh",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }
        }
      >
        <div>
          <h3>{ticket.title}</h3>
          <p>{ticket.desc}</p>
        </div>

        <div>
          <MdDelete onClick={() => dispatch(deleteTicketRequest(ticket._id))} />
          <FaEdit
            onClick={() => dispatch(updateTicketRequest(ticket._id))}
            style={
              ticket.workedOn
                ? { backgroundColor: "pink" }
                : { backgroundColor: "unset" }
            }
          />
        </div>
      </div>
    </>
  );
};

export default Ticket;
