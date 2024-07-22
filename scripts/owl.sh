#!/bin/sh

owl() {
  root_dir=$(
    cd "$(dirname "$0")" && pwd
  )
  script_name="${root_dir}/bun"
  $script_name "$@"
}

owl "$@"
