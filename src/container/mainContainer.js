import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Body, H1, PrimaryButton } from '../components/atoms';

export default class MainContainer extends Component {
    render() {
        return (
            <Container>
                <H1 Child="Heading 01"/>
                <Body Child="Type 1" variant={'type-1'}/>
                <PrimaryButton variant={'primary'} Child={'DONE'}/>
                <br/><br/><br/>
                <PrimaryButton variant={'secondary'} Child={'DONE'}/>
            </Container>
        )
    }
}
