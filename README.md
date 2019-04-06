# voting-app

Recreate the Vincit example, using different frameworks for the REST api and frontend.

## backend-grails
Steps taken to create the REST api
1. install grails https://grails.org 
2. create a new app using profile rest-api
    - `grails create-app fi.utu.sipesa.backend-grails -profile rest-api`
3. enter the interactive grails console `grails`
4. make domain classes for Candidate, Party and District
    - `create-domain-class fi.utu.sipesa.Candidate`
    - `create-domain-class fi.utu.sipesa.Party`
    - `create-domain-class fi.utu.sipesa.District`
5. write definitions for the created domain classes
6. write dummy data into `grails-app/init/fi/utu/sipesa/BootStrap.groovy`
7. generate REST controllers for the 3 domain classes
    - `create-restful-controller fi.utu.sipesa.Candidate`
    - `create-restful-controller fi.utu.sipesa.Party`
    - `create-restful-controller fi.utu.sipesa.District`
8. start the app `run-app`
9. the REST api will respond at
    - http://localhost:8080/candidate
    - http://localhost:8080/party
    - http://localhost:8080/district
