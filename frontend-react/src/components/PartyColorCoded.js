import React from 'react'
import Button from 'react-bootstrap/Button'

const PartyColorCoded = ({parties, id}) => {
    const party = parties.find(p => p.id === id)
    
    if(party) {
        // Vihr. => vihr
        const variant = party.tag.toLowerCase().replace(".", "")
        return (
            <Button variant={variant} size="sm">{party.name}</Button>
        )
    }
    return null
}

export default PartyColorCoded