import React, { Component } from 'react';
import ShowPosts from './ShowPosts';
import RegisterPost from './RegisterPost';

function RenderNavigation ({selectedTab}) {
    
    if (selectedTab == 'register') {
        return (<RegisterPost/>);
    } else
        return (<ShowPosts/>);

}

export default RenderNavigation;