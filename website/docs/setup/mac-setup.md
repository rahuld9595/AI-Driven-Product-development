---
id: mac-setup
title: Mac Setup
sidebar_label: Mac Setup
sidebar_position: 10
---

# Mac Setup

Setup path for macOS, including Apple silicon.

## Install the toolchain

```bash
# Homebrew, if not already present
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git node@20
brew link node@20
```

## Verify

```bash
node --version   # expect v20.x
npm --version
git --version
```

## Build the course site

```bash
git clone https://github.com/rahuld9595/AI-Driven-Product-development.git
cd AI-Driven-Product-development/website
npm install
npm start
```

If a step fails, see [Mac common issues](./mac-common-issues.md).
