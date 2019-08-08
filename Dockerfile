FROM openjdk:8
MAINTAINER Radiant Digital
EXPOSE 8090
ADD target/*.jar /msa-gateway.jar
RUN bash -c 'touch /msa-gateway.jar'
CMD ["java","-Dspring.profiles.active=docker","-jar","/msa-gateway.jar"]