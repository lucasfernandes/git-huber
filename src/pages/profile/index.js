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

const renderProfile = (githuber, repos) => (
  <div className="profile-container">
    <div className="avatar-container">
      <img className="avatar" src={githuber.avatar_url} alt="avatar" />
    </div>
    <div className="profile-info">
      <div className="name">{githuber.name}</div>
      <div className="login">{githuber.login}</div>
      <div className="numbersContainer">
        <div>Repos: <span>{githuber.public_repos}</span></div>
        <div>Followers: <span>{githuber.followers}</span></div>
        <div>Following: <span>{githuber.following}</span></div>
      </div>
    </div>
    { githuber.bio && <div className="bio">{githuber.bio}</div> }
    <Repos repos={repos} />
  </div>
);

const renderLoading = () => (
  <img src={loadingSVG} alt="loading" />
);

const renderEmpty = () => (
  <div className="empty">
    <Octicons.GoOctoface size={160} />
    <div>Quer saber o que os devs andam fazendo?</div>
    <div className="sub">Pesquise sobre um GitHuber</div>
  </div>
);

const renderError = () => (
  <div className="error">
    <Octicons.GoAlert size={160} />
    <div>GitHuber não encontrado</div>
  </div>
);

const Profile = ({
  githuber: {
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
  githuber: PropTypes.shape({
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
  githuber: state.githuber,
});

export default connect(mapStateToProps)(Profile);
