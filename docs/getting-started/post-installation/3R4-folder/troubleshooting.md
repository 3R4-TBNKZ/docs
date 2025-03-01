---
description: All troubleshooting scripts bundled in the 3R4OS playbook
icon: material/auto-fix
---

# :material-auto-fix: Troubleshooting

3R4 includes scripts for troubleshooting and resolving specific problems with your installation.

Each section here corresponds to a sub-folder in the `8. Troubleshooting` directory located in the 3R4 folder, which you can find in the Start Menu or on the desktop. Check out [our guide to restore the 3R4 folder](../../../general-faq/3R4-folder-missing.md) if you can't find it.

## :material-network-outline: Network

Here, you can either:

- Re-apply 3R4' network tweaks
- Reset networking back to the Windows defaults

3R4 applies a small number of network tweaks by default to potentially improve latency on your network card. These scripts can help you ensure that the 3R4 modifications aren't causing an issue and re-applying them in case you decide it's not the issue.

## :material-shield-lock-outline: Safe Mode

Safe mode starts Windows with only the necessities, such as fewer services, drivers, and no startup apps. If a problem does not occur in safe mode, the default settings or primary device drivers do not cause the problem.

Safe mode is not meant to be used constantly. It's only for doing tasks like:

- Narrowing down problems when troubleshooting
- Uninstalling and fixing drivers
- Getting rid of viruses

### Safe Mode

Safe Mode starts your computer in the default safe mode, which only has the drivers and files Windows needs to run. You will not be able to connect to the internet in this state.

### Safe Mode with Command Prompt

The Command Prompt (CMD) is available in all safe mode states, but "Safe Mode with Command Prompt" only gives you the Command Prompt. You will not have a user interface to help you navigate your system. Instead, you will have an admin-level command prompt.

### Safe Mode with Networking

Safe Mode with Networking functions similarly to safe mode without networking, but it also adds networking with network drivers and services you need to connect to the internet.

## :material-application-brackets: Fix Errors 2502 and 2503

When installing some apps, some users may experience errors 2502 and 2503. These errors are related to the `C:\Windows\Temp` folder permissions being incorrect, often mistakenly done by tweak tools.

This script resets those permissions to the Windows defaults, fixing the issue.

## :material-update: Repair Windows Components

This script will repair and replace any corrupt Windows components and system files. For general issues, this might be an easy fix. Note that no components of 3R4 are reverted by using this script.

## :material-cog-outline: Set Services to Defaults

This script goes through the [`8. Advanced Configuration\Services`](advanced-configuration.md#services) folder and sets the 3R4 defaults for everything. Additionally, you have the option to restore a service backup.

## :material-folder-information: Telemetry Components

This script adds or removes 3R4' NoTelemetry package, which eliminates specific telemetry components in Windows.

Removing the package restores the telemetry components, which can aid in troubleshooting. If resolving the issue involves removing the package, please report this as an issue on our [GitHub Issues](https://github.com/Atlas-OS/Atlas/issues).

3R4 retains policies that should turn off telemetry even after the package removal. However, most of these policies do not work on Windows Home edition.