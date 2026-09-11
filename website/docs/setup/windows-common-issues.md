---
id: windows-common-issues
title: Windows Common Issues
sidebar_label: Windows Common Issues
sidebar_position: 41
---

# Windows Common Issues

## `npm` is not recognized after installing Node

The PATH change applies only to new terminals. Close every terminal window and open a new one.

## Script execution is disabled

PowerShell blocks `npm.ps1` under the default policy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Every file shows as modified right after cloning

Git converted line endings on checkout. Fix the setting, then re-clone:

```powershell
git config --global core.autocrlf input
```

## `ENAMETOOLONG` or path length errors during install

Enable long paths, then reinstall:

```powershell
git config --system core.longpaths true
```

Cloning closer to the drive root also avoids this.

## `EPERM` or locked files during `npm install`

Real-time antivirus scanning of `node_modules` is the usual cause. Exclude the project
directory from active scanning, delete `node_modules`, and reinstall.

## Port 3000 already in use

```powershell
netstat -ano | findstr :3000
taskkill /PID <pid> /F
```
