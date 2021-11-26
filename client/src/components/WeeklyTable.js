import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import api from "../connection/connect";

const WeeklyTable = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    api
      .get("/week")
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
    <div>
      <div className="title-content">
        <h2>Weekly Statictics</h2>
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
                <Switch checked={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTable;
