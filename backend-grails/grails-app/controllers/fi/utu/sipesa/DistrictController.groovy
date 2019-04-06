package fi.utu.sipesa


import grails.rest.*
import grails.converters.*

class DistrictController extends RestfulController {
    static responseFormats = ['json', 'xml']
    DistrictController() {
        super(District)
    }
}
