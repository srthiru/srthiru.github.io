import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from '@site/static/img/pp.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default function Profile() {
  return (
    <section className={styles.features}>
      <Container>
        <Row className='justify-content-center'>
            <Col style={{textAlign: 'center', margin: '40px'}}>
            <h2>About Me</h2>
            <p>
              Hi, my name is Thiruvenkadam.
              I am a Masters student at UIC, specializing in Machine learning and Reinforcement learning. 
              Previously, I worked as a Data scientist and a Business analyst for about 5 years, where 
              I helped clients acheive their business needs by consulting, building and productionalizing ML models, 
              developing insightful dashboards etc.
            </p>
            <p>
              I am currently also working as a Research assistant with Prof. Sidiropoulos at UIC. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
