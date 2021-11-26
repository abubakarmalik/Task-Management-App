import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import Navbar from "./Navbar";
import api from "../connection/connect";
const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    const { title, date, description } = task;
    if (title && date && description) {
      api.post("/addtask", task).then((res) => {
        alert(res.data.message);
        console.log(res);
        reset();
      });
    } else {
      alert("invalid input");
    }
  };
  const reset = () => {
    setTask({
      title: "",
      date: "",
      description: "",
    });
  };
  const [todayDate, setTodayDate] = useState("");
  useEffect(() => {
    const getDate = () => {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      const today = year + "-" + month + "-" + day;
      return today;
    };
    setTodayDate(getDate);
  }, []);

  return (
    <>
      <Navbar />
      <section className="cardsec">
        <div className="login-inner gap-0">
          <div className="logincard">
            <div className="cardbody">
              <h1>Add Your Task for Future</h1>
              <form id="loginForm" className="mt-2">
                <p className="text-scarlet"></p>
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    className="form-control  input-md"
                    id="titlr"
                    name="title"
                    type="text"
                    placeholder="Enter Title"
                    value={task.title}
                    onChange={handleChange}
                  />
                  <i className="fa fa-check"></i>
                </div>
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="form-control form-control-sm"
                    placeholder="Select date"
                    min={todayDate}
                    name="date"
                    value={task.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    className="form-control input-md"
                    value={task.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="actionbtns d-grid">
                  <button
                    className="btn btn-primary shadow-none"
                    type="submit"
                    onClick={addTask}
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTask;
