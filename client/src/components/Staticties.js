import React from "react";
import Navbar from "./Navbar";
import { Tabs } from "antd";
import WeeklyTable from "./WeeklyTable";
import MonthlyTable from "./MonthlyTable";

const { TabPane } = Tabs;

const Staticties = () => {
  return (
    <div>
      <Navbar />
      <div className="tab-coustom">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Weekly" key="1">
            <WeeklyTable />
          </TabPane>
          <TabPane tab="Monthly" key="2">
            <MonthlyTable />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Staticties;
