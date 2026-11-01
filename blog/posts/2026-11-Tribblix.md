---
layout: Post
title: Is Tribblix the best OS?
subtitle: secure desktop-oriented Operating Systems 
author: Even Becker
date: 2026-11-01
useHeaderImage: true
headerImage: /img/in-post/Linux/header.jpg
headerMask: rgb(1, 21, 9, .5)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
    - Linux
---



## Criteria when choosing an OS

Some people think that GhostBSD is the most secure desktop-oriented OS. However GhostBSD comes with tools blacklisted by Hyperbola, namely Gvfs, LightDM, rust and polkit. In addition, GhostBSD has ASLR weaknesses. AntiX-core with Linux kernel 5.10 might be a better choice. Indeed, this old LTS kernel has a very small attack surface and no rust. 

::: info
[Rust itself cannot be build from source](https://wiki.hyperbola.info/doku.php?id=en:philosophy:rust_issues), unless using mrustc on Gentoo or Guix. The binary provider could be malicious. The binary size is hundreds of MB, so it could be fucking malicious. Proprietary Intel microcode is an innocent tiny binary in comparison. Even proprietary atheros firmware is an innocent tiny binary in comparison. PureOS has become a non-sense project because it removes non-free firmware while keeping Rust. Even if Gentoo gurus can use mrustc, it applies to userspace, not kernelspace. The suspicious Rust binary is integrated in the Linux kernel 6.1 and the FreeBSD kernel. So it may sound crazy but Linux kernel 5.10 is safer than FreeBSD.  
:::

AntiX can mount removable devices with udevil or pmount, so it's Gvfs-free. However LTS will not last forever: In some years, kernel 5.10 will not get security patches anymore. Gentoo has already drop this kernel. As of writing, it's still available in Void Linux but it will be removed soon. So I look for other secure desktop-oriented Operating Systems. NetBSD and OpenBSD are secure but it's not easy to install and setup. 
MidnightBSD looks good. It has Ravenports integration but Ravenports don't provide the browsers I need: Librewolf or Waterfox. Tribblix may be the only OS that meets the criteria.  

 ## Tribblix strength

 ![Image](/img/in-post/small/Tribblix.png)

::: info
Tribblix has been essentially built from scratch, with its own build and packaging system.
It borrows some tools from OpenIndiana and illumos.  
:::

Tribblix has SMF init. It looks superior to BSD init and sysV init.
Tribblix can use pkgsrc to build librewolf.
