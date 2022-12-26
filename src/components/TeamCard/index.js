// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamData} = props
  const {name, id, teamImageUrl} = eachTeamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item-container">
      <li className="link-item" key={id}>
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="teams-heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
