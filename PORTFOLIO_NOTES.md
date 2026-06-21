# Portfolio Notes

## Resume/LinkedIn Summary

Built a Docker showcase portfolio containing multiple containerized application patterns, including Django behind Nginx load balancing, a Django/React/PostgreSQL chat application, and a MERN stack application with MongoDB. Improved Dockerfiles, Docker Compose files, environment-based configuration, health checks, README documentation, and GitHub Actions validation to demonstrate practical DevOps containerization skills.

## Interview Explanation

This project shows my hands-on understanding of Docker and Compose across different application stacks. I started with a simple Django service behind Nginx to explain container networking and reverse proxy/load balancing, then added full-stack examples using Django/React/PostgreSQL and MERN/MongoDB to show how frontend, backend, and database services communicate through dedicated Docker networks.

From a DevOps point of view, I improved the project by cleaning Dockerfiles, separating development and production build targets, using environment-based configuration, adding non-root runtime users where suitable, adding health checks, improving README runbooks, and adding a basic GitHub Actions workflow for validation. This makes the repository easier to run, easier to explain, and stronger as a GitHub portfolio project.

## Career Progression Story

1. `django-nginx` shows foundation-level Docker skills: containers, ports, Nginx, and service discovery.
2. `django-react-chat` shows intermediate full-stack container orchestration: frontend, backend, database, auth, and WebSocket-ready backend design.
3. `mern-stack` shows practical app modernization: Node API, React UI, MongoDB persistence, health checks, and production Nginx hosting.
4. The root CI workflow and documentation show professional GitHub presentation and basic DevOps quality checks.

## What to say in interviews

I used Docker Compose to define each application as multiple services instead of running everything manually. For example, in the MERN stack project, the React frontend, Express backend, and MongoDB database are isolated into separate containers and connected through Docker networks. I also added environment-based configuration and health endpoints so the project looks closer to real-world deployment practices.
