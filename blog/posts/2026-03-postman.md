---
layout: Post
title: Postman without Snap
subtitle: You don't need Snap/Flatpak to install Postman on Linux.
author: Even Becker
date: 2026-03-14
useHeaderImage: true
headerImage: /img/in-post/Linux/header.jpg
headerMask: rgb(14, 21, 5, .4)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Linux
---

Developers can use Postman to practice CRUD operations. For Suckless users, it's important to be able to install Postman without Snap/Flatpak.

::: info
Suckless users are minimalistic Linux/BSD/Haiku software users. The suckless.org community produce software with a focus on minimalism, simplicity and clarity.
:::

Go to the Postman app download page at [www.getpostman.com/apps](https://www.getpostman.com/apps). You can download a tar.gz for Linux 64 bit.
Extract the archive:

```bash
tar -xzf postman-linux-x64.tar.gz
```

Then move the extracted folder to the /opt directory. `/opt` is the folder intended for third party software that is not part of the core system.

<CodeGroup>
<CodeGroupItem title="doas" active>

```bash
doas mv Postman/ /opt/
doas ln -sf /opt/Postman/app/Postman /usr/bin
```

</CodeGroupItem>

<CodeGroupItem title="sudo">

```bash
sudo mv Postman/ /opt/
sudo ln -sf /opt/Postman/app/Postman /usr/bin
```

</CodeGroupItem>
</CodeGroup>
