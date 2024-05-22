import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())  // Parse the JSON data from the response
      .then(data => setBackendData(data)) // Update state with the parsed data
      .catch(error => console.error('Error fetching data:', error));  // Handle errors
  }, []);

  return (
    <div>
      {backendData.users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
