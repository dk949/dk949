#!/bin/sh

IFS='
'
this_dir="$(realpath "$(dirname "$0")")"
for pic in $(jq 'keys[] as $k | "\($k),\(.[$k] | .img)"' "$this_dir/../list.json" -r); do
    link="$(echo "$pic" | cut -d',' -f 2)"
    [ "$link" = 'null' ] && continue
    name="$this_dir/$(echo "$pic" | cut -d',' -f 1).$(basename "$link" | cut -d'.' -f 2)"
    [ -f "$name" ] && continue
    echo "Downloading $link"
    curl -sL "$link" -o "$name" &
done

wait
