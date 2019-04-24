import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const Home: FunctionComponent = () => {
  const teams = useStore(state => state.teams.teams)

  return (
    <main className="home">
      <h1>Teams</h1>
      {teams.map((team, index) => (
        <article key={index}>
          <Link to="/posts">
            <Avatar data={team} />
            {team.name}
          </Link>
        </article>
      ))}
    </main>
  )
}

export default Home
