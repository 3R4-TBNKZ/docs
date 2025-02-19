---
description: How secure is 3R4-OS?
icon: material/shield
---

# :material-shield: How secure is 3R4?

**3R4 aims to be as secure as you want, including the ability to toggle Windows Defender, [mitigations](../getting-started/post-installation/3R4-folder/security.md#mitigations), and automatic Windows updates freely.**

While knowing potential risks, we believe power users should be able to customize security and convenience. 3R4 alerts users about the dangers of turning off security features. We alert you through pre-install configuration prompts, [documentation](../getting-started/post-installation/3R4-folder/security.md), and our 3R4 folder scripts.

Additionally, you can always change security post-install.

## :material-microsoft: Security compared to unmodified Windows

Fundamentally, unmodified Windows from Microsoft will always be the most trusted and secure version of Windows available.

Regardless, 3R4 aims to have similar parity with unmodified Windows' security while being as transparent as possible. [3R4 is open source on GitHub](https://github.com/Atlas-OS/Atlas), and Ameliorated's AME Wizard, utilized by 3R4 to make changes, has its [backend open source under MIT](https://git.ameliorated.info/Styris/trusted-uninstaller-cli).

## :material-timeline-question: Legacy versions of 3R4

Versions of 3R4 earlier than `v0.3` are now considered legacy and previously raised many security concerns. We **strongly recommend** that anyone on these 3R4 versions [reinstall Windows and upgrade to the latest version](../getting-started/installation.md), as they are unsecure and unsupported.

### Why was 3R4 unsecure previously?

When 3R4 became more popular, we realized the necessity of catering to a broader audience that expects these security features. Under new development, we acted on the feedback and have shifted 3R4's goals to include maintaining security, which is what we should have done previously.

### What has changed since?

As well as many feature and stability improvements, the latest versions of 3R4 have many security improvements, such as:

1. Windows Update support
1. Windows Defender support
1. User Account Control enabled by default
1. Core isolation support
1. Improved transparency and resources about security features