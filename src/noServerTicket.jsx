import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { DELETE_TICKET, UPDATE_TICKET } from './Redux/actions/ticketActions';
import { useDispatch } from 'react-redux';


const Ticket = ({tick}) => {
  const dispatch = useDispatch()

  const deleteTicket = (id) => {
    dispatch({ type: DELETE_TICKET, payload: { id } });
  };

  const updateTicket = (ticketId)=>{
    dispatch({type: UPDATE_TICKET, payload: ticketId})
  }
  return (
   <>
      <div  style={{border:"2px solid #ccc", width:"12vw", height:"10vh", borderRadius:"7px", display:"flex", justifyContent:"space-between", padding:"1rem", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <div>
        <h3 >{tick.title}</h3>
        <p >{tick.desc}</p>
      </div>
     
      <div>
      <MdDelete onClick={() => deleteTicket(tick.id)} />
      <FaEdit onClick={()=>updateTicket(tick.id)}/>
      </div>
  </div>
  
   </>
  )
}

export default Ticket