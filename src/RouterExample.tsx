import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Cookie from "js-cookie";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const token = Cookie.get("token");
      const baseUrl = "http://localhost:9000/.netlify/functions/api/things";
      const params = { headers: { token } };
      try {
        const response = await fetch(baseUrl, params as any);
        if (!response.ok) {
          throw new Error("Sanya hui sosi");
        }
        const data = await response.json();
        setPosts(data.map((post: { title: string }) => post.title));
      } catch (error) {
        console.log(error);
        const token = prompt("Введите пароль");
        if (!!token) {
          Cookie.set("token", token);
        }
      }
    })();
  }, []);
  return (
    <div>
      <h2>Home</h2>
      {posts.map((post) => (
        <p key={post}>{post}</p>
      ))}
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

interface topicId {
  topicId: string;
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams<topicId>();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
