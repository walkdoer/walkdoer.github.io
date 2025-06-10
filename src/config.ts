export const SITE = {
  website: "https://walkdoer.github.io/", // replace this with your deployed domain
  author: "Andrew Cheong",
  profile: "https://walkdoer.github.io/",
  desc: "A small blog for sharing my thoughts and experiences.",
  title: "Walkdoer",
  ogImage: "personal-pic.jpeg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/walkdoer/walkdoer.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Hong_Kong", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
