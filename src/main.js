/**
 * =====================================
 * Created by Chaunjie on 17/3/31.
 * Used for About component
 * Project Verson 0.0.1
 * =====================================
 */
import React from 'react';
import ReactDom from 'react-dom';
import ListSwipe from './plugin/listSwiper';

import './listSwiper.less';
export default class ListSwiper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        const swipe = new ListSwipe.ListSwipe();
    }

    componentWillReceiveProps() {

    }

    render() {
        return (
            <div className="swipe-view-container aui-in">{this.props.children}</div>
        )
    }
}
