import React from 'react'
import { ITrack } from './models'

const TrackSearchResult: React.FC<{ track: ITrack, chooseTrack: Function }> = ({ track, chooseTrack }) => {

  const handlePlay = (e: any) => {
    e.preventDefault()
    chooseTrack(track)
  }

  return (
    <div style={{ display: 'flex '}}>
      <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
      <div>
        <h3 style={{ margin: 0 }}>{track.title}</h3>
        <p style={{ margin: 0 }}>{track.artist}</p>
      </div>
      <button onClick={handlePlay}>Select</button>
    </div>
  )
}

export default TrackSearchResult
