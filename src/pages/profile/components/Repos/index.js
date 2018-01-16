/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import './styles.css';

const Repos = ({ repos }) => (
  <div className="repos-container">
    {repos.map(repo => (
      <a href={repo.html_url} target="_blank" key={repo.id}>
        <div className="repo">
          <div>{repo.name}</div>
        </div>
      </a>
    ))}
  </div>
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default Repos;
