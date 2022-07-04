import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/topics">TOPICS</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topics" element={<Topics />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={"not found"}>not found</Route>
      </Routes>
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

reportWebVitals();