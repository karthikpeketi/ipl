// Write your code here
import {Component} from 'react'

import './index.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const ObjToCamelCase = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recentMatches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = ObjToCamelCase
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    // console.log(updatedLatestMatchDetails)

    const updatedRecentMatches = recentMatches.map(each => ({
      recentUmpires: each.umpires,
      recentResult: each.result,
      recentManOfTheMatch: each.man_of_the_match,
      recentId: each.id,
      recentDate: each.date,
      recentVenue: each.venue,
      recentCompetingTeam: each.competing_team,
      recentFirstInnings: each.firstInnings,
      recentSecondInnings: each.second_innings,
      recentMatchStatus: each.match_status,
    }))
    // console.log(updatedRecentMatches)

    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
    console.log('state check')
  }

  render() {
    const {bannerUrl, latestMatchDetails, recentMatches, isLoading} = this.state
    console.log(this.state)
    return (
      <div className="team-matches-container">
        <img src={bannerUrl} alt="team banner" className="team-banner-img" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchDetails={latestMatchDetails}
        />
        <ul className="recent-matches-container">
          {recentMatches.map(each => (
            <MatchCard eachRecentMatch={each} key={each.id} />
          ))}
        </ul>
        <p>{isLoading}</p>
      </div>
    )
  }
}

export default TeamMatches
