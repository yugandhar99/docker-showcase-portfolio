# Django React Chat - Dockerized Full Stack App

This project is a containerized full-stack chat application with a React frontend, Django REST/Channels backend, JWT authentication, and PostgreSQL database.

## Architecture

```text
React Client :5000
     |
     v
Django API / Channels Server :8000
     |
     v
PostgreSQL Database :5432
```

## Tech Stack

- React 17
- Django 3.2
- Django REST Framework
- Django Channels
- Simple JWT
- PostgreSQL 14
- Docker Compose
- Gunicorn production runtime

## Run Locally with Docker Compose

```bash
docker compose up --build
```

Open:

```text
Frontend: http://localhost:5000
Backend:  http://localhost:8000
```

Stop:

```bash
docker compose down -v
```

## Production-style Run

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

## Environment Files

The project includes sample local environment files for Docker Compose. For real production usage, replace the sample values and store secrets in a secure place such as GitHub Actions secrets, Jenkins credentials, AWS Secrets Manager, or Docker secrets.

## DevOps Concepts Demonstrated

- Full-stack application containerization
- Backend/database service dependency management
- PostgreSQL persistent volume
- Django migration automation during container startup
- Environment-driven Django settings
- Production Gunicorn runtime
- Separation of frontend, backend, and database networks

## Future Improvements

- Replace in-memory Channels layer with Redis
- Add Celery worker for async tasks
- Add Nginx reverse proxy for frontend/backend routing
- Add unit/integration tests
- Add image vulnerability scanning in CI
