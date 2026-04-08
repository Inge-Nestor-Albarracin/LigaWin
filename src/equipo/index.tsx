import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {useParams} from "react-router"
import "./style.css"

interface Ranking {
  rank: number
  contestantName: string
  points: number
  matchesPlayed: number
}

interface TeamData(

)

function Equipo(){
    const [ranking, setRanking] = useState<Ranking[]>([])
    
     useEffect(() => {
       const fetchData = async () => {
         try {
           const res = await fetch('https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json')
           const data = await res.json()
   
           setRanking(data.standings[0].ranking)
         } catch (error) {
           console.error('Error cargando datos:', error)
         }
       }
   
       fetchData()
     }, [])
     if (!ranking) return <p>Cargando....</p>
    return(
        <>
        <p>Estamos en equipo</p>
        
        </>
    )
}

export default Equipo