import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>Voting-app React frontend</Navbar.Brand>
    </Navbar>
)

const App = () => (
    <div>
      <Navigation />
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'));


