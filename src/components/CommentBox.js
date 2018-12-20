import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions';
//import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: '' };

    // component just rendered
    // check if user logged in
    componentDidMount() {
        // if user not logged in, navigate away
        this.shouldNavigateAway();
    }

    // component just updated
    // called whenever component receives a new set of props
    // check if user logged in
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        console.log('=> INSIDE shouldNavigateAway');
        if(!this.props.auth) {
            // react-router push - routes you want to go to
            this.props.history.push('/');
        }
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>
                Fetch Comments
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions.fetchComments, dispatch);
// }

export default connect(mapStateToProps, actions)(CommentBox);
//export default connect(null, actions)(requireAuth(CommentBox));
