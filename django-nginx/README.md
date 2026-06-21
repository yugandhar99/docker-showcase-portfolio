# Django + Nginx Load Balancer

This project demonstrates a simple Django application running as two separate containers behind an Nginx reverse proxy. It is useful for explaining Docker networking, service discovery, reverse proxying, and basic horizontal scaling.

## Architecture

```text
Browser
  |
  v
Nginx container :80
  |
  +--> web1 Django container :5000
  |
  +--> web2 Django container :5000
```

## Tech Stack

- Python 3.11
- Django 5
- Gunicorn for production runtime
- Nginx reverse proxy/load balancer
- Docker multi-stage build
- Docker Compose

## Run in Development Mode

```bash
docker compose up --build
```

Open:

```text
http://localhost
```

You can also directly test each backend instance:

```text
http://localhost:81
http://localhost:82
```

## Run in Production-style Mode

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Stop:

```bash
docker compose -f docker-compose.prod.yml down -v
```

## What to Notice

The Django response includes the container hostname. Refreshing through Nginx helps demonstrate requests moving between backend containers.

## DevOps Concepts Demonstrated

- Reverse proxy with Nginx
- Docker Compose service networking
- Multiple containers from one application image
- Development vs production Docker targets
- Environment-based Django settings
- Non-root user in production image
