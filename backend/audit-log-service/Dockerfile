# Dockerfile for AuditLogService
FROM openjdk:11-jre-slim
COPY target/AuditLogService-0.0.1-SNAPSHOT.jar AuditLogService.jar
ENTRYPOINT ["java", "-jar", "/AuditLogService.jar"]
