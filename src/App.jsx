import React, { useState } from 'react';

const tabs = ['Roster', 'Schedule', 'Staff', 'Stats', 'Pictures', 'Videos'];

const content = {
  Roster: (
    <ul>
      {[
        'Smith Walton (#4)', 'Caleb Mogil (#7)', 'Logan Johnson (#8)', 'Max Gray (#9)',
        'Aiden Wagman (#10)', 'Carter Zeldin (#16)', 'Max Winter (#18)', 'Eli Ruppel (#19)',
        'Miles Wolfstadt (#29)', 'David Rophie (#33)', 'Theo Cuvelier (#71)', 'Harry Tkatch (#77)',
        'Nolan Geller Copeland (#87)', 'Weston Goldstein (#88)', 'Wesley Strashin (#89)', 'Leo Alter (#97)'
      ].map(name => <li key={name}>{name}</li>)}
    </ul>
  ),
  Schedule: (
    <p>
      Sundays @ 10:15 AM – Rinx (90 min) starting Sept 7<br />
      Mondays @ 6:00 PM – Amesbury (60 min) starting Sept 22
    </p>
  ),
  Staff: (
    <ul>
      <li>Head Coach: Jake Muchnik</li>
      <li>Assistant Coaches: Lee Marlowe, Noah Heisler</li>
      <li>Trainer: Eli Alter</li>
      <li>Manager: Corinne Geller</li>
      <li>Official At-Large: Jonathan Tkatch</li>
    </ul>
  ),
  Stats: <p>Stats will be updated once the season begins.</p>,
  Pictures: <p>Gallery coming soon!</p>,
  Videos: <p>Video highlights will be added here.</p>
};

export default function App() {
  const [active, setActive] = useState('Roster');

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <img src='/logo.jpg' alt='Logo' style={{ width: 100, margin: '20px auto' }} />
      <h1>Forest Hill Force 2016 U10 A</h1>
      <nav style={{ marginBottom: 20 }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)} style={{ margin: 5 }}>
            {tab}
          </button>
        ))}
      </nav>
      <div>{content[active]}</div>
    </div>
  );
}
