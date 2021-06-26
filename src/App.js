// * Styling
import "./App.css";

// * Components
import AppFrame from "./components/AppFrame";
import Layout from "./components/Layout";

// * Context
import { AuthProvider } from "./context/AuthContext";

// * Router
import Router from './router'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Router/>
      </Layout>
    </AuthProvider>
  );
}

export default App;
