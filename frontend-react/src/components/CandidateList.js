import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'
import PartyColorCoded from './PartyColorCoded'

const Candidate = ({ candidate, parties, districts, toggleHandler, visibleDetails }) => {
    const rowStyle = {
        cursor: 'pointer'
    }
    const district = districts.find(d => d.id === candidate.district.id)
    return (
        <>
            <tr style={rowStyle} onClick={() => toggleHandler(candidate)}>
                <td>{candidate.name}</td>
                <td>{candidate.number}</td>
                <td>
                    <PartyColorCoded
                        parties={parties}
                        id={candidate.party.id}
                    />
                </td>
                <td>{district && district.name}</td>
                <td>äänestä | muokkaa | poista</td>
            </tr>
            {visibleDetails.includes(candidate.id) &&
                <CandidateDetails candidate={candidate} />
            }
        </>
    )
}

const CandidateDetails = ({ candidate }) => {
    return (
        <tr>
            <td colSpan="5">
                <Media>
                    <img
                        width={150}
                        className="mr-3"
                        src={candidate.picture}
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

const CandidateList = ({ candidates, parties, districts }) => {
    const [visibleDetails, setVisibleDetails] = useState([])

    const toggleVisibility = ({ id }) => {
        if (visibleDetails.includes(id)) {
            const filtered = visibleDetails.filter(d => d !== id)
            setVisibleDetails(filtered)
        } else {
            const updated = visibleDetails.concat(id)
            setVisibleDetails(updated)
        }
    }

    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Nimi</th>
                    <th>Ehdokasnumero</th>
                    <th>Puolue</th>
                    <th>Vaalipiiri</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {candidates.map(candidate =>
                    <Candidate
                        key={candidate.number}
                        candidate={candidate}
                        parties={parties}
                        districts={districts}
                        visibleDetails={visibleDetails}
                        toggleHandler={toggleVisibility}
                    />
                )}
            </tbody>
        </Table>
    )
}

export default CandidateList