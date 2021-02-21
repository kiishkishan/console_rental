import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PrimaryButton } from '../../components/atoms';

export const TypographyGuide = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <PrimaryButton variant={''} Child={'Primary'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <secondaryButton variant={''} Child={'Secondary'}/>
                </Col>
            </Row>
        </Container>

    )
}