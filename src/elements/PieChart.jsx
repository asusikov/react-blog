import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import c3 from 'c3';

class PieChart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type: 'pie',
        columns: this.props.columns
      }
    });
  }
  componentDidUpdate() {
    this.chart.load({
      columns: this.props.columns
    });
  }
  componentWillUnmount() {
    this.chart = this.chart.destroy();
  }
  render() {
    return (
      <div ref="chart" />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};


export default PieChart;
