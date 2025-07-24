import React, { useState } from 'react'
import Header from './components/Header'
import MatchList from './components/MatchList'

const App = () => {
  const [matches, setMatches] = useState([])
  const [teamA, setTeamA] = useState('')
  const [teamB, setTeamB] = useState('')

  const addMatch = () => {
    if (!teamA.trim() || !teamB.trim()) {
      alert('Please enter both team names.')
      return
    }

    const newMatch = {
      id: Date.now(),
      teamA,
      teamB,
      date: new Date().toLocaleString(),
    }

    setMatches([newMatch, ...matches])
    setTeamA('')
    setTeamB('')
  }

  return (
    <div className="app">
      <Header />
      <div className="form-section">
        <input
          type="text"
          placeholder="Team A"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
        />
        <span className="vs">vs</span>
        <input
          type="text"
          placeholder="Team B"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
        />
        <button onClick={addMatch}>➕ Add Match</button>
      </div>
      <MatchList matches={matches} />
    </div>
  )
}

export default App
