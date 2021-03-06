# spongebot
This is a pair of Discord bots that echo all posts made in one channel by a specific user to another channel, but with sPonGeBoB CapItAliZaTiOn. Very useful for mocking someone discreetly. 

I should mention that this project was not made in any sort of mean-spirited context and should not be used in one.

### setup

Run `npm install` and update the `auth.json` file with the appropriate Discord token in both the client and server folders. Also, change the `target_user` field in `client/bot.js` to the name of the user you want to target.

The server bot should be added to the primary server while the client should go on the secondary one. Instructions for setting up a Discord bot can be found [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

The server and client are set up to be run on one machine (they contact each other through sockets over loopback), but this could be changed by adjusting the `hostname` parameters at the top of each `bot.js` file.

At this time, additional features are being implemented for the specific place this is being used, but a generic version (with only the sPonGeBoB feature) is available on the branch spongebot_pure.

## development

There is a script on the aws server hosting this that applies changes to the master branch to the live version of the bot about 5 minutes after they happen, so DO NOT push to master without running on a testing server first.
