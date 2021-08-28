import React from 'react'
import { ITrack } from './models'
import { pausePlayback, startOrResumeUserPlayback } from './service/spotify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectTrack } from './redux/slice/currentTrackSlice'

interface TrackSearchResultProps {
  track: ITrack
  chooseTrack: Function
  accessToken: string
}

const TrackSearchResult: React.FC<TrackSearchResultProps> = ({ track, chooseTrack, accessToken }) => {

  const dispatch = useDispatch()

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    chooseTrack(track)
    dispatch(selectTrack(track))
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
      <button onClick={handleSelect}>Select</button>
      <button onClick={handlePlayback}>Playback</button>
      <button onClick={handlePausePlayback}>Pause</button>
    </div>
  )
}

export default TrackSearchResult
