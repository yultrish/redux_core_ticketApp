import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Tickets from "./tickets";
import Tickets from "./tickets";
// import Ticket from "./ticket";
import { v4 as uuidv4 } from "uuid";
import { ADD_TICKETS } from "./Redux/actions/ticketActions";
import { useDispatch, useSelector } from "react-redux";
import { addTicketRequest } from "./Redux/store/thunk";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tickets.tickets);
  console.log(data);
  // const [count, setCount] = useState(0)

  const createTicket = (e) => {
    e.preventDefault();
    const ticket = {
      // id: uuidv4(),
      title,
      desc,
      // workedOn: false,
    };
    dispatch(addTicketRequest(ticket));
    setTitle("");
    setDesc("");
  };


  



  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
    <Tickets/>
      <form
        style={{
          border: "2px solid aliceblue",
          width: "60%",
          height: "50vh",
          padding: "2rem",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        onSubmit={createTicket}
      >
        <div
          className="title"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="title" style={{ textAlign: "left" }}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: "2rem", padding: "0.5rem 0", border:"2px solid black", borderRadius: "7px" }}
          />
        </div>
        <div
          className="description"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="" style={{ textAlign: "left" }}>
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="5"
            rows="5"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{border:"2px solid black", borderRadius: "7px"}}
          ></textarea>
          {/* <br /><br /> */}
          {/* <input type="text" name="description" /> */}
        </div>
          <button type="submit" style={{marginTop: "2rem", backgroundColor: "#666a99aa"}}>Submit</button>
      
      </form>
      {/* <Ticket /> */}
    </>
  );
}

export default App;
