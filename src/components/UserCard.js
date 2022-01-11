import React from "react";

import{
    Card,
    CardImg,
    CardBody,
    CardText,
    CardFooter,
    Button,
} from "reactstrap"

import { TiLocationOutline } from "react-icons/ti"

import { HiOutlineUserGroup } from "react-icons/hi"

const UserCard = ( { gitUser } ) => {
    return(
        <Card className="my-4">
            <CardBody>
                <CardImg src={gitUser.avatar_url} width="100%" top/>
                <CardText className="text-warning fs-4 mt-2">{gitUser.name}</CardText>
                <CardText><TiLocationOutline  className="fs-5 text-warning"/> <span  className="fs-6">{gitUser.location}</span></CardText>
                <CardText><span className="text-warning fs-5">Available To Hire: </span>{gitUser.hireable ? "Yes" : "No" }</CardText>
            </CardBody>
            <CardFooter>
                <Button color="warning" block className="text-white">
                <span className="fs-5">Followers</span> {gitUser.followers} <HiOutlineUserGroup className="fs-5"/>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default UserCard