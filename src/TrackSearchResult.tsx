import React from 'react'
import { ITrack } from './models'
import { currentPlayback, pausePlayback, startOrResumeUserPlayback } from './service/spotify'

const TrackSearchResult: React.FC<{ track: ITrack, chooseTrack: Function, accessToken: string }> = 
  ({ track, chooseTrack, accessToken }) => {

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    chooseTrack(track)
  }

  const handlePlayback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await startOrResumeUserPlayback(accessToken, track.uri)
  }

  const handlePausePlayback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await pausePlayback(accessToken)
  }

  return (
    <div style={{ display: 'flex '}}>
      <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
      <div>
        <h3 style={{ margin: 0 }}>{track.title}</h3>
        <p style={{ margin: 0 }}>{track.artist}</p>
      </div>
      <button onClick={handlePlay}>Select</button>
      <button onClick={handlePlayback}>Playback</button>
      <button onClick={handlePausePlayback}>Pause</button>
    </div>
  )
}

export default TrackSearchResult
