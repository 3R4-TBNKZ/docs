---
description: Does 3R4 support Windows Home edition?
icon: material/home-remove
---

# :material-home-remove: Does 3R4 support Windows Home edition?

**Although you can install 3R4 on Windows Home, we do not recommend it as some of 3R4' privacy, usability, and performance optimizations don't apply.**

3R4 uses group policies to tweak various parts of Windows that generally can't be done in regular Settings. However, many group policies on Windows Home do not work, such as disabling [**Automatic Driver Installation**](../getting-started/installation.md#driver-updates).

Additionally, Windows Home is missing valuable features, such as:[^1]

- Hyper-V
- BitLocker encryption
- Windows Subsystem for Linux
- Hosting Remote Desktop

!!! tip "You can always upgrade after installing 3R4"
    You can upgrade to Windows Pro or another supported edition by changing your Windows product key, without any requirement to re-apply 3R4.

[^1]: There are more differences [listed on Wikipedia](https://en.wikipedia.org/wiki/Windows_10_editions#Comparison_chart).
