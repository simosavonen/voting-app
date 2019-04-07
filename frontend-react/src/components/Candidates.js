import React from 'react'
import Table from 'react-bootstrap/Table'
import PartyColorCoded from './PartyColorCoded'

const Candidate = ({candidate, parties}) => {
    return (
        <tr>
            <td>{candidate.name}</td>
            <td>{candidate.number}</td>
            <td>
                <PartyColorCoded 
                    parties={parties} 
                    id={candidate.party.id} 
                />
            </td>
            <td>äänestä | muokkaa | poista</td>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </Table>
    )
}

export default Candidates