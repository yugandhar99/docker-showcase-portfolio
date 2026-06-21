#!/bin/sh
set -e

if [ "$DATABASE" = "postgres" ]; then
  echo "Waiting for PostgreSQL..."
  while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
    sleep 0.2
  done
  echo "PostgreSQL started"
fi

python manage.py migrate --noinput
exec "$@"
