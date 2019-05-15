import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import candidateService from './services/candidates'
import partyService from './services/parties'
import Navigation from './components/Navigation'
import CandidateList from './components/CandidateList'

import 'bootstrap/dist/css/bootstrap.css'
import './components/PartyColors.css'

import Container from 'react-bootstrap/Container'

const App = () => {
    const [candidates, setCandidates] = useState([])
    const [parties, setParties] = useState([])


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



    return (
        <Container>
            <Navigation />
            <CandidateList
                candidates={candidates}
                parties={parties}
            />
        </Container>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


