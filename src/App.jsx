import React from "react";
import "./App.css";

const players = [
  { name: "Smith Walton", number: 4 },
  { name: "Caleb Mogil", number: 7 },
  { name: "Logan Johnson", number: 8 },
  { name: "Max Gray", number: 9 },
  { name: "Aiden Wagman", number: 10 },
  { name: "Carter Zeldin", number: 16 },
  { name: "Max Winter", number: 18 },
  { name: "Eli Ruppel", number: 19 },
  { name: "Miles Wolfstadt", number: 29 },
  { name: "David Rophie", number: 33 },
  { name: "Theo Cuvelier", number: 71 },
  { name: "Harry Tkatch", number: 77 },
  { name: "Nolan Geller Copeland", number: 87 },
  { name: "Weston Goldstein", number: 88 },
  { name: "Wesley Strashin", number: 89 },
  { name: "Leo Alter", number: 97 },
];

const staff = [
  { name: "Jake Muchnik", role: "Head Coach" },
  { name: "Lee Marlowe", role: "Assistant Coach" },
  { name: "Noah Heisler", role: "Assistant Coach" },
  { name: "Jonathan Tkatch", role: "Official At-Large" },
  { name: "Corinne Geller", role: "Manager" },
  { name: "Eli Alter", role: "Trainer" },
];

export default function App() {
  const [tab, setTab] = React.useState("roster");

  const renderCards = (items, isStaff = false) =>
    items.map((item, i) => (
      <div key={i} className="rounded-xl shadow-md bg-white border-2 border-gold p-4 text-center">
        <h2 className="text-xl font-bold">{isStaff ? item.name : `#${item.number}`}</h2>
        <p>{isStaff ? item.role : item.name}</p>
      </div>
    ));

  return (
    <main className="p-6 min-h-screen font-sans bg-white text-blue-900">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-4">Forest Hill Force 2016 U10 A</h1>
      <img src="/logo.jpg" alt="Team Logo" className="mx-auto w-32 h-32 mb-6" />

      <nav className="flex justify-center space-x-4 mb-6">
        {["roster", "staff", "schedule", "photos", "videos", "stats"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-full ${
              tab === t ? "bg-gold text-white" : "bg-blue-900 text-white"
            }`}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tab === "roster" && renderCards(players)}
        {tab === "staff" && renderCards(staff, true)}
        {tab === "schedule" && (
          <div className="col-span-full text-left space-y-2">
            <p><strong>Sundays:</strong> 10:15am at Rinx (90 min) – starting Sept 7</p>
            <p><strong>Mondays:</strong> 6:00pm at Amesbury Arena (60 min) – starting Sept 22</p>
            <p className="text-gray-500 italic">Game schedule coming soon.</p>
          </div>
        )}
        {tab === "photos" && (
          <div className="col-span-full text-center text-gray-500">Photo gallery coming soon.</div>
        )}
        {tab === "videos" && (
          <div className="col-span-full text-center text-gray-500">Videos will be added shortly.</div>
        )}
        {tab === "stats" && (
          <div className="col-span-full text-center text-gray-500">Player stats will be available during the season.</div>
        )}
      </div>
    </main>
  );
}
