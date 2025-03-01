---
title: Installing Software
description: The recommended way to install software in 3R4-OS
---

# :material-download: Getting Started with Software

It is advisable to use package managers to install software. However, if you prefer not to use a package manager, you can install the executables directly from the internet via the official source, just as you would normally do.

In this instance, we will use `winget` which is the official package manager that comes pre-installed on all machines.

## :material-package-down: What is the Windows Package Manager?

WinGet is the default Windows package manager by Microsoft installed via the App Installer package on the Microsoft Store, with the software repository run by the community.

It is like apt-get and Homebrew on Linux and macOS respectively. It enables you to install software on your computer from the command line (so basically it's very cool).

## :material-shape-plus-outline: Installing Software with WinGet

You can install the software we have listed using WinGet by going to the `1. Software` folder and running the `Install Software.ps1` script in the 3R4 folder.

Furthermore, you can install software by typing `winget install <package name>` in the command line. You can find the names of the packages on the [winstall.app](https://winstall.app/) website.
