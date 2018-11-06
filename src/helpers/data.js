export const mapCenter = {
  lat: 40.719526,
  lng: -74.0089934
}

export const MAP_API_KEY = 'AIzaSyDhfmG-xO-k00wHMoDWJujMDj8CHmUSF10'

export const FS = {
  API_URL_SEARCH: '//api.foursquare.com/v2/venues/search',
  LL: `${mapCenter.lat},${mapCenter.lng}`,
  V: '20182507',
  CLIENT_ID: 'QEN4L40AJSUCNK3W1AWYKME0EEZ2T0WSQWELFJBSZAL5T224',
  CLIENT_SECRET: 'LPLJRLKY5NZM3VM2CXB2HN4LI3M1I3NHR4UDKJXJKS1JKQWG',
}

export const FS_API_SEARCH_URL = `${FS.API_URL_SEARCH}?client_id=${FS.CLIENT_ID}&client_secret=${FS.CLIENT_SECRET}&ll=${FS.LL}&v=${FS.V}`
