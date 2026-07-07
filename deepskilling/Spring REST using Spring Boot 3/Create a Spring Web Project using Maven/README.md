# Spring Learn - Hands On 1

## Build
mvn clean package

(If using Cognizant proxy)

mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456

## Run
mvn spring-boot:run

## SME Walkthrough
- src/main/java : Application source code
- src/main/resources : Configuration files
- src/test/java : Test classes
- SpringLearnApplication.java : Entry point with main()
- @SpringBootApplication combines:
  - @Configuration
  - @EnableAutoConfiguration
  - @ComponentScan
- pom.xml:
  - Parent: spring-boot-starter-parent
  - Dependencies:
    - spring-boot-starter-web
    - spring-boot-devtools
    - spring-boot-starter-test
- Eclipse Dependency Hierarchy:
  Right click pom.xml -> Maven -> Show Dependency Hierarchy
