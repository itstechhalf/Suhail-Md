const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/devzam";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/devzam";
global.website=process.env.GURL || "https://whatsapp.com/channel/devzam" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.shutterstock.com/image-vector/classic-arabic-calligraphy-zain-beautiful-260nw-2434013737.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DevZam" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066650704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRQT3lrZWtFVDB5bEFVZW1tR0MzY0oySTI2MENSWWRpdnQwTVdPM3RKRzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTg3MTA0NjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNDc3N0Y4OTQxNkNDMDhERjJGMzg5N0Y0MEI4RUVCM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NTk1MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxODcxMDQ2MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2RTc2NTQwMjY3QzE4NDQyNTJFNTE1Mzc3NjM5NDVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ1OTUxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE4NzEwNDYzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjg4QzAyMDI2RkMxODZFQUJGQ0I4NTdFMEI2NEYwNkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDU5NTE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTg3MTA0NjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNTcxNjE1Mjk2MjdFQjVCQzJBNjkyRTQ3Rjc2MjE4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NTk1MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHlNOGY4SXFSQi1PYWx2SC1STkkwZ1wiLFxuICBcInBob25lSWRcIjogXCJiMGRhMjZmMy00NmU4LTRkNzMtOTFhZC04Yjc3ZmRkNGU5ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxMzQsXG4gICAgICAxOTAsXG4gICAgICAxOTYsXG4gICAgICAxNzEsXG4gICAgICAxNzAsXG4gICAgICA2MixcbiAgICAgIDE4LFxuICAgICAgMTk3LFxuICAgICAgMjQ5LFxuICAgICAgMTA1LFxuICAgICAgODIsXG4gICAgICAyMjcsXG4gICAgICAxOTksXG4gICAgICAxNDcsXG4gICAgICAxMTIsXG4gICAgICAyMDgsXG4gICAgICAxMzcsXG4gICAgICAxNDMsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgNTMsXG4gICAgICA0MixcbiAgICAgIDI0NixcbiAgICAgIDc2LFxuICAgICAgNTUsXG4gICAgICAyMTcsXG4gICAgICAxNDcsXG4gICAgICA0LFxuICAgICAgMTUwLFxuICAgICAgMTcwLFxuICAgICAgMjQ0LFxuICAgICAgMjMwLFxuICAgICAgMTEyLFxuICAgICAgNzMsXG4gICAgICAxMDgsXG4gICAgICAxNDEsXG4gICAgICAxNjEsXG4gICAgICAxMDAsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllDM1NTNEROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODcxMDQ2MzI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODExMjM0NDA5Njk1NjoyNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEZXZaYW1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTGQyLzhCRVBUQnNMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkplVW00S05WYkZKVFVjYTd4QjFJTTI0VVFURklNb2EyZ0k5SWg3Q0l1RlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMUtITHpmaWVwcGFWVnh2Rm9taWJQUTBrWEtJM1FOeURNeEwwNFI0TE1BaVN2MjR2RmMxV0JHdHVYRjVhNGkzN3IxY00yT3E5N2c5V1JRMENtUm5PQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRUZ6Z2c4MFdRbFBKY2JweEtFOHdJSlIzYnl4MGRhUStNTS9Kc1cxUTFBL3lEY3l2WXBRSWRYMUoxajRPYkpRbTllWThVY3BkQm1zdWtFMS9iVWpxaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTg3MTA0NjMyOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NTk1MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFY2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVjai5qc29uIjogIntcImtleURhdGFcIjpcIjRHdVNPZnZjdWR3bXlLcUNpRFo5ZWRMVDNXQzAwNSt3ejZoK0NkTkthSTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM2Mjc2NjQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NTk1MTIyMjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DevZam",
  ownername:process.env.OWNER_NAME|| "DevZam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
