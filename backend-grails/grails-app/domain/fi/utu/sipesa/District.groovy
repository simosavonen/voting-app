package fi.utu.sipesa

class District {

    static hasMany = [candidates: Candidate]

    String name

    static constraints = {
        name maxSize: 255
    }
}
