import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import candidateService from './services/candidates'
import partyService from './services/parties'
import Navigation from './components/Navigation'
import Candidates from './components/Candidates'

import 'bootstrap/dist/css/bootstrap.css'
import './components/PartyColors.css'

import Container from 'react-bootstrap/Container'

const App = () => {
    const [candidates, setCandidates] = useState([]) 
    const [parties, setParties] = useState([])
    const [visibleDetails, setVisibleDetails] = useState([]) 

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

    const toggleCandidateDetails = ({id}) => {
        if(visibleDetails.includes(id)) {
            const filtered = visibleDetails.filter(d => d !== id)
            setVisibleDetails(filtered)
        } else {
            const updated = visibleDetails.concat(id)
            setVisibleDetails(updated)
        }
    }  
    
    return (             
        <Container>
            <Navigation />
            <Candidates 
                candidates={candidates} 
                parties={parties} 
                visibleDetails={visibleDetails}
                toggleHandler={toggleCandidateDetails}
            />
        </Container>        
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


