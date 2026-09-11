---
id: mac-common-issues
title: Mac Common Issues
sidebar_label: Mac Common Issues
sidebar_position: 40
---

# Mac Common Issues

## `command not found: node` after installing

Homebrew installed it but did not link it, or the shell has not reloaded. Run:

```bash
brew link node@20
exec $SHELL -l
```

## Wrong Node version is active

A version manager may be shadowing Homebrew's install. Check which binary wins:

```bash
which -a node
node --version
```

Docusaurus 3 requires Node 18 or later; Node 16 fails during the build with an unhelpful error.

## `EACCES` during `npm install -g`

Do not fix this with `sudo`. Set a user-owned global prefix instead:

```bash
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
exec $SHELL -l
```

## Port 3000 already in use

```bash
lsof -ti:3000 | xargs kill
```

Or start the dev server elsewhere with `npm start -- --port 3001`.

## Build succeeds locally but fails in CI

macOS filesystems are case-insensitive by default; CI runners are not. A link to
`./Overview.md` for a file named `overview.md` works locally and fails in CI. Match the case exactly.
