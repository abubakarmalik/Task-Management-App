import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import api from "../connection/connect";
import { Switch } from "antd";

const Home = () => {
  const [task, setTask] = useState([]);
  const [toggle, setToggle] = useState(true);

  const toggler = (id) => {
    toggle ? setToggle(false) : setToggle(true);
    const toggledata = {
      id: id,
      togglestate: toggle,
    };
    console.log(toggledata);
    api
      .post("/updateState", toggledata)
      .then(alert("Stauts Updated, Please reroad page"));
  };

  useEffect(() => {
    api
      .get("/home")
      .then((response) => {
        const data = response.data;
        setTask(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="title-content">
        <h2>All Tasks</h2>
      </div>
      <table className="table table-striped mt-5 table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Detail</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item, i) => (
            <tr key={item._id}>
              <th scope="row">{i + 1}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>
                <Switch
                  checked={item.status}
                  onClick={() => toggler(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
