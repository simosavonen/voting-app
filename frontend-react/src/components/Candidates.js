import React from 'react'
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'
import PartyColorCoded from './PartyColorCoded'

const Candidate = ({candidate, parties, toggleHandler, visibleDetails}) => {
    
    return (
        <>
        <tr onClick={() => toggleHandler(candidate)}>
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
        <CandidateDetails             
            visibleDetails={visibleDetails} 
            candidate={candidate} 
        /> 
        </>
    )
}

const CandidateDetails = ({visibleDetails, candidate}) => {
    if(visibleDetails.includes(candidate.id)) {
        return (
        <tr>
            <td colSpan="4">
            <Media>
                <img 
                    width={150}
                    height={150}
                    className="mr-3"
                    src="https://via.placeholder.com/150" 
                    alt={candidate.name}
                />
                <Media.Body>
                    <h5>{candidate.name}</h5>
                    <ul>
                        <li>Ammatti: {candidate.profession}</li>
                        <li>Ikä: {candidate.age}</li>
                        <li>Koulutus: {candidate.education}</li>
                        <li>Asuinkunta: {candidate.residency}</li>
                    </ul>
                </Media.Body>
            </Media>
            </td>
        </tr>
        )
    }
    return null
}

const Candidates = (props) => {

    const rows = () => props.candidates.map(candidate => 
         <Candidate 
            key={candidate.number}
            candidate={candidate}
            parties={props.parties}
            visibleDetails={props.visibleDetails}            
            toggleHandler={props.toggleHandler}
         />

    )

    return (
        <Table bordered hover>
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