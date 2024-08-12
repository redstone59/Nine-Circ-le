import noThumbnailImage from "../assets/no thumbnail.png";

async function getLevelThumbnail(levelId: number | string): string {
    if (typeof levelId === 'number') {
        levelId = levelId.toString();
    }

    const api_url = "https://api.github.com/repos/cdc-sys/level-thumbnails/contents/thumbs/" + levelId + ".png?raw=true";
    let response: Response = await fetch(api_url);

    return response.ok ? api_url : noThumbnailImage;
}

export { getLevelThumbnail }