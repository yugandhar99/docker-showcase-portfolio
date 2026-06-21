# MERN Stack Todo App - Dockerized

This project demonstrates a containerized MERN stack application with a React frontend, Node/Express backend API, and MongoDB database.

## Architecture

```text
React Frontend :5000
     |
     v
Express API :5000 inside container / :5001 on host
     |
     v
MongoDB :27017
```

## Tech Stack

- React 17
- Node.js 18
- Express
- MongoDB
- Mongoose
- Nginx for production frontend hosting
- Docker Compose

## Run in Development Mode

```bash
docker compose up --build
```

Open:

```text
Frontend: http://localhost:5000
Backend health: http://localhost:5001/health
API: http://localhost:5001/api/
```

## Run in Production-style Mode

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Open:

```text
http://localhost
```

Stop:

```bash
docker compose down -v
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Backend health check |
| GET | `/api/` | Get all todo items |
| POST | `/api/todos` | Create a todo item |
| DELETE | `/api/todos` | Delete all todo items |
| GET | `/api/clear` | Legacy endpoint to clear todos |

Example create request:

```bash
curl -X POST http://localhost:5001/api/todos   -H "Content-Type: application/json"   -d '{"text":"Learn Docker Compose"}'
```

## DevOps Concepts Demonstrated

- Three-tier app containerization
- Docker Compose networking between frontend, backend, and database
- MongoDB persistent volume
- Production frontend build served through Nginx
- Backend health check endpoint
- Environment-driven backend configuration
- Non-root Node.js production container user

## Future Improvements

- Add unit tests for backend API
- Add React component tests
- Add JWT authentication
- Add CI image scanning with Trivy
- Add Kubernetes deployment manifests
