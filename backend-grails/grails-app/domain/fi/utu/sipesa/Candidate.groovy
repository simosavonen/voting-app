package fi.utu.sipesa

import grails.rest.*

@Resource(uri='/candidate', formats=['json', 'xml'])
class Candidate {

    String name
    Integer number

    Party party
    District district

    Integer age
    String profession
    String residency
    String education
    String picture

    static constraints = {
        name minSize: 3, maxSize: 255
        number min: 1, unique: true
        profession maxSize: 255
        residency minSize: 2, maxSize: 50
        education minSize: 2, maxSize: 100
        age min: 18, max: 100
        picture nullable: true
    }
}
