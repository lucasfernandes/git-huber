/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import HuberActions from 'store/ducks/huber';

/* Presentational */
import * as Octicons from 'react-icons/lib/go';

import './styles.css';

class Search extends Component {
  static propTypes = {
    huberRequest: PropTypes.func.isRequired,
  };

  state = {
    user: '',
  }

  search = () => {
    const { user } = this.state;

    if (user === '') return;

    this.props.huberRequest(user);
    this.setState({ user: '' });
  }

  render() {
    return (
      <div className="searchContainer">
        <input
          type="text"
          className="search"
          value={this.state.user}
          placeholder="Search for a Githuber"
          onChange={text => this.setState({ user: text.target.value })}
        />

        <Octicons.GoSearch
          className="button"
          size={16}
          onClick={this.search}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  huber: state.huber,
});

const mapDispatchToProps = dispatch => ({
  huberRequest: user => dispatch(HuberActions.huberRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
