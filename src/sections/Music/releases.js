/**
 * releases.js — Joytrip discography data.
 *
 * Most recent first.
 *
 * To update a release, edit the matching object below.
 * To add a new release:
 *   1. Drop the cover art into src/Assets/
 *   2. Import it at the top of this file
 *   3. Prepend a new object to the releases array
 */

import LeavingStateCover from '../../Assets/Cover Art Leaving State.png';
import OhNoCover from '../../Assets/Oh No Cover Art.jpg';
import SlushCover from '../../Assets/Slush Cover.jpg';
import LetMeLayCover from '../../Assets/let-me-lay-art.jpg';
import MrTimeCover from '../../Assets/mr-time-art.jpg';
import LauderdaleLakesCover from '../../Assets/live-from-lauderdale-lakes-album-art.png';
import KeepOnPassingByCover from '../../Assets/keep-on-passing-by-album-art.png';

export const releases = [
  {
    id: 'leaving-state',
    title: 'leaving state',
    year: '2025',
    cover: LeavingStateCover,
    spotify: 'https://open.spotify.com/album/1sfVxRscd5XCQuH2gqCFlR?si=1nalpowSQ3CjozoC9MZp_Q',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: null,
  },
  {
    id: 'oh-no',
    title: 'Oh No',
    year: '2024',
    cover: OhNoCover,
    spotify: 'https://open.spotify.com/album/4CdGHQ9852oRZrR85zqQnA?si=XJHcPOwnQRCB7TewsTmqUw',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: null,
  },
  {
    id: 'slush',
    title: 'Slush',
    year: '2024',
    cover: SlushCover,
    spotify: 'https://open.spotify.com/album/4UXKjyH8hTBQdmuqQoQqpq?si=K3wmENrMRYaVhJsKOWBFAw',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: null,
  },
  {
    id: 'let-me-lay',
    title: 'Let Me Lay',
    year: '2024',
    cover: LetMeLayCover,
    spotify: 'https://open.spotify.com/album/0bBCrXXQuoeG2CqEAEEve7?si=F7hTb4wTSnyu1FygWpjA5A',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: null,
  },
  {
    id: 'live-from-lauderdale-lakes',
    title: 'Live from Lauderdale Lakes',
    year: '2023',
    cover: LauderdaleLakesCover,
    spotify: 'https://open.spotify.com/album/0VEPyIdW3EXR6VDwRRrDd0?si=SOmYpEnPQ6GdRAy9k8HyLQ',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: `Joytrip's Live from Lauderdale Lakes was recorded in southern Wisconsin in September 2023. These songs were crafted as the band navigated the global pandemic, geopolitical turmoil, young marriage, greed, and a world in flux. Live from Lauderdale Lakes is abundant with tasty grooves, tight instrumentation, and stunning harmonies. Stripped down to guitars, bass, vocals, and drums, this project showcases Joytrip's musical essence in its purest form. Across five original tracks, Michael Schodin, Mitchell Wisniewski, Bennett Shapiro, and Eddie Hochman united with the aim of creating authentically. Drawing heavy inspiration from live productions such as Pinegrove's 'Amperland, NY,' Joytrip recognized that music made collaboratively, in a single take within a room, captures sound in one of the most genuine ways. Live from Lauderdale Lakes complements picnics, morning coffee, transitioning seasons, and gentle smiles. As always, please be kind. A heartfelt thank you extends to Ethan Herman and Erik Anderson for their exceptional partnership throughout the process.`,
  },
  {
    id: 'mr-time',
    title: 'Mr. Time and the Joyful Ploys',
    year: '2023',
    cover: MrTimeCover,
    spotify: 'https://open.spotify.com/album/626ZwDbfm8gDGOKSRM7B28?si=5aMT7FMAR3es7jY7zh04Tw',
    apple: null,
    youtube: 'https://www.youtube.com/watch?v=3YwJliPGS30',
    bandcamp: null,
    editorial: null,
  },
  {
    id: 'keep-on-passing-by',
    title: 'Keep on passing by',
    year: '2023',
    cover: KeepOnPassingByCover,
    spotify: 'https://open.spotify.com/album/2Gfmqvj0viqOTLV8yYcRVK?si=FzZa-XFRTwq44WjZM0Ko0w',
    apple: null,
    youtube: null,
    bandcamp: null,
    editorial: null,
  },
];
