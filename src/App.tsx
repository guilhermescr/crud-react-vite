import Users from './Users';
import { UserProvider } from './provider/UserProvider';
import './global.css';

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
