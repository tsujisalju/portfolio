---
title: "Muwafaqah: Nextcloud Snap to AIO"
date: "2025-05-06"
author: "Cooper Baihaqi"
readtime: 30
---

[Prologue]

I started the Muwafaqah home server project around May of 2024 and with trial and error, it has began operation in June. Most of my family members have started using it as an alternative backup to their Google Drive and Photos by auto-uploading their photos to the server. In this report, I will be documenting my journey of migrating all the data to a new instance of Nextcloud that can better support new features. This is not really a thorough step-by-step guide for migration, but rather to share my experience and to look out for gotchas and pitfalls that you might want to pay attention to.

While the title says Nextcloud Snap to AIO, there is actually a much earlier attempt using NextcloudPi. It is a whole OS dedicated to running Nextcloud plus additional built-in tools for backup and the sorts. It was fine at first, but it started breaking down at one point when I tried upgrading to the latest release.

For some reason, the new release changed how it reads the BTRFS file system, which is the format I use for the external drive storage, and it simply won't recognize the drives anymore. My former self didn't know how to salvage the existing files, so I reformatted everything and opted to install Ubuntu Server and setup Nextcloud from there.

[Pre-migration]

It has been almost a year later, and now that actual data is being stored in the server, there is a lot more at stake if I were to make any changes to the system. At this point, the server is running the Snap version of Nextcloud, which contains all the components in a snap package that you can just install and run immediately.

This is fine for ease of installation, but there were many features that I couldn't implement such as image recognition and Nextcloud Office, given that its difficult for the containerized components to talk with the outside environment. All the people in forums and support tickets never bothered with addressing Snap-related issues and said to just don't use Nextcloud Snap, which is rather frustrating, because that means I made a wrong decision going with the Snap route.

I just had to live with the compromises while I was away for university, but now I'm back home for semester break, I have more time to figure out what to do.

[Migration]

Generally, here are the main tasks necessary for the migration from snap to AIO:

1: Back up everyone's data from the snap instance

2: Back up the database

3: Install Docker and setup the AIO instance

4: Recreate the users and copy over the backup data and database

Some of these tasks are easier said than done, which I will explain later in detail. Also, I should point out, given my limited resources, everything has to be done on the same machine. I don't have another Raspberry Pi lying around, so I am walking on a mine field and taking extra precaution to not ruin anything and keep things as redundant and isolated from one another as possible.

There were around 500 GB of user data as of the date of migration. The BTRFS external storage has a capacity of 4 TB, so it is enough to make a backup copy on the same location. I made a new backup folder just beside the nextcloud folder where the data lives and copied everything over. Rsync has been exceptional for this task, albeit taking several hours on USB 3.0 speeds. I also had to make sure the SSH connection didn't abruptly disconnect (which did happen frequently) or else I had to rerun the process.

Backing up the database is a lot more complicated. It appears that the snap instance uses MySQL as the database system, while the AIO uses PostgreSQL. Migrating the database also means having to convert the MySQL database in the snap instance to PostgreSQL, creating the dump SQL file which can then be used to recreate the database on the AIO instance. But seriously, having to do anything deeper with snap is just so finicky I wondered why I even bother with snap. It's only easy if you don't tinker with it. You can say skill issue however you like, but I really can't afford the extra trouble.

So I need to compromise. The migration guide does have the option to migrate only the user data. That means that existing user accounts will be recreated manually on a fresh database. As long as the user account names are the same, copying the backup to the new data folder will simply fill in the data folders associated with each user. Users will need to re-register their account and their files will be there when they sign in. However, since its a fresh database, all their personal settings will be reset to default, and they just have to set them up again manually. I am able to recover the email addresses for each user from the old instance, so as long as I recreate the users with these emails, I can resend the welcome email for them to re-activate their accounts.

At this point, the data has been backed up, so I just have to set up docker and run the Nextcloud AIO container. To prevent any potential conflicts, I stopped the snap instance. The docker container publishes a web interface for the initialization process, which shows its doing in detail, and what features and additional container that you want to enable. Once the initialization is complete, the new instance is now running. The /nextcloud data folder for the AIO instance will also be placed in the same external storage location, in a folder called aio. During this time I curiously stopped the containers and tried running the snap instance again, but it doesn't work anymore, so I suppose there's no going back now (good riddance).

Now it's time to migrate the files from the old instance. It will just be a matter of copying the contents of the backup folder to the aio folder, and provided that all the subfolder names are the same, it should just put everything in the right place. It's just going to take a horrendous amount of time to copy, and having to keep an eye on the blank terminal process just puts me on edge. Also, I noticed that there are two appdata folders that are unique to the old and new instance, so make sure to check the creation date to determine which one to delete. Moreover, make sure to change the file owner to www-data so Nextcloud can access the files. Once the migration is complete, restart the containers and scan all the files in the data folder to be indexed on the Nextcloud web interface.

[Post-migration]

While Docker is basically another containerized environment much like Snap, there are a lot more means to tinker with the container and allows more flexibility to adopt new features. For image recognition, there is a Nextcloud app called Recognize that runs some object and face recognition models using Tensorflow in a Node.js runtime. Therefore, you need the node executable to run it, which I didn't know how to install on the snap instance. The AIO container uses Alpine Linux as a base, and all you need to do is to run bash in the container and install the node package using the apk package manager. It's very intuitive. Furthermore, Nextcloud Office comes right off the bat with the AIO and I just need to tick a checkbox to install it, and also setup the allowed WOPI list in the Nextcloud config file.

There are some occasions where adding a specific feature like enabling hardware acceleration or specific PHP plugins requires having to delete the containers and re-run the container initialization command with extra environment variables. This felt a little bit risky at first but as it turns out, it kind of knows that the setup has already gone through the initial process and simply return to the main dashboard as if it never stopped. Furthermore, if for whatever reason the setup becomes broken, you can simply recover using the built-in backup solution before you removed the containers, which is very reassuring.

Now that all the doohickeys and doodads are running at maximum efficiency, I realize now that the Raspberry Pi 5 is working a lot harder than usual, at least during its first few days while it was cranking the image recognition on all the existing data. If I do anything as much as scrolling through files too fast it would simply get stuck and I had to reboot it. I allocated about 2 GB of swap file to ease the burden on the RAM a little and that at least helped alleviated the crashes.

And with that, the itch behind my back has finally been relieved and I'm very happy that the home server has now achieved a higher potential. Only thing left now is to remove what's left of the old instance and move forward with newfound confidence.
