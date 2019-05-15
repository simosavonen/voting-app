import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const CandidateForm = (props) => {
  const [name, setName] = useState('')
  return (
    <Row className='mt-3'>
      <Col md={{ span: 6, offset: 3 }} >
        <Card>
          <Card.Header>Lisää ehdokas</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId='formGridName'>
                <Form.Label>Ehdokkaan nimi</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='nimi'
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridNumber">
                  <Form.Label>Ehdokasnumero</Form.Label>
                  <Form.Control type="number" placeholder="numero" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAge">
                  <Form.Label>Ikä</Form.Label>
                  <Form.Control type="number" placeholder="ikä" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="fromGridParty">
                <Form.Label>Puolue</Form.Label>
                <Form.Control as="select">
                  {props.parties.map(party =>
                    <option>{party.name}</option>
                  )}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="fromGridDistrict">
                <Form.Label>Vaalipiiri</Form.Label>
                <Form.Control as="select">
                  {props.districts.map(district =>
                    <option>{district.name}</option>
                  )}
                </Form.Control>
              </Form.Group>

            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default CandidateForm