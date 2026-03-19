import {google} from "googleapis"

const GoogleClientID = process.env.GOOGLE_CLIENT_ID
const GoogleClientSecret = process.env.GOOGLE_CLIENT_SECRET

exports.oauth2client = new google.auth.OAuth2(
  GoogleClientID,
  GoogleClientSecret,
  "http://localhost:5000/google/login"
)