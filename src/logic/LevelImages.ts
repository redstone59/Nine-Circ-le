import noThumbnailImage from "../assets/no thumbnail.png";

async function getLevelThumbnail(levelId: number | string): Promise<string> {
  if (typeof levelId === "number") {
    levelId = levelId.toString();
  }

  const api_url =
    "https://api.github.com/repos/cdc-sys/level-thumbnails/contents/thumbs/" +
    levelId +
    ".png?raw=true";
  const response: Response = await fetch(api_url);

  const image_url = "https://github.com/cdc-sys/level-thumbnails/blob/main/thumbs/" + levelId + ".png?raw=true";

  return response.ok ? image_url : noThumbnailImage;
}

export { getLevelThumbnail };
