import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

let members = [
  {name: "reshma", job: "sd"},
  {name: "devaraj", job: "sd"},
  {name: "sri", job: "teach"},
]

function App() {
  return (
    <div>
     {members.map((m) => 
     <TeamMemberCard name={m.name} job={m.job}/>
    )}
    </div>
  )
}

export default App
