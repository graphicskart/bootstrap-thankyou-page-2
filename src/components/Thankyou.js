import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";

export default class Thankyou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      email: ""
    });
    alert("Submitted successfully!");
  };

  render() {
    return (
      <Container>
        <Col xs={12} className="text-center">
          <Row>
            <Col xs={12}>
              <h1 className="heading">Thank You</h1>
              <p className="text-one">We will be in touch shortly</p>

              <p className="text-two">
                Stay up to date with the latest in digital privacy with our
                newsletter
              </p>
              <Col xs={12} sm={{ span: 6, offset: 3 }}>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group>
                    <InputGroup>
                      <FormControl
                        type="email"
                        placeholder="Email"
                        onChange={this.onChange}
                        value={this.state.email}
                        name="email"
                        required
                      />
                      <InputGroup.Append>
                        <Button variant="primary" type="submit">
                          SUBSCRIBE
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
