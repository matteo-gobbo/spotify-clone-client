import React from 'react'
import { ITrack } from './models'
import { pausePlayback, startOrResumeUserPlayback } from './service/spotify'
import { Link } from 'react-router-dom'

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
        <Link to="/track"><h3 style={{ margin: 0 }}>{track.title}</h3></Link>
        <p style={{ margin: 0 }}>{track.artist}</p>
      </div>
      <button onClick={handlePlay}>Select</button>
      <button onClick={handlePlayback}>Playback</button>
      <button onClick={handlePausePlayback}>Pause</button>
    </div>
  )
}

export default TrackSearchResult
