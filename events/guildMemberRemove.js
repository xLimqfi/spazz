module.exports = (client, member) => {
    //   console.log("Guild member add was registered.");
    const channel = member.guild.channels.cache.find(
        (ch) => ch.name === "welcome"
    );
    if (!channel) return;
    channel.send(`<a:no:971654133239123969> ${member} , just left us :(`);
};
