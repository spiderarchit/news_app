import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/navbar";
import News_component from "./components/news_component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class extends Component {
  pagesize = 15;
  render() {
    // write your javascript here

    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News_component
                  pagesize={this.pagesize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <News_component
                  key="Sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News_component
                  key="General"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News_component
                  key="Health"
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News_component
                  key="Science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News_component
                  key="sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News_component
                  key="technology"
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News_component
                  key="business"
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News_component
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
