import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";

import Writer from "./Writer";

// In this component Im rendering some routes
function Writers({ match: { url }, authors }) {
  return (
    <Fragment>
      <ul>
        {authors.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`${url}/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>

      <Route
        exact
        path={url}
        render={() => <h3>Please select a writer from above.</h3>}
      ></Route>

      <Route
        path={`${url}/:authorId`}
        render={props => {
          // IMPORTANT: "props" here are "history", "location", and "match"
          const author = authors.find(
            item => item.id === parseInt(props.match.params.authorId)
          );
          if (!author) {
            return <div>Not found</div>;
          }
          return <Writer {...author} />;
        }}
      ></Route>
    </Fragment>
  );
}

export default Writers;
