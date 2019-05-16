import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

let CandidateForm = (props) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [age, setAge] = useState('')
  const [residency, setResidency] = useState('')
  const [picture, setPicture] = useState('https://via.placeholder.com/150')
  const [profession, setProfession] = useState('')
  const [education, setEducation] = useState('')
  const [party, setParty] = useState('')
  const [district, setDistrict] = useState('')

  const kuntaData = require('./kuntaData.json') // '123 Kunta'

  const submit = (event) => {
    event.preventDefault()

    const newCandidate = {
      name, number, age, residency, picture, profession, education, party, district
    }

    props.addCandidate(newCandidate)
    props.history.push('/')
  }

  return (
    <Row className='mt-3'>
      <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} >
        <Card>
          <Card.Header>Lisää ehdokas</Card.Header>
          <Card.Body>
            <Form onSubmit={submit}>
              <Form.Group as={Row} controlId='formGridName'>
                <Form.Label column lg={3} className='text-lg-right'>Ehdokkaan nimi</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type='text'
                    placeholder='nimi'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formGridNumber">
                <Form.Label column lg={3} className='text-lg-right'>Ehdokasnumero</Form.Label>
                <Col lg={4}>
                  <Form.Control type="number" placeholder="numero"
                    value={number} onChange={({ target }) => setNumber(target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formGridAge">
                <Form.Label column lg={3} className='text-lg-right'>Ikä</Form.Label>
                <Col lg={4}>
                  <Form.Control type="number" placeholder="ikä"
                    value={age} onChange={({ target }) => setAge(target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="fromGridParty">
                <Form.Label column lg={3} className='text-lg-right'>Puolue</Form.Label>
                <Col lg={9}>
                  <Form.Control as="select"
                    value={party}
                    onChange={({ target }) => setParty(target.value)}>
                    <option value='' disabled hidden>Valitse puolue</option>
                    {props.parties.map(party =>
                      <option key={party.id} value={party.id}>{party.name}</option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="fromGridDistrict">
                <Form.Label column lg={3} className='text-lg-right'>Vaalipiiri</Form.Label>
                <Col lg={9}>
                  <Form.Control as="select"
                    value={district}
                    onChange={({ target }) => setDistrict(target.value)}>
                    <option value='' disabled hidden>Valitse vaalipiiri</option>
                    {props.districts.map(district =>
                      <option key={district.id} value={district.id}>{district.name}</option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formGridResidency'>
                <Form.Label column lg={3} className='text-lg-right'>Asuinkunta</Form.Label>
                <Col lg={9}>
                  <Form.Control as="select"
                    value={residency}
                    onChange={({ target }) => setResidency(target.value)}>
                    <option value='' disabled hidden>Valitse asuinkunta</option>
                    {kuntaData.kunnat.map(kunta =>
                      <option key={kunta.substring(0, 3)} value={kunta.substring(4)}>{kunta.substring(4)}</option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formGridProfession'>
                <Form.Label column lg={3} className='text-lg-right'>Ammatti</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type='text'
                    placeholder='ammatti'
                    value={profession}
                    onChange={({ target }) => setProfession(target.value)}
                  />
                </Col>

              </Form.Group>

              <Form.Group as={Row} controlId='formGridEducation'>
                <Form.Label column lg={3} className='text-lg-right'>Koulutus</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type='text'
                    placeholder='koulutus'
                    value={education}
                    onChange={({ target }) => setEducation(target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formGridPicture'>
                <Form.Label column lg={3} className='text-lg-right'>Valokuva</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type='text'
                    placeholder='valokuva'
                    value={picture}
                    onChange={({ target }) => setPicture(target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formGridPicture'>
                <Col lg={3}></Col>
                <Col lg={9}>
                  <Button variant='primary' type='submit'>Lisää ehdokas</Button>
                </Col>
              </Form.Group>

            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default CandidateForm = withRouter(CandidateForm)