module.exports = function onReady(bot) {
    if (!bot.user.avatar) {
        bot.user.setAvatar('./Crystal').catch('error' + console.error);
    }
    bot.user.setStatus("online");
    bot.user.setAFK(false);
    bot.user.setUsername("Crystal");
    bot.user.setActivity('Managing Servers', {
        url: null,
        type: 'PLAYING'
    });
}
