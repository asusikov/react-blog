import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor() {
    super(...arguments);

    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ value: this.props.query || '' });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({ value: this.props.query || '' });
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const queryParams = this.state.value ? { query: this.state.value } : {};
    this.props.redirectToPosts(queryParams);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label>
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  redirectToPosts: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default SearchForm;
