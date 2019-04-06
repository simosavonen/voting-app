package fi.utu.sipesa

class Party {

    static hasMany = [candidates: Candidate]

    String name
    String tag

    static constraints = {
        name maxSize: 255
        tag maxSize: 10
    }
}

