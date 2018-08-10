if [[ $# -eq 0 ]] ; then
    echo 'You must provide a project directory name'
    exit 0
fi
echo Creating new project $1
rsync -av --progress . ../$1 --exclude node_modules --exclude functions/node_modules --exclude .git --exclude .idea --exclude dist --exclude createApp.sh