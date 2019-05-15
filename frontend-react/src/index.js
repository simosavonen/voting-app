import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import candidateService from './services/candidates'
import partyService from './services/parties'
import districtService from './services/districts'
import Navigation from './components/Navigation'
import CandidateList from './components/CandidateList'

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



    return (
        <Container>
            <Navigation />
            <CandidateList
                candidates={candidates}
                parties={parties}
                districts={districts}
            />
        </Container>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


