/*▓██   ██▓ ▄▄▄       ██ ▄█▀▄▄▄      
 ▒██  ██▒▒████▄     ██▄█▒▒████▄    
  ▒██ ██░▒██  ▀█▄  ▓███▄░▒██  ▀█▄  
  ░ ▐██▓░░██▄▄▄▄██ ▓██ █▄░██▄▄▄▄██ 
  ░ ██▒▓░ ▓█   ▓██▒▒██▒ █▄▓█   ▓██▒
   ██▒▒▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒▒▒   ▓▒█░
 ▓██ ░▒░   ▒   ▒▒ ░░ ░▒ ▒░ ▒   ▒▒ ░
 ▒ ▒ ░░    ░   ▒   ░ ░░ ░  ░   ▒   
 ░ ░           ░  ░░  ░        ░  ░
 ░ ░                               

Hello,
Thanks for using Yaka bot.
I am,

██╗   ██╗ █████╗ ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
╚██╗ ██╔╝██╔══██╗██║ ██╔╝██╔══██╗██╔════╝██║  ██║██║
 ╚████╔╝ ███████║█████╔╝ ███████║███████╗███████║██║
  ╚██╔╝  ██╔══██║██╔═██╗ ██╔══██║╚════██║██╔══██║██║
   ██║   ██║  ██║██║  ██╗██║  ██║███████║██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝
                                                    */
                                                   
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

let gg = process.env.MODS;
if (!gg) {
  gg = "905549914611";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://johnkurt:<3146>@javinsensei.oivreni.mongodb.net/?retryWrites=true&w=majority"; // paste your own MongoDB url..
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCAYZ930Rq1EFiRNRJuSeGGrKljCnOb8-U"; // paste Your own Api Key..
global.packname = process.env.PACKNAME || `👹 𝕐𝕒𝕜𝕒ᵐᵈ`;
global.author = process.env.AUTHOR || "by: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎";
global.port = process.env.PORT || "3001";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Bu Parçayı Değiştirmeyin------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

