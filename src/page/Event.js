import React from "react";
import Layout from "../components/layout/Layout";
import EventImg from "../components/event/EventImg";
import EventList from "../components/event/EventList";

const Event = () => {
  return (
    <Layout>
      <EventImg />
      <EventList />
    </Layout>
  );
};

export default Event;
