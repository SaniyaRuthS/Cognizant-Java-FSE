JWT Authentication Hands-on

Run:
mvn spring-boot:run

Request:
curl -u user:pwd http://localhost:8090/authenticate

Response:
{"token":"<jwt-token>"}

Username: user
Password: pwd
