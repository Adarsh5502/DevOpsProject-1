import React from 'react'

const TrainList = ({ tickets }) => {
  if (!tickets.length) {
    return <p className="empty">No tickets added yet. Start tracking your train journeys!</p>
  }

  return (
    <div className="match-list">
      <h2>📋 Booked Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <div className="match-card">
              <span className="teams">
                Train {ticket.trainNumber}: {ticket.fromStation} ➡️ {ticket.toStation}
              </span>
              <span className="date">{ticket.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrainList
