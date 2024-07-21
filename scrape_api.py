import requests, time, base64

SCRAPE_TIMEOUT = 10
DOT_COUNT = 3

with open("level_list.txt") as file:
    spreadsheet = file.read()

columns = spreadsheet.split("\n")
COLUMN_NAMES = ["name", "release_version", "colour_1", "colour_2", "screenshot", "level_id", "verifier", "creators"]

i = 1
with open("./src/logic/FakeAPIInformation.ts", "w") as file:
    file.write('import { APIInformation, Rating, Length } from "./NineCirclesLevel";\n\n')
    file.write('const downloadedAPIInfo: {[key: string]: APIInformation} = {\n')
    
    for column in columns:
        entries = column.split("\t")
        level_data = dict(zip(COLUMN_NAMES, entries))
        
        response = requests.post("http://www.boomlings.com/database/downloadGJLevel22.php", 
                                data = {
                                    "levelID": int(level_data["level_id"]), 
                                    "secret": "Wmfd2893gb7"
                                    }, 
                                headers = {"user-agent": ""}
                                ).text
        
        if response == "error code: 1015":
            raise Exception("Rate limited (womp womp) :(")
        
        response = response.split(":")
        response = [f"{response[i]}:{response[i + 1]}" for i in range(0, len(response), 2)]
        response_dict = {}
        
        for item in response:
            key, value = item.split(":")
            response_dict[key] = value
        
        if response_dict["18"] == "0": continue # Skip unrated levels
        
        # Keys from https://wyliemaster.github.io/gddocs/#/resources/server/level
        
        file.write("     '" + level_data["level_id"] + "': {\n")
        file.write("        " + f"name: `{response_dict["2"]}`,\n")
        
        padding = "=" * (-len(response_dict["3"]) % 4)
        file.write("        " + f"description: `{base64.b64decode(response_dict["3"] + padding, "-_").decode().replace("`", "\\`")}`,\n")
        
        if response_dict["17"] == "1":
            difficulty = [
                "Hard Demon", 
                None, 
                None, 
                "Easy Demon", 
                "Medium Demon", 
                "Insane Demon", 
                "Extreme Demon"
            ][int(response_dict["43"])]
        elif response_dict["25"] == "1":
            difficulty = "Auto"
        else:
            try:
                difficulty = [
                    "N/A",
                    "Easy",
                    "Normal",
                    "Hard",
                    "Harder",
                    "Insane"
                ][int(response_dict["9"])]
            except IndexError:
                # Find difficulty from star rating. If this fails on a level i will cry into a pillow
                difficulty = ["Auto", "Easy", "Normal", "Hard", "Hard", "Harder", "Harder", "Insane", "Insane", "Hard Demon"][int(response_dict["3"])]
        
        file.write("        " + f"difficulty: '{difficulty}',\n")
        file.write("        " + f"stars: {response_dict["18"]},\n")
        file.write("        " + f"length: '{["Tiny", "Medium", "Long", "XL", "Platformer"][int(response_dict["15"])]}' as Length,\n")
        file.write("        " + f"downloads: {response_dict["10"]},\n")
        file.write("        " + f"likes: {response_dict["14"]},\n")
        file.write("        " + f"objectCount: {response_dict["45"]},\n")
        
        if response_dict["42"] != "0":
            rating = [None, "Epic", "Legendary", "Mythic"][int(response_dict["42"])]
        else:
            rating = "Rate" if response_dict["19"] == 0 else "Feature"
        
        if rating == None:
            print(response_dict["42"], response_dict["19"], rating)
            raise Exception("what the FUCK")
        
        file.write("        " + f"ratingType: '{rating}' as Rating\n")
        file.write("    },\n")
        
        print(f"Wrote {response_dict["2"]} ({i} / {len(columns)})", end = "", flush = True)
        i += 1
        
        for j in range (DOT_COUNT):
            time.sleep(SCRAPE_TIMEOUT / DOT_COUNT)
            print(".", end = "", flush = True)
        
        print("\n", end = "", flush = True)
    
    file.write("}\n\nexport { downloadedAPIInfo }")