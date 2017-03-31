/**
 * =====================================
 * Created by Chaunjie on 17/3/31.
 * Used for About component
 * Project Verson 0.0.1
 * =====================================
 */
import React from 'react';
import ReactDom from 'react-dom';
//import ListSwipe from '../src/main';
import ListSwipe from '../lib';

const Div = <ListSwipe>
    <div className="swipe-list-view-cell">
        <div className="swipe-right-btn bg-success">
            点赞
        </div>
        <div className="swipe-right-btn bg-info" >
            正常
        </div>
        <div className="swipe-handle">
            左滑显示两个按钮
        </div>
    </div>
    <div className="swipe-list-view-cell">
        <div className="swipe-right-btn bg-success">
            点赞
        </div>
        <div className="swipe-right-btn bg-info" >
            正常
        </div>
        <div className="swipe-handle">
            左滑显示两个按钮
        </div>
    </div>
</ListSwipe>;

ReactDom.render((
    Div
), document.getElementById('app'));
