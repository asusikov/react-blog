import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

const { Component } = React;

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
  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    });
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div ref="chart" />
    );
  }
}

export default PieChart;
