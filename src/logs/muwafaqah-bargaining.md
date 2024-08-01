---
title: "Muwafaqah: Bargaining"
date: "2024-05-17"
author: "Cooper Baihaqi"
readtime: 6
---

I've given some more thought on how the hardware configuration for the server. Perhaps it wouldn't be future-proof to opt for a Pi 4 Model B when the latest model is already here. That means I have to find a different case solution altogether.

I mentioned previously the Radxa Penta SATA HAT, but its only really good if you could find 2.5-inch SATA SSD drives, which unfortunately isn't very common here unless I wanna wait weeks for overseas shipping. If you use 3.5-inch drives you have to use janky SATA cables to connect the ports to an external drive bay, which defeats the purpose of it being compact.

Perhaps I don't really need the high-speed PCIe connection anyway?

USB 3.0 speeds are more than enough for a simple home server. All I need to find is a drive bay that can connect to the Pi via USB, and there sure are plenty. I settled with the Orico NS200U3 which holds two 3.5-inch hard drives. There is a variant with hardware RAID but I decided that software RAID is sufficient, and I get to save a couple bucks. Speaking of saving bucks, I even found a deal on a used one that is half its original price!

In short, the new hardware configuration for the server is as follows:

SBC: Raspberry Pi 5

Drive bay: Orico NS200U3

Storage: 2x 4TB Seagate Ironwolf hard drive

Once everything arrived, I quickly went to work. I used a NextCloudPi image for the operating system as it has built-in features and tools for configuring NextCloud on a Pi.

Furthermore, I used BTRFS for the storage since I heard its good for making snapshots. This is all uncharted ground for me, and I definitely had challenges setting up the drives with RAID, but after a few trials and errors, the system is deemed ready to be used.
