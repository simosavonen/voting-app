import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import candidateService from './services/candidates'
import partyService from './services/parties'

import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

const Navigation = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Voting-app React frontend</Navbar.Brand>
    </Navbar>
)

const Party = ({parties, id}) => {
    const party = parties.find(p => p.id === id)
    if(party) {
        return (
            <Badge variant="primary">{party.name}</Badge>
        )
    }
    return null
}

const Candidate = ({candidate, parties}) => {
    return (
        <tr>
            <td>{candidate.name}</td>
            <td>{candidate.number}</td>
            <td><Party parties={parties} id={candidate.party.id} /></td>
        </tr>
    )
}

const Candidates = (props) => {

    const rows = () => props.candidates.map(candidate =>
        <Candidate 
            key={candidate.number}
            candidate={candidate}
            parties={props.parties}
         />
    )

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nimi</th>
                    <th>Ehdokasnumero</th>
                    <th>Puolue</th>
                </tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </Table>
    )
}

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
            <Candidates candidates={candidates} parties={parties} />
        </Container>        
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


