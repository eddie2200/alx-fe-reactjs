import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <UserProfile
        name="John"
        age="30"
        bio="Enjoys coding and traveling"
      />
    </div>
  );
}

export default App;

