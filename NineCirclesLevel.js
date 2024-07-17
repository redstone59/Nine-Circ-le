var Colour;
(function (Colour) {
    Colour[Colour["RED"] = 0] = "RED";
    Colour[Colour["PINK"] = 1] = "PINK";
    Colour[Colour["ORANGE"] = 2] = "ORANGE";
    Colour[Colour["BROWN"] = 3] = "BROWN";
    Colour[Colour["YELLOW"] = 4] = "YELLOW";
    Colour[Colour["GREEN"] = 5] = "GREEN";
    Colour[Colour["BLUE"] = 6] = "BLUE";
    Colour[Colour["INDIGO"] = 7] = "INDIGO";
    Colour[Colour["VIOLET"] = 8] = "VIOLET";
    Colour[Colour["CYAN"] = 9] = "CYAN";
    Colour[Colour["MAGENTA"] = 10] = "MAGENTA";
    Colour[Colour["PURPLE"] = 11] = "PURPLE";
    Colour[Colour["BLACK"] = 12] = "BLACK";
    Colour[Colour["GREY"] = 13] = "GREY";
    Colour[Colour["WHITE"] = 14] = "WHITE";
    Colour[Colour["MULTICOLOUR"] = 15] = "MULTICOLOUR";
    Colour[Colour["PLAYER_COLOUR_1"] = 16] = "PLAYER_COLOUR_1";
    Colour[Colour["PLAYER_COLOUR_2"] = 17] = "PLAYER_COLOUR_2";
})(Colour || (Colour = {}));
const difficultyRanks = [
    "Easy",
    "Normal",
    "Hard",
    "Harder",
    "Insane",
    "Easy Demon",
    "Medium Demon",
    "Hard Demon",
    "Insane Demon",
    "Extreme Demon"
];
const lengthRanks = [
    "Short",
    "Medium",
    "Long",
    "XL"
];
export { Colour, difficultyRanks, lengthRanks };
