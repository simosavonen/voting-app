package fi.utu.sipesa


import grails.rest.*
import grails.converters.*

class PartyController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PartyController() {
        super(Party)
    }
}
