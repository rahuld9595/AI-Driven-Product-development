---
id: windows-setup
title: Windows Setup
sidebar_label: Windows Setup
sidebar_position: 11
---

# Windows Setup

Setup path for Windows 10 and 11. The commands below assume PowerShell.

## Install the toolchain

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
```

Close and reopen the terminal so the updated PATH is picked up.

## Verify

```powershell
node --version
npm --version
git --version
```

## Line endings

Configure Git before cloning so committed files keep LF endings:

```powershell
git config --global core.autocrlf input
```

## Build the course site

```powershell
git clone https://github.com/rahuld9595/AI-Driven-Product-development.git
cd AI-Driven-Product-development\website
npm install
npm start
```

If a step fails, see [Windows common issues](./windows-common-issues.md).
