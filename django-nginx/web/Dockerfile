# --- Base Stage ---
FROM python:3.11-slim-bookworm AS base

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1     PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN sed -i 's/$//g' entrypoint.sh entrypoint.prod.sh &&     chmod +x entrypoint.sh entrypoint.prod.sh

EXPOSE 5000

# --- Development Stage ---
FROM base AS dev
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]

# --- Production Stage ---
FROM base AS prod
RUN addgroup --system app && adduser --system --group app &&     chown -R app:app /app
USER app
ENTRYPOINT ["/bin/sh", "/app/entrypoint.prod.sh"]
