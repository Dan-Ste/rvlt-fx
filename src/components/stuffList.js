import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import receiveStuff from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class StuffList extends React.Component {
  renderData() {
    return <div>{this.props.stuffs}</div>;
  }
  render() {
    console.log(this.props);
    return (
      <div className="">
          {this.props.stuffs.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

StuffList.propTypes = {
  stuffAction: PropTypes.func,
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  console.log(state);
  return {
    stuffs: state.stuffs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffAction: () => {
      dispatch(receiveStuff())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StuffList);