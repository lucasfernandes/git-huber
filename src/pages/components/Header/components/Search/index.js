/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';

/* Redux */
import { connect } from 'react-redux';
import HubersActions from 'store/ducks/hubers';
import GithuberActions from 'store/ducks/githuber';

/* Presentational */
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './styles.css';

class Search extends Component {
  static propTypes = {
    hubersRequest: PropTypes.func.isRequired,
    githuberRequest: PropTypes.func.isRequired,
    hubers: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({ login: PropTypes.string })),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.hubersRequest = _.throttle(this.props.hubersRequest, 1000);
  }

  state = {
    user: '',
    selectedOption: '',
  }

  requestSearch = () => {
    const { user } = this.state;

    if (user === '') return;
    this.hubersRequest(user);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });

    if (selectedOption) {
      this.props.githuberRequest(selectedOption.value);
    }
  }

  render() {
    const { data, loading } = this.props.hubers;

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        className="search-select"
        optionClassName="search-option"
        name="form-field-name"
        placeholder="Pesquise um GitHuber"
        value={value}
        onChange={this.handleChange}
        isLoading={loading}
        onInputChange={(text) => {
            this.setState({ user: text });
            this.requestSearch();
        }}
        options={
          data.length > 0
            ? data.map(item =>
              ({ value: item.login, label: item.login }))
            : []
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  hubers: state.hubers,
});

const mapDispatchToProps = dispatch => ({
  hubersRequest: user => dispatch(HubersActions.hubersRequest(user)),
  githuberRequest: user => dispatch(GithuberActions.githuberRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
