import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Analytics from "./pages/Analytics";
import Savings from "./pages/Savings";
import ExpenseHistory from "./pages/ExpenseHistory";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Main App */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/add"
          element={<AddExpense />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/savings"
          element={<Savings />}
        />

        <Route
          path="/history"
          element={<ExpenseHistory />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;