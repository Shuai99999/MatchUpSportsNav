import "./App.css";

function App() {
  const links = [
    {
      title: "User Mobile (Web Simulation)",
      url: "https://matchupsportsmobile.netlify.app/",
    },
    {
      title: "Merchant Mobile (Web Simulation)",
      url: "https://matchupsportsmobilemerchant.netlify.app/",
    },
    {
      title: "User Web",
      url: "https://matchupsportsweb.netlify.app/",
    },
    {
      title: "Merchant Web",
      url: "https://matchupsportswebmerchant.netlify.app/",
    },
  ];

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">
          <span>MatchUpSports</span>
          <span>Navigation</span>
        </h1>
        <p className="subtitle">MatchUpSports Demo Links</p>

        <div className="link-list">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              {link.title}
            </a>
          ))}
        </div>

        <p className="note">
          Note: The two mobile versions are web-based simulations of the mobile
          application, so the map feature is not available in these versions.
        </p>
      </div>
    </div>
  );
}

export default App;
