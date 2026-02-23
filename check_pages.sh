#!/bin/bash
pages=(
  "/"
  "/conference/international-legal-conference-2026"
  "/conference/international-legal-conference-2026/about"
  "/conference/international-legal-conference-2026/call-for-papers"
  "/conference/international-legal-conference-2026/speakers-schedule"
  "/conference/international-legal-conference-2026/registration"
  "/conference/international-legal-conference-2026/faq"
  "/blog"
  "/products/journals/publication"
  "/products/journals/subscription"
)

for page in "${pages[@]}"; do
  echo -n "Checking $page... "
  status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000$page)
  if [ "$status" -ne 200 ]; then
    echo "ERROR (Status: $status)"
    curl -s http://localhost:3000$page | grep -i "error" | head -n 2
  else
    echo "OK"
  fi
done
