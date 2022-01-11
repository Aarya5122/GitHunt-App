import React, { useState, useContext } from "react";

import{
    Container,
    Row,
    Col,
    InputGroup,
    Input,
    Button
} from "reactstrap"

import Axios from "axios"

import { toast } from "react-toastify";

import UserCard from "../components/UserCard";

import UserRepos from "../components/UserRepos";

import UserContext from "../context/UserContext"

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

    const context= useContext(UserContext)

    const [ query, setQuery ] = useState('')

    const [ gitUser, setGitUser ] = useState(null)

    const fetchDetails = async() => {
        try{
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setGitUser(data)
        } catch(error) {
            toast("User Not Found", { type: "error" })
        }
    }

    if(context.user?.uid){
        return(
            <Container fluid>
                <Row>
                    <Col md={8} className="mt-5 offset-md-2">
                        <InputGroup onSubmit={fetchDetails}>
                            <Input className="text-center"
                            type="text"
                            name="gitUser"
                            id="gitUser"
                            placeholder="Enter the username"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            />
                            <Button color="warning"
                            className="text-white px-4"
                            onClick={fetchDetails}>
                                Fetch
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        {
                            gitUser ? (
                                <UserCard gitUser={gitUser} />
                            ) : (null)
                        }
                    </Col>
                    <Col>
                        {
                            gitUser ? (
                                <UserRepos repos_url={ gitUser.repos_url }/>
                            ) : (null)
                        }
                    </Col>
                </Row>
            </Container>
        ) 
    } else {
       return <Redirect to="/signin" />
    }

}

export default Home