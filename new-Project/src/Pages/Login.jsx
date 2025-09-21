import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Form,Row,Col} from "react-bootstrap";
import "../assets/Styles/Login.css";

const Login=()=>{
    return(
        <div className="cust-container">
        <Card className="logincard">
        <Card.Header>
          <h3>Login</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            {/* Username */}
            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Col lg={12} className="mx-auto d-flex justify-content-start">
                <Form.Label>User Name:</Form.Label>
              </Col>
              <Col lg={12} className="mx-auto">
                <Form.Control type="text" placeholder="Enter username" />
              </Col>
            </Form.Group>
  
            {/* Password */}
            <Form.Group as={Row} className="mb-3" controlId="formPassword">
              <Col lg={12} className="mx-auto d-flex justify-content-start">
                <Form.Label>Password:</Form.Label>
              </Col>
              <Col lg={12} className="mx-auto">
                <Form.Control type="password" maxLength={18} placeholder="Enter password" />
              </Col>
            </Form.Group>
  
            {/* Submit Button */}
            <Row className="mt-2">
              <Col lg={12} className="d-flex justify-content-center">
                <Button type="submit" variant="primary">Login</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      </div>
    )
}

export default Login