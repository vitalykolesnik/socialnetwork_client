import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllPosts } from 'redux/profileSelectors';
import { requestAllPosts } from './../../redux/profileReduser';
import AllNews from './AllNews';

class NewsContainer extends React.PureComponent {
    componentDidMount() {
        this.props.requestAllPosts();
    }
    render() {
        return <AllNews allPosts={this.props.allPosts} />;
    }
}

const mapStateToProps = (state) => {
    return {
        allPosts: getAllPosts(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        requestAllPosts,
    })
)(NewsContainer);
