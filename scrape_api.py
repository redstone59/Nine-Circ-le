import requests, time, base64

SCRAPE_TIMEOUT = 5

with open("level_list.txt") as file:
    spreadsheet = file.read()

columns = spreadsheet.split("\n")
COLUMN_NAMES = ["name", "release_version", "colour_1", "colour_2", "screenshot", "level_id", "verifier", "creators"]

with open("./src/logic/FakeAPIInformation2.ts", "w") as file:
    file.write('import { APIInformation, Rating, Length } from "./NineCirclesLevel";\n\n')
    file.write('const downloadedAPIInfo: APIInformation[] = [\n')
    
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
        
        response = response.split(":")
        response = [f"{response[i]}:{response[i + 1]}" for i in range(0, len(response), 2)]
        response_dict = {}
        
        for item in response:
            key, value = item.split(":")
            response_dict[key] = value
        
        # Keys from https://wyliemaster.github.io/gddocs/#/resources/server/level
        
        file.write("    {\n")
        file.write("        " + f"name: '{response_dict["2"]}',\n")
        
        padding = "=" * (-len(response_dict["3"]) % 4)
        file.write("        " + f"description: '{base64.b64decode(response_dict["3"] + padding, "-_").decode()}',\n")
        
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
            difficulty = [
                "N/A",
                "Easy",
                "Normal",
                "Hard",
                "Harder",
                "Insane"
            ][int(response_dict["9"])]
        
        file.write("        " + f"difficulty: '{difficulty}',\n")
        file.write("        " + f"stars: {response_dict["18"]},\n")
        file.write("        " + f"length: '{["Tiny", "Medium", "Long", "XL", "Platformer"][int(response_dict["15"])]}' as Length,\n")
        file.write("        " + f"downloads: {response_dict["10"]},\n")
        file.write("        " + f"likes: {response_dict["14"]},\n")
        file.write("        " + f"objectCount: {response_dict["45"]},\n")
        
        if response_dict["42"] != 0:
            rating = [None, "Epic", "Legendary", "Mythic"][int(response_dict["42"])]
        else:
            rating = "Rate" if response_dict["19"] == 0 else "Feature"
        
        
        file.write("        " + f"ratingType: '{rating}' as Rating\n")
        file.write("    },\n")
        
        print(f"Wrote {response_dict["2"]}")
        time.sleep(SCRAPE_TIMEOUT)
    
    file.write("]\n\nexport { downloadedAPIInfo }")