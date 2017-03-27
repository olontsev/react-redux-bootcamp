import React, { Component } from 'react';

import HeaderPanel from '../components/HeaderPanel';
import CategoriesContainer from './CategoriesContainer';
import TasksPanel from '../components/TasksPanel';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';
import '../styles/bootstrap.theme.css';
import '../styles/components.css';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col>
            <HeaderPanel />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar bsStyle="success" now={10} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={5} md={5}>
            <CategoriesContainer />
          </Col>
          <Col xs={7} md={7}>
            <TasksPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}