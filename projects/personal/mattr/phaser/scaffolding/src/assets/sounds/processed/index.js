import { Howl, Howler } from 'howler';

import sounds_mp3 from './sounds.mp3';
import sounds_webm from './sounds.webm';
const config = {
  src: [sounds_webm, sounds_mp3],
  sprite: {
    Main_Menu: [2000, 90300],
    Dojo_Music: [91610, 6720],
    Begin: [98540, 1012.7],
    Front_Kick: [99360, 1030]
  }
};
const sounds = new Howl(config);
export default sounds;
export { Howl, Howler, sounds };
