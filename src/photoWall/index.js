import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/gallery/gallery';
import actions from '../actions';

class PhotoWall extends Component {
    constructor(props) {
        super(props);
        this.id = props.location && props.location.state && props.location.state.id;
    }

    componentDidMount() {
        this.props.dispatch(actions.PhotoWall.fetchPhotoWallByIdStart(this.id));
    }
    render() {
        return <Gallery />;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    dispatch
});

const PhotoWallContanier = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoWall);

export default PhotoWallContanier;
