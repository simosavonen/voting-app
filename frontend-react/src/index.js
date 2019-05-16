import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import candidateService from './services/candidates'
import partyService from './services/parties'
import districtService from './services/districts'
import Navigation from './components/Navigation'
import CandidateList from './components/CandidateList'
import CandidateForm from './components/CandidateForm'

import 'bootstrap/dist/css/bootstrap.css'
import './components/PartyColors.css'

import Container from 'react-bootstrap/Container'

const App = () => {
  const [candidates, setCandidates] = useState([])
  const [parties, setParties] = useState([])
  const [districts, setDistricts] = useState([])

  useEffect(() => {
    candidateService
      .getAll()
      .then(response => {
        setCandidates(response.data)
      })
  }, [])

  useEffect(() => {
    partyService
      .getAll()
      .then(response => {
        setParties(response.data)
      })
  }, [])

  useEffect(() => {
    districtService
      .getAll()
      .then(response => {
        setDistricts(response.data)
      })
  }, [])

  const addCandidate = (candidate) => {
    candidateService
      .create(candidate)
      .then(response => {
        setCandidates(candidates.concat(response.data))
      })
      .catch(error => console.log('ehdokkaan lisäys epäonnistui', error))
  }


  return (
    <Container>
      <Router>
        <Navigation />
        <Route exact path='/' render={() =>
          <CandidateList
            candidates={candidates}
            parties={parties}
            districts={districts}
          />
        } />
        <Route exact path='/addcandidate' render={() =>
          <CandidateForm parties={parties} districts={districts} addCandidate={addCandidate} />
        } />
        <Route exact path='/register' render={() => 'Rekisteröidy'} />
        <Route exact path='/login' render={() => 'Kirjaudu sisään'} />
      </Router>
    </Container>
  )
}


ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));


