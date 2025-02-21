import Header from "@/CommonComponents/Header/Header";
import SubHeader from "@/CommonComponents/SubHeader/SubHeader";
import React from "react";
import StackBoard from "../StackBaord/StackBoard";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <div className="header">
        <Header />
      </div>
      <div className="sub-header">
        <SubHeader />
      </div>

      <div className="dashboard-content">
        <StackBoard />
      </div>
    </div>
  );
};

export default Dashboard;
