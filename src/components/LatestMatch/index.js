// Write your code here
const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-matches-container">
      <div className="competing-team-container">
        <h1>{competingTeam}</h1>
        <h2>{date}</h2>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt="competingTeam"
        className="competing-team-logo"
      />
      <div className="innings-details-container">
        <h3>First innings</h3>
        <p>{firstInnings}</p>
        <h3>Second innings</h3>
        <p>{secondInnings}</p>
        <h3>Man Of The Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
