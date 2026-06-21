# Docker Showcase Portfolio

A practical Docker and Docker Compose portfolio with three containerized application patterns. The repository is organized to show career growth from basic container networking to full-stack multi-service deployments.

## Portfolio Progression

| Project | Focus Area | What it Demonstrates |
|---|---|---|
| `django-nginx` | Docker basics + reverse proxy | Two Django containers behind Nginx load balancing |
| `django-react-chat` | Full-stack app deployment | React frontend, Django REST/Channels backend, PostgreSQL, JWT auth, WebSocket-ready architecture |
| `mern-stack` | MERN containerization | React frontend, Node/Express API, MongoDB persistence, production Nginx static hosting |

## Why this repository is useful

This repo is designed for DevOps and Cloud portfolio use. It highlights:

- Multi-container Docker Compose application design
- Development and production Docker build targets
- Nginx reverse proxy and load balancing basics
- Database-backed application containers with persistent volumes
- Non-root container execution in production images where applicable
- Environment-based configuration instead of hardcoded runtime values
- GitHub-ready documentation and project-level runbooks

## Repository Structure

```text
.
├── django-nginx/          # Django app scaled behind Nginx load balancer
├── django-react-chat/     # React + Django REST/Channels + PostgreSQL chat app
├── mern-stack/            # React + Express + MongoDB todo app
├── .github/workflows/     # Basic CI validation for compose and source syntax
├── PORTFOLIO_NOTES.md     # Resume/LinkedIn-ready project explanation
└── README.md
```

## Prerequisites

- Docker Desktop or Docker Engine
- Docker Compose v2
- Git

Check versions:

```bash
docker --version
docker compose version
git --version
```

## Quick Start

Run any project separately from its own folder.

### 1. Django + Nginx Load Balancer

```bash
cd django-nginx
docker compose up --build
```

Open:

```text
http://localhost
```

Scale test URLs:

```text
http://localhost:81
http://localhost:82
```

Stop:

```bash
docker compose down -v
```

### 2. Django + React Chat Application

```bash
cd django-react-chat
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

### 3. MERN Stack Todo Application

```bash
cd mern-stack
docker compose up --build
```

Open:

```text
Frontend: http://localhost:5000
Backend health: http://localhost:5001/health
```

Stop:

```bash
docker compose down -v
```

## Production Compose Examples

Each project includes a production-style Compose file where applicable:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

For real production use, replace sample environment values, use Docker secrets or CI/CD secret storage, and place services behind a managed ingress/load balancer.

## GitHub Upload Notes

When uploading through the GitHub website, make sure hidden files are included, especially:

```text
.gitignore
.github/workflows/docker-validation.yml
*.sample
.dockerignore
```

Do not upload local dependency folders such as `node_modules`, Python virtual environments, logs, or database volume folders.

## Suggested Screenshots for GitHub

Add screenshots later under `docs/images/`:

- `docker compose ps` showing running containers
- Browser page for each app
- Nginx load balancing response from `django-nginx`
- API health endpoint response for MERN backend
- Docker Desktop container list

## Future Improvements

- Add Kubernetes manifests for each workload
- Add GitHub Actions image build and vulnerability scan stages
- Add Terraform examples for deploying on AWS ECS/EKS or Azure Container Apps/AKS
- Add Prometheus/Grafana monitoring stack
- Add centralized logging with ELK/OpenSearch
- Add CI/CD pipeline examples with Jenkins or GitHub Actions
