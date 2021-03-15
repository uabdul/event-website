import { Switch, Route } from 'react-router-dom';
import About from './About';
import Abstracts from './Abstracts';
import Bios from './Bios';
import CallForPapers from './CallForPapers';
import Schedule from './Schedule';

function Main() {
  return (
    <div className="site-content">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/bios">
          <Bios />
        </Route>
        <Route path="/abstracts">
          <Abstracts />
        </Route>
        <Route path="/call-for-papers">
          <CallForPapers />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
