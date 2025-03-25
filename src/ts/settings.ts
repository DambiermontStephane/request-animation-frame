export const settings = {
    rectangle: {
        minHeight: 10,
        maxHeight: 20,
        minWidth: 25,
        maxWidth: 40,
        minSpeed: 2,
        maxSpeed: 7,
        initalSpeed: 4,
        maxLevelSpeed: 10,
        wallGap: 100,
    },
    monster: {
        width: 27,
        height: 29,
        frames: [
            {
                sx: 104,
                sy: 16,
            }, {
                sx: 132,
                sy: 16,
            }, {
                sx: 160,
                sy: 16,
            }, {
                sx: 188,
                sy: 16,
            }, {
                sx: 216,
                sy: 16,
            }, {
                sx: 244,
                sy: 16,
            }],
        x: 50,
        y: 150,
        maxFallSpeed: 3
    },
    gravity: 0.2,
}