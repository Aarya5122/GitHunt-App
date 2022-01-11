import React, { useState, useEffect } from "react"

import Axios from "axios"

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardText
} from "reactstrap"

const UserRepos = ({repos_url}) => {

    const [ repos, setRepos ] = useState([])

    const fetchRepos = async() => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
        console.log(data);
    }

    useEffect(
        ()=>(
            fetchRepos()
        ), [repos_url]
    )

    return(
        <Container fluid className="my-4">
            <Row>
                {
                    repos.map(
                        (repo) => (
                            <Col md={6} className="my-2">
                                <Card key={repo.id} className="border-warning">
                                    <CardHeader className="text-warning text-uppercase text-center">
                                        {repo.name}
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                        <span className="text-warning">Languages: </span>{repo.language}
                                        </CardText>
                                         <CardText>
                                            <span className="text-warning">Visibility: </span>{repo.visibility}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    )
                }
            </Row>
        </Container>
    )

}

export default UserRepos