FROM python:3.9-slim-bookworm AS base

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1     PYTHONUNBUFFERED=1

RUN apt-get update     && apt-get install -y --no-install-recommends netcat-openbsd     && rm -rf /var/lib/apt/lists/*

FROM base AS dev
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY ./entrypoint.sh .
RUN sed -i 's/$//g' entrypoint.sh && chmod +x entrypoint.sh
COPY . .
EXPOSE 8000
ENTRYPOINT ["/app/entrypoint.sh"]

FROM base AS build
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --wheel-dir /app/wheels -r requirements.txt

FROM base AS prod
COPY --from=build /app/wheels /wheels
COPY --from=build /app/requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir /wheels/*
COPY ./entrypoint.prod.sh .
RUN sed -i 's/$//g' entrypoint.prod.sh && chmod +x entrypoint.prod.sh
COPY . .
RUN addgroup --system app && adduser --system --group app &&     chown -R app:app /app
USER app
EXPOSE 8000
ENTRYPOINT ["/app/entrypoint.prod.sh"]
