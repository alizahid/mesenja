import React, { FunctionComponent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useRouter from 'use-react-router'

import { Team } from '../../store/models/teams'

import { Avatar } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const buildPath = (team: Team, current: undefined | Team, path: string) => {
  if (current) {
    return path.replace(current.id, team.id)
  }

  return `/teams/${team.id}`
}

const TeamSwitcher: FunctionComponent = () => {
  const current = useStore(state => state.nav.team)
  const teams = useStore(state => state.teams.teams)

  const [visible, setVisible] = useState(false)

  const {
    location: { pathname }
  } = useRouter()

  return (
    <div className="team-switcher">
      <button onClick={() => setVisible(!visible)} />
      {visible && (
        <div onClick={() => setVisible(false)}>
          <section>
            {teams.map((team, index) => (
              <NavLink key={index} to={buildPath(team, current, pathname)}>
                <Avatar data={team} />
                {team.name}
              </NavLink>
            ))}
          </section>
        </div>
      )}
    </div>
  )
}

export default TeamSwitcher
