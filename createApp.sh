#!/usr/bin/env bash
if [[ $# -eq 0 ]] ; then
    echo 'You must provide a project directory name'
    exit 0
fi
echo Creating new project $1
rsync -av --progress . ../$1 --exclude node_modules --exclude functions/node_modules --exclude .git --exclude .idea --exclude dist --exclude createApp.sh --exclude .env.sample --exclude functions/.env.sample

cp ./.env.sample ../$1/.env
cp ./.env.sample ../$1/.env.dev

cp ./functions/.env.sample ../$1/functions/.env
cp ./functions/.env.sample ../$1/functions/.env.dev