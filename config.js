module.exports = {
    app: {
        px: ',',
        token: 'OTUzMzk5NDIyMTcwMDQyMzc4.GE9lwV.AYj9qZVhcWu7SWDrKCBL_Ju3UZZYn8y4zonv9o',
        playing: 'my DJ set'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'DJ',
            commands: ['volume']
        },
        maxVol: 10000,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
