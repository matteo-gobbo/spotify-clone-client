import axios from "axios"

/**
 * @description Get information about the user’s current playback state, including track or episode, progress, and active device.
 * @param accessToken 
 */
export const currentPlayback = async (accessToken: string): Promise<void> => {
  const response = await axios.get('https://api.spotify.com/v1/me/player', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  console.log(response)
}

/**
 * @description Start a new context or resume current playback on the user’s active device.
 * @param accessToken 
 * @param trackUri 
 */
export const startOrResumeUserPlayback = async (accessToken: string, trackUri: string): Promise<void> => {
  const response = await axios.put('https://api.spotify.com/v1/me/player/play', {
    "uris": [`${trackUri}`],
    "position_ms": 0
  }, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  console.log(response)
}

/**
 * @description Pause playback on the user’s account.
 * @param accessToken 
 */
export const pausePlayback = async (accessToken: string): Promise<void> => {
  const response = await axios.put('https://api.spotify.com/v1/me/player/pause', {}, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  console.log(response)
}