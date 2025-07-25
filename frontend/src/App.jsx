import React, { useState } from 'react'
import Header from './components/Header'
import TrainList from './components/TrainList'

const App = () => {
  const [trainNumber, setTrainNumber] = useState('')
  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [tickets, setTickets] = useState([])

  const addTicket = () => {
    if (!trainNumber.trim() || !fromStation.trim() || !toStation.trim()) {
      alert('Please fill in all fields.')
      return
    }

    const newTicket = {
      id: Date.now(),
      trainNumber,
      fromStation,
      toStation,
      date: new Date().toLocaleString(),
    }

    setTickets([newTicket, ...tickets])
    setTrainNumber('')
    setFromStation('')
    setToStation('')
  }

  return (
    <div className="app">
      <Header />
      <div className="form-section">
        <input
          type="text"
          placeholder="Train Number"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="From Station"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
        />
        <input
          type="text"
          placeholder="To Station"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
        />
        <button onClick={addTicket}>➕ Add Ticket</button>
      </div>
      <TrainList tickets={tickets} />
    </div>
  )
}

export default App
