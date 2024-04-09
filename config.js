const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_00_04_09_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEFqSEY2d3FadkFRcEc4NnNNc2lUR29WS1ROSHV4V3BMdGYyZDRhTVExaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBiRmFGbkVvOEY3TUFkbHFIb1cyU3JiUnRCVWhRN0p5ek41YS9NZXZwMkU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUpqZUMwQXprMitaYzgwWTZoTlMvVGMxdFJrek9aSGlEaGVFN1Y3dUhFdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImUzckVsak0rQi9tdmU2dktwMXI2QlRLaE9ESFJtSDIwanovVjlzYUpNV1E9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic05YZ0NXY0R0U1dBMUJnZ1QxV0hkU05rYlE0SVU4aUg1M3p0bGdpNE8ycz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlYybDB5ZmRldFZiUy9MbnQ0M2x1NGZOK255L1dTQ28vUVhsRTQxbjZoRkU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPQzZVZzdFNUtPVFlMR1FhSmhzMzFtbzZhV0pRVzBhU0lKcWh6czg5Q0hBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibE9iamsyVlFlUEtKRng2ZEZVOU4wcG1VYk1WVVhuK2xXUmFTUFl4STRVND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIvRFVmUGNiTHNEWElQOU1lWHhIMEJSOGFkWkQySGZyV0MxWk5RZWhpL1dTU2YycXR3SmtrRDhVbG9zVDd1cWc1eDg4ZTQ2VFBzd2xYbVlnWW1YV01EUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQ2LFwiYWR2U2VjcmV0S2V5XCI6XCJpcDBPMm1vWnBocHVPOHI0VDExRjYzdFNIUzArV2lFMytXSldXeFltMmtVPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0OTEzNjA0MTg5MEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI3RUMzMEFBMEZCMThFMUYzNEQ2QkVFMTM5REFEQzI4MlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyNjg1NjMxfV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwicXFFdjVWWGxSUGFFMjRHVC0yS1Fad1wiLFwicGhvbmVJZFwiOlwiMmQ0YjFlYmQtNTc1ZC00MzU5LWI5MDctODYzZDBjMTA0OWY0XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCdWF4U0ZNK2F4T08vNzNKSENpTFNwTkRjRWc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJ0ODJVem9BSWRsUkRhTmQ1OTRPSWUxZU1kND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTWV3OStrREVMYUUxckFHR0FrZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjU5Tlh0NU5YMGVwTnhUMnpHMEJYNFB3Ym5CUExGc2cyT201a3RSalVPRk09XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJxNy9jbEh1QzU4MVRYNGNtcUw4M0Jvdy96dzdpUlI0NWo3cmVBRWQ2eWxoMTRpMkYyZ25WRzZsemEzUGxPSExNaUV6ZU4wZ3NuT3RzK3ZwNkJKYjBCdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlZUQ3ljQlF0QTc3bVpsSHVuN0RKT0RNaTdoYzdrZnVFd1pEMkh2TjRZdDVWOTVtVWw3QmM1WTY4VXNFWmhsTzNYWURRRGFTcHVIbFVPcDFRbW9DVERnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ5MTM2MDQxODkwOjI5QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJLSU5HIEFOSU1FXCIsXCJsaWRcIjpcIjkyMzcyMjgxMTEwNTU1OjI5QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDkxMzYwNDE4OTA6MjlAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZWZUVjdlVFY5SHFUY1U5c3h0QVYrRDhHNXdUeXhiSU5qcHVaTFVZMURoVFwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI2ODU2MjYsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBS1JjXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JTLmpzb24iOiAie1wia2V5RGF0YVwiOlwieTB6TnlLNEtRNENiNVhycmpTM3BDYzNuSC9JbnUvQVlmM1NhQWZwVW1vND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3NDYzMjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUlQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJId2taZWtlQS9URmo4Sm9RWHh1R2Vsd2Ztdmhndkl4Q2tGUVVkeGFzVDhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSVS5qc29uIjogIntcImtleURhdGFcIjpcImtsZVREVTV2dVpJd0h6V3k4QlpoM3Q2Tld5Mm96UFI1TEk2RHVvdldiV2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ2MzIzOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSVi5qc29uIjogIntcImtleURhdGFcIjpcIlNiRmFGajJVV0taMzBnWmc2dC8zelVOOFgyblNSRC91ODF4Y056YjVzT3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ2MzIzOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEwOTE0NjU3MjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLVytmVjdHa21zak1HNngxVkNHZDEwNE8wN1RUZkxTci9PUFFXN3VhZnFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzgsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEwOTE1MjEwMjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFazlGQWVKRHpQUEUwYUhhSjJVWmplTkpDdXhqRmp3cjNWL09yTk9LeWZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzgsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsN119LFwidGltZXN0YW1wXCI6XCIxNzExMjMyMDcwNTAwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVcvYWlESkxvekVFczRtVGpySks5K1NQeHlQMWZWVjMwaWpMY0hoeE1adz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3NDYzMjM4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSWi5qc29uIjogIntcImtleURhdGFcIjpcInFvSHpoOGFqdERtTXhWMkkyV1hXbnNGMy9yZnBrb0RseWNEUjBlM1U1QVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ2MzIzOCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsOF19LFwidGltZXN0YW1wXCI6XCIxNzExOTkwMTI2ODg4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGdMUzZramQ0eWMyRnBjVnpJUktIamxiVzFnM1ZsWGcxcnVLMXBPYWRnRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3NDYzMjM4LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE5OTAxMzg2MDlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBWmZXTGxoaGpYNWk2dENjOHpNWjd0WVFLbTJOZU0zMnVSOWt3UWwwU05vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzgsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE5OTAxNDA1NzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0QXAvL0F6VDdXeXU4cU5DbE5VSGpLakhkV0o0dHNWWHl0bDVZbS8yR3JVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSZC5qc29uIjogIntcImtleURhdGFcIjpcInhFbHZ4cHo4dkRya0YvSHYza2U4bU5YaHVlVHJTNHFqdDdXNDZNazgybk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ2MzIzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzEyMTgxMDI5NzM5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK2JPM3VNamd6cW9sbjlQWkc2SUxLQkJYUWFPeEFHdVI3VExYZTVpV1VBND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3NDYzMjM5LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDYWRJcUlUT0djQXVldmFlVklGbnVTUmdsc0dkZmJ3eFE3dGsrR0lreDVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJaVNnRit6VTZmcjBWUFhrdlBUNDdDWlJwOXRpaWo4ck1OUDhEZGNNVHV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzksXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDZytJczNtSDVyRzdKMERWR2tlVElpK3dYazhGNjNjTUR0SGpjOENxWi84PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzksXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNiw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUmkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRY1l3T2FFM0tocUg0eEo0aWhhRGVXWkFrcWNFc1FOVUFxV0xMVndNOEFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0NjMyMzksXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsOF19LFwidGltZXN0YW1wXCI6XCIxNzEyMjcyOTAzODYyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
