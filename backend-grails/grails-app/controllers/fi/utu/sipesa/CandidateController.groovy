package fi.utu.sipesa


import grails.rest.*
import grails.converters.*

class CandidateController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CandidateController() {
        super(Candidate)
    }
}
