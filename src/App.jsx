import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { InteractionProvider } from './context/InteractionContext';
import Home from './views/Home';
import Login from './views/Login';
import Post from './views/Post';
import ViewEverything from './views/ViewEverything';

export default function App() {
  return (
    <main>
      <AuthProvider>
        <InteractionProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/post">
                <Post />
              </PrivateRoute>
              <PrivateRoute path="/all">
                <ViewEverything />
              </PrivateRoute>
              <PrivateRoute path="/all/:id">
                <ViewEverything />
              </PrivateRoute>
            </Switch>
          </Router>
        </InteractionProvider>
      </AuthProvider>
    </main>
  );
}
