module.exports = (client, member) => {
    //   console.log("Guild member add was registered.");
    const channel = member.guild.channels.cache.find(
        (ch) => ch.name === "welcome"
    );
    if (!channel) return;
    channel.send(
        `<a:yes:971654133193011230> Hey ${member} , has joined spaz.`
    );
};
