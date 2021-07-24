// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Suraj",
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "${{ secrets.OPEN_WEATHER_MAP_KEY }}",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "C",
  weatherLatitude: "18.520430",
  weatherLongitude: "73.856743",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/IAmSurajBobade",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: "3",
      name: "Google Keep",
      icon: "trello",
      link: "https://keep.google.com/u/0/",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "bookmark",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "music",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "Youtube home",
        link: "https://www.youtube.com",
      },
      {
        name: "Youtube Watch later",
        link: "https://www.youtube.com/playlist?list=WL",
      },
      {
        name: "Amazon Music",
        link: "https://music.amazon.in/my/playlists/25bd6e97-8b45-4191-993d-b56dcb14c92c",
      },
      {
        name: "Rock",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
    secondList: [
      {
        name: "Linkedin",
        link: "https://linkedin.com/",
      },
      {
        name: "Figma",
        link: "https://figma.com/",
      },
      {
        name: "Dribbble",
        link: "https://dribbble.com",
      },
      {
        name: "Telegram",
        link: "https://webk.telegram.org",
      },
    ],
  },
};
