const MatchCard = props => {
  const {eachRecentMatch} = props
  const {
    recentResult,
    recentId,
    recentCompetingTeam,
    recentCompetingTeamLogo,
    recentMatchStatus,
  } = eachRecentMatch

  return (
    <li className="recent-matches-each-container" key={recentId}>
      <img
        src={recentCompetingTeamLogo}
        alt={recentCompetingTeam}
        className="recent-match-team-logo"
      />
      <h2>{recentCompetingTeam}</h2>
      <p>{recentResult}</p>
      <h3>{recentMatchStatus}</h3>
    </li>
  )
}

export default MatchCard
