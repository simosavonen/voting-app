package fi.utu.sipesa


import grails.rest.*
import grails.converters.*

class PartyController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PartyController() {
        super(Party)
    }

    // Deleting a party will cause foreign key errors
    // since deleting all the party's candidates is not OK.
    @Override
    def delete() {
        render status:403
    }
}
