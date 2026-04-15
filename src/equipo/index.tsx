import { useParams } from "react-router";
import { useState, useEffect } from 'react'

interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}

function Equipo() {
  const [teamData, setTeamData] = useState<TeamData | null>(null)
  const { equipo } = useParams<{ equipo: string }>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/sdtibata/dataliga/main/${encodeURIComponent(equipo || "")}.json`
        )
        const data = await res.json()

        setTeamData(data)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    if (equipo) fetchData()
  }, [equipo])

  if (!teamData) return <p>Cargando...</p>;

  return (
    <>
      <h1>{teamData.team.name}</h1>
      <p>Ciudad: {teamData.team.info.city}</p>
      <p>Estadio: {teamData.team.info.stadium}</p>
    </>
  )
}

export default Equipo