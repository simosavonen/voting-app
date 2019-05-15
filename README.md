# voting-app

Recreate the Vincit voting-app example, using React for the frontend.

## Instructions

Clicking on the candidate row will reveal further details.
The app is left unfinished, none of the frontend links work.

requirements:
- grails https://grails.org
- node.js https://nodejs.org/en/

Assuming the repo was cloned to `C:\voting-app`

backend:
- `C:\voting-app\backend-grails\grails`
- `run-app` 

frontend:
- `C:\voting-app\frontend-react\npm install`
- `C:\voting-app\frontend-react\npm start`
- open http://localhost:3000
- insert more candidates with the REST requests

Frontend with the 3 candidates inserted:
<img src="https://raw.githubusercontent.com/simosavonen/voting-app/master/frontend-react/img/frontend.PNG" alt="Screencap of the React Frontend" width="600" />

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
7. start the app `run-app`
8. the REST api will respond at
    - http://localhost:8080/candidate
    - http://localhost:8080/party
    - http://localhost:8080/district
