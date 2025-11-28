import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Social from './pages/projects/Social';
import Web from './pages/projects/Web';
import Brand from './pages/projects/Brand';
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-root">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/projects/social" component={Social} />
                        <Route path="/projects/web" component={Web} />
                        <Route path="/projects/brand" component={Brand} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;