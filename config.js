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
      name: "Todoist",
      icon: "trello",
      link: "https://calendar.google.com/calendar/r",
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
      name: "Odysee",
      icon: "youtube",
      link: "https://odysee.com/",
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
        name: "Inspirational",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Classic",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Oldies",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
