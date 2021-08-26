import React, { useEffect, useState } from 'react'
import useAuth from './hooks/useAuth'
import SpotifyWebApi from "spotify-web-api-node"
import TrackSearchResult from './TrackSearchResult'
import { ITrack } from './models'


const spotifyApi = new SpotifyWebApi({
  clientId: '5e7d5adf318149c7b94320bf80a9daf0',
})

const Dashboard: React.FC<{ code: string }> = ({ code }) => {

  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState<Array<ITrack>>([])
  const accessToken = useAuth(code)

  console.log(searchResults)

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken ?? "")
  }, [accessToken])

  useEffect(() => {
    if(!searchText) return setSearchResults([])
    if(!accessToken) return;

    spotifyApi.searchTracks(searchText).then((res) => {
      const searchResultsTemp = res.body.tracks?.items.map((track) => {

        const smallestAlbumImage = track.album.images.reduce(
          (smallest, currentImage) => {
            if((currentImage?.height ?? 0) < (smallest?.height ?? 0))
              return currentImage
            else
              return smallest

        }, track.album.images[0])

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      })

      setSearchResults(searchResultsTemp ?? [])
    })
  }, [searchText, accessToken])

  return (
    <div>
      Dashboard
      <input 
        type="text" 
        placeholder="Search Songs/Artists"
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}/>
      <h1>Tracks</h1>
      {searchResults && searchResults.map((track) => {
        return <TrackSearchResult key={track.uri} track={track}/>
      })}
    </div>
  )
}

export default Dashboard
