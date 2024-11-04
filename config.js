const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254740841168";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740841168";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_19_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdXcU1GbW9pYlJkRVN0djUxL0ExWWlhSGxSSHF2SGpNanN4RTRUZ2lCTUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQwODQxMTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQkFGQzZGMzkzN0QxMzBBQTAwQUY4RTZEM0JFNzlFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3MDQ3NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDA4NDExNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUxODA0MDYxNTc4NjFDM0JGNzk3NEJGMjgwNTZCOUMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDcwNDc3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyM1pUYmFmM1NmMkR4c2FWZm9wSWdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0MDJiNjRiLWFhZDUtNDFlMC05MmNiLWI4MWEzNzhhZWVlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxMTUsXG4gICAgICAxMDgsXG4gICAgICAwLFxuICAgICAgODEsXG4gICAgICAxODUsXG4gICAgICAxMTEsXG4gICAgICAyMjgsXG4gICAgICAxNDAsXG4gICAgICAyMjIsXG4gICAgICAxNDUsXG4gICAgICAxODAsXG4gICAgICAyNDMsXG4gICAgICAyNTQsXG4gICAgICAxMzUsXG4gICAgICA3MyxcbiAgICAgIDE0OCxcbiAgICAgIDM3LFxuICAgICAgNzksXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICA5OSxcbiAgICAgIDI1MSxcbiAgICAgIDE2MixcbiAgICAgIDI1MyxcbiAgICAgIDIxMyxcbiAgICAgIDI0MCxcbiAgICAgIDE2NixcbiAgICAgIDIwMixcbiAgICAgIDIxLFxuICAgICAgODAsXG4gICAgICA5MSxcbiAgICAgIDIxNCxcbiAgICAgIDI0MSxcbiAgICAgIDEzMixcbiAgICAgIDI0OCxcbiAgICAgIDYsXG4gICAgICAxOTYsXG4gICAgICAxMzIsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVpETlNYOU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDg0MTE2ODozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA3OTU0NjkxNjg4NzE6MzZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JOFk/CdmZLwnZ6W8J2emPCdmZXwk4WTXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjYwb29nQkVQL3FvYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWUWlGcVpyanI3Qm1yREFHdlVMckxQci9MeTVNN3piRjREbmR4QjRmWUNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRZMG5JYnZpdHVQQkpEd05LQW1yb0J2Z3FhbXFsRUFaTHltcDY3L0lqaThtbG1xZE1nTmN6UjdrYkhrM0JQd3hCYjZvRkkvbFNQMHloMTYzcFJSM0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpGOVdrMURwTjlheDVzK0cvMUhtTk8vOUV3b05JN1JuSlpSSlFjTy9zdW5yTGdrZFh0Y2FJa2ZCNWZFS0d0WDE4aGxIdW8zbHRXWXdSYVF6a3ZnVmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MDg0MTE2ODozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MDQ3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIZVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhlVy5qc29uIjogIntcImtleURhdGFcIjpcIktuU3JFM1NhSVI1cklJc21uT0NpNzM4K2s5OW4rck50L1R6KzcybEk4TjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg1Nzc2NDc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3MDQ3NzI2NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "whiz",
  packname: process.env.PACK_NAME || "whiz",
  botname : process.env.BOT_NAME  || "Whiz",
  ownername:process.env.OWNER_NAME|| "WHIZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
