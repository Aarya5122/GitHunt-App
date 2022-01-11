import React, { useContext, useState } from "react";

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter

} from "reactstrap"

import { toast } from "react-toastify";

import UserContext from "../context/UserContext";

import { Redirect } from "react-router-dom"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Signin = () => {

    const context = useContext(UserContext)

    const [ email, setEmail ] = useState("")

    const [ password, setPassword ] = useState("")

    const handleFirebase = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then( res => {
            context.setUser({
                email: res.user.email,
                uid: res.user.uid 
            })
        }
        )
        .catch( err => {
            console.error(err);
            toast(err.message, { type: "error "})
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFirebase()
    }

    if(context.user?.uid){
        return <Redirect to="/" />
    } else{
        return(
            <Container fluid>
                <Row>
                    <Col lg={6} md={8} className='offset-md-2 offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <CardHeader className="text-center text-uppercase">
                                    SignIn 
                                </CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for="emial" sm={3}>
                                            Email
                                        </Label>
                                        <Col  sm={9}>
                                            <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="password" sm={3}>
                                            Password
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button color="warning" block
                                    className="text-white"
                                    type="sbmit"
                                    >
                                        SignIn
                                    </Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Signin