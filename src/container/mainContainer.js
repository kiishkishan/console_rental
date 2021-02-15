import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Body, H1 } from '../components/atoms';

export default class MainContainer extends Component {
    render() {
        return (
            <Container>
                <H1 Child="Heading 01"/>
                <Body Child="Type 1" variant={'type-1'}/>
                <h1>srsrgg</h1>
            </Container>
        )
    }
}
