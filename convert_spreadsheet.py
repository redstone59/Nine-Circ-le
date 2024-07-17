def colour(entry: str):
    if entry == "Multicoloured / Rainbow": return "MULTICOLOUR"
    return entry.upper().replace(" ", "_")

with open("level_list.txt") as file:
    spreadsheet = file.read()

columns = spreadsheet.split("\n")
COLUMN_NAMES = ["name", "release_version", "colour_1", "colour_2", "screenshot", "level_id", "verifier", "creators"]

with open("AllLevels.ts", "w") as output:
    level_name_dict = {}
    output.write('import { NineCirclesLevel, Colour } from "./NineCirclesLevel";\n\n')
    output.write("const allLevels: NineCirclesLevel[] = [\n")
    
    for column in columns:
        entries = column.split("\t")
        level_data = dict(zip(COLUMN_NAMES, entries))
        level_data["creators"] = level_data["creators"].split(" + ")
        
        output.write("    {\n")
        output.write("        " + f"// {level_data["name"]}\n")
        output.write("        levelId: " + f"{level_data["level_id"]},\n")
        output.write("        colourScheme: " + f"[Colour.{colour(level_data["colour_1"])}, Colour.{colour(level_data["colour_2"])}],\n")
        output.write("        creators: " + str(level_data["creators"]) + ",\n")
        output.write("        verifier: " + (f"'{level_data["verifier"]}'" if level_data["verifier"] != "" else "null") + ",\n")
        output.write("    },\n")
        
        level_name_dict[level_data["name"]] = level_data["level_id"]
    
    output.write("];\n\n")
    
    output.write('const nameToIdObj: object = {\n')

    for key in level_name_dict:
        output.write(f'    "{key}": {level_name_dict[key]},\n')

    output.write("}\n\nexport { allLevels, nameToIdObj }")