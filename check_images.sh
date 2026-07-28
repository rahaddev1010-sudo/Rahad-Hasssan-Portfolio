#!/bin/bash
grep -o 'https://images.unsplash.com/[^"]*' src/data.ts | while read url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$code $url"
done
