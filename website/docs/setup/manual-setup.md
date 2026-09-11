---
id: manual-setup
title: Manual Setup
sidebar_label: Manual Setup
sidebar_position: 12
---

# Manual Setup

Use this path when a package manager is unavailable or blocked by policy.

## Steps

1. Download the Node.js 20 LTS installer from the official distribution and install it.
2. Install Git from its official distribution.
3. Open a new terminal so PATH changes apply.
4. Confirm `node --version` reports v20 or later.
5. Clone the repository and run `npm install` inside `website/`.

## Behind a corporate proxy

npm needs the proxy configured explicitly:

```bash
npm config set proxy http://proxy.example.internal:8080
npm config set https-proxy http://proxy.example.internal:8080
```

## If a registry mirror is required

```bash
npm config set registry https://registry.example.internal/npm/
```

:::warning Placeholder values
The proxy and registry hosts above are examples. Replace them with the values your
environment actually uses; do not commit internal hostnames to a public repository.
:::
