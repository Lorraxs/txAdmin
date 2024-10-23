//All uppercase and [0,I,O] removed
const actionIdAlphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export default {
  //Identifier stuff
  regexValidHwidToken: /^[0-9A-Fa-f]{1,2}:[0-9A-Fa-f]{64}$/,
  validIdentifiers: {
    // https://github.com/discordjs/discord.js/pull/9144
    // validated in txtracker dataset
    discord: /^discord:\d{17,20}$/,
    fivem: /^fivem:\d{1,8}$/,
    license:
      /^license:(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    license2:
      /^license2:(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    live: /^live:\d{14,20}$/,
    steam:
      /^steam:(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    xbl: /^xbl:\d{14,20}$/,
  },
  validIdentifierParts: {
    discord: /^\d{17,20}$/,
    fivem: /^\d{1,8}$/,
    license:
      /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    license2:
      /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    live: /^\d{14,20}$/,
    steam:
      /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    xbl: /^\d{14,20}$/,
  },

  // Database stuff
  adminPasswordMinLength: 6,
  adminPasswordMaxLength: 128,
  regexActionID: new RegExp(
    `^[${actionIdAlphabet}]{4}-[${actionIdAlphabet}]{4}$`
  ),
  regexWhitelistReqID: new RegExp(`R[${actionIdAlphabet}]{4}`),

  //Other stuff
  regexSvLicenseOld: /^\w{5,32}$/,
  regexSvLicenseNew: /^cfxk_\w{1,60}_\w{1,20}$/,
  regexValidIP: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  actionIdAlphabet,
  nuiWebpipePath: "https://monitor/WebPipe/",
  regexCustomThemeName: /^[a-z0-9]+(-[a-z0-9]+)*$/,
} as const;
