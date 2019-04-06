package fi.utu.sipesa

import grails.rest.*

@Resource(uri='/district', readOnly=true, formats=['json', 'xml'])
class District {

    static hasMany = [candidates: Candidate]

    String name

    static constraints = {
        name maxSize: 255
    }
}
