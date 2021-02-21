import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Body, H1, H2, H3, H4, H5, H6 } from '../../components/atoms';

export const TypographyGuide = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <H1 Child={'Heading 1'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <H2 Child={'Heading 2'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <H3 Child={'Heading 3'}/>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <H4 Child={'Heading 4'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <H5 Child={'Heading 5'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <H6 Child={'Heading 6'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Body variant={'type-1'} Child={'Body 1'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Body variant={'type-2'} Child={'Body 2'}/>
                </Col>
            </Row>


        </Container>

    )
}