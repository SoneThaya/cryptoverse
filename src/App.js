import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* <Route exact path="/">
                <Homepage />
              </Route> */}
              <Route path="" element={<Homepage />} />
              {/* <Route exact path="/exchanges">
                <Exchanges />
              </Route> */}
              <Route path="exchanges" element={<Exchanges />} />
              {/* <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route> */}
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              {/* <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route> */}
              <Route path="crypto/:coinId" element={<CryptoDetails />} />
              {/* <Route exact path="/news">
                <News />
              </Route> */}
              <Route path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <NavLink to="">Home</NavLink>
            <NavLink to="exchanges">Exchanges</NavLink>
            <NavLink to="news">News</NavLink>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
