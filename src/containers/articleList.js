import { Component } from 'react';
import { connect } from 'react-redux';

class VisibleArticleList extends Component {
  render() {
    return '<div>aaa</>';
  }
}

const mapStateToProps = (state) => ({
  articles: []
});

export default connect(mapStateToProps)(VisibleArticleList);
