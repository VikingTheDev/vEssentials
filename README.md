# vEssentials

## TODO
- [x] Create a discord module
- [ ] Create a log system (Both console and discord logs)
- [ ] Add the permission, queue, chatfilter and database modules
    - Add parts of the playermanager 
- [ ] Create a blacklist module (weapon, vehicle and ped blacklist)
- [ ] Create a command module
    - Add basic commands (/revive, /respawn, /dv etc.)
    - Add "chat commands" (/me, /do, /ooc, /gooc, /announce etc.)
    - Integrate with permissions
- [ ] Do research on a phone module, look at i.e. GC Phone
- [ ] Create a playerlist module
- [ ] Create a UI module
    - Regular and car UI
    - Exports for popup menus (Menu informing new players of rules etc.)
    - Notifications
- [ ] Create a Server Controller module
- [ ] Implement a solution for potential "breakout" symbols in incoming arguments. Especially when they're originating from a client script. This is to prevent bad actors from executing code/commands on the server. (First and foremost for the logger, and any potential eval functions that will be used for i.e. the server controller.)

## Priority:
1. Rewrite to TS.
1. Permission system. Might add other options for perms than just discord.
2. A "connection manager" that includes a queue, discord ban check and possibility for a whitelist or allowlist check.
3. Finishing the logger.
4. Database
5. Simple website to change the config in an easy and intutive manner (React, and a solution a local database).

## Scripts to look into:
- https://github.com/DemmyDemon/paradise-area
- https://github.com/manueljlz/gcphone
- https://github.com/d0p3t/fivem-js


## Interesting research:
- https://forum.cfx.re/t/lobby-menus-discussion-pause-menu-research/3909562?u=vikingthedev
 Would be awesome to add a pause menu like this, and integrate the playerlist amongst other things into it.