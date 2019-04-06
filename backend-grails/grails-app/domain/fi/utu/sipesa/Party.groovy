package fi.utu.sipesa

import grails.rest.*

@Resource(uri='/party', formats=['json', 'xml'])
class Party {

    static hasMany = [candidates: Candidate]

    String name
    String tag

    static constraints = {
        name maxSize: 255
        tag maxSize: 10
    }

}

