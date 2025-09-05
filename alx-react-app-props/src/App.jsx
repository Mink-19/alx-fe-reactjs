// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; 

function App() {
  // User data to be shared via context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide userData to all child components using UserContext
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;





