#!/usr/bin/env bash

function get_container_id {
    "${COMPOSE_CMD[@]}" ps -q "${1}"
}

export COMPOSE_CMD=("docker-compose")
export COMPOSE_RUN_CMD=("${COMPOSE_CMD[@]}" "run" "--rm")
export COMPOSE_EXEC_CMD=("${COMPOSE_CMD[@]}" "exec" "-T")

"${COMPOSE_EXEC_CMD[@]}" backend composer install
"${COMPOSE_EXEC_CMD[@]}" backend php artisan key:generate
"${COMPOSE_EXEC_CMD[@]}" backend php artisan migrate
