// Commande à faire sur youtube dans la console navigateur depuis une des vidéos dans la playlist
// écrire le résultat dans youtube.json
//
// JSON.stringify(
//  Array.from(
//    document.querySelectorAll('ytd-playlist-panel-video-renderer #wc-endpoint.ytd-playlist-panel-video-renderer:has(#video-info)')
//  )
//  .map(x => ({
//    title: x.querySelector("#video-title").innerText,
//    id: x.getAttribute('href')?.replace(/.*\?v=([^&]+).*/, '$1')
//    })
//   )
// )

import fs, {appendFileSync, existsSync, readFileSync} from "fs";
import {normalize} from "./helpers";

async function getIdsYoutube() {
  const youtubeMapping = (await import('./youtube.json')).default;
  youtubeMapping.forEach(yt => {
    const id = normalize(yt.title)
    let path = `../data/sessions/${id}.yml`;
    const existe = existsSync(path);
    if (!existe) {
      console.error(id);
    }
    else {
      if (!readFileSync(path).toLocaleString().includes("youtube:")) {
        appendFileSync(path, `\nyoutube: ${yt.id}`)
        console.log(id)
      }
    }
  })
}

getIdsYoutube()
