import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { format } from "date-fns";

import "./index.css";
import AppointmentItem from "../AppointmentItem";

const Appointments = () => {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [dateFilter, setDateFilter] = useState("");

  const ChangeTitleInput = (event) => setTitleInput(event.target.value);

  const ChangeDateInput = (event) => setDateInput(event.target.value);

  const toggleIsStarred = (id) => {
    setAppointmentsList((prevState) =>
      prevState.map((each) => {
        if (id === each.id) {
          return { ...each, isStarred: !each.isStarred };
        }
        return each;
      })
    );
  };

  const Filter = () => setIsFilterActive(!isFilterActive);

  const AddAppointment = (event) => {
    event.preventDefault();

    const trimmedInput = titleInput.trim();

    const formattedDate = dateInput
      ? format(new Date(dateInput), "dd MMMM yyyy, EEEE")
      : "";

    if (trimmedInput === "" || formattedDate === "") {
      alert("please fill all the details");
    } else {
      const newAppointment = {
        id: uniqueId(),
        title: trimmedInput,
        date: formattedDate,
        isStarred: false,
      };
      setAppointmentsList((prevState) => [...prevState, newAppointment]);
      setTitleInput("");
      setDateInput("");
    }
  };

  const handleChangeDateFilter = (event) => setDateFilter(event.target.value);

  const FilteredAppointmentsList = () => {
    if (isFilterActive) {
      return appointmentsList.filter((each) => each.isStarred === true);
    } else if (dateFilter){
        return appointmentsList.filter((each) => each.date === format(new Date(dateFilter), "dd MMMM yyyy, EEEE"));
    }
    return appointmentsList;
  };

  const filteredList = FilteredAppointmentsList();

  const filterClassName = isFilterActive ? "filter-filled" : "filter-empty";

  const clearFilter = () => {
    setDateFilter("");
    setIsFilterActive(!isFilterActive );
  }


  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="appointments-container">
          <div className="add-appointment-container">
            <form className="form" onSubmit={AddAppointment}>
              <h1 className="add-appointment-heading">Add Appointment</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={ChangeTitleInput}
                className="input"
                placeholder="Title"
              />
              <label htmlFor="date" className="label">
                DATE
              </label>
              <input
                type="date"
                id="date"
                value={dateInput}
                onChange={ChangeDateInput}
                className="input"
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr className="hr" />
          <div className="header-with-filter-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button onClick={clearFilter} className="add-button" type="button">Clear Filter</button>
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={handleChangeDateFilter}
              className="input date-filter-input"
              placeholder="Date"
            />
            <button
              type="button"
              className={`filter-style ${filterClassName}`} //${filterClassName}
              onClick={Filter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {filteredList.map((eachAppointment) => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleIsStarred={toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
