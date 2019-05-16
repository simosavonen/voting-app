package fi.utu.sipesa

class BootStrap {

    def init = { servletContext ->
        def kesk = new Party(name: 'Suomen Keskusta', tag: 'Kesk.').save()
        def kok = new Party(name: 'Kansallinen Kokoomus', tag: 'Kok.').save()
        def sdp = new Party(name: 'Suomen Sosialidemokraattinen Puolue', tag: 'SDP').save()
        def sin = new Party(name: 'Sininen tulevaisuus', tag: 'Sin.').save()
        def ps = new Party(name: 'Perussuomalaiset', tag: 'PS').save()
        def vihr = new Party(name: 'Vihreä liitto', tag: 'Vihr.').save()
        def vas = new Party(name: 'Vasemmistoliitto', tag: 'Vas.').save()
        def rkp = new Party(name: 'Suomen ruotsalainen kansanpuolue', tag: 'RKP').save()
        def kd = new Party(name: 'Suomen Kristillisdemokraatit', tag: 'KD').save()

        def vp1 = new District(name: 'Helsingin vaalipiiri').save()
        def vp2 = new District(name: 'Uudenmaan vaalipiiri').save()
        def vp3 = new District(name: 'Varsinais-Suomen vaalipiiri').save()
        def vp4 = new District(name: 'Satakunnan vaalipiiri').save()
        def vp5 = new District(name: 'Ahvenanmaan maakunnan vaalipiiri').save()
        def vp6 = new District(name: 'Hämeen vaalipiiri').save()
        def vp7 = new District(name: 'Pirkanmaan vaalipiiri').save()
        def vp8 = new District(name: 'Kaakkois-Suomen vaalipiiri').save()
        def vp9 = new District(name: 'Savo-Karjalan vaalipiiri').save()
        def vp10 = new District(name: 'Vaasan vaalipiiri').save()
        def vp11 = new District(name: 'Keski-Suomen vaalipiiri').save()
        def vp12 = new District(name: 'Oulun vaalipiiri').save()
        def vp13 = new District(name: 'Lapin vaalipiiri').save()

        new Candidate(
            name: 'Ville Vihreä',
            number: 100,
            party: vihr,
            district: vp3,
            age: 40,
            profession: 'Koodari',
            residency: 'Kaarina',
            education: 'Ylioppilas',
            picture: 'https://via.placeholder.com/150'
        ).save()

    }
    def destroy = {
    }
}
