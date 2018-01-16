/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import loadingSVG from 'assets/images/blocks.svg';

import * as Octicons from 'react-icons/lib/go';

import Repos from './components/Repos';

import './styles.css';

const renderProfile = (huber, repos) => (
  <div className="profileContainer">
    <div className="avatar-container">
      <img className="avatar" src={huber.avatar_url} alt="avatar" />
    </div>
    <div className="profile-info">
      <div className="name">{huber.name}</div>
      <div className="login">{huber.login}</div>
      <div className="numbersContainer">
        <div>Repos: <span>{huber.public_repos}</span></div>
        <div>Followers: <span>{huber.followers}</span></div>
        <div>Following: <span>{huber.following}</span></div>
      </div>
    </div>
    { huber.bio && <div className="bio">{huber.bio}</div> }
    <Repos repos={repos} />
  </div>
);

const renderLoading = () => (
  <img src={loadingSVG} alt="loading" />
);

const renderEmpty = () => (
  <div className="empty">
    <Octicons.GoOctoface size={160} />
    <div>Pesquise por um GitHuber</div>
  </div>
);

const renderError = () => (
  <div className="error">
    <Octicons.GoAlert size={160} />
    <div>GitHuber não encontrado</div>
  </div>
);

const Profile = ({
  huber: {
    data,
    repos,
    error,
    loading,
  },
}) => {
  if (loading) return renderLoading();
  if (error) return renderError();
  if (data) return renderProfile(data, repos);
  return renderEmpty();
};

Profile.propTypes = {
  huber: PropTypes.shape({
    data: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      login: PropTypes.string,
      public_repos: PropTypes.number,
      followers: PropTypes.number,
      following: PropTypes.number,
    }),
  }).isRequired,
};


const mapStateToProps = state => ({
  huber: state.huber,
});

export default connect(mapStateToProps)(Profile);
