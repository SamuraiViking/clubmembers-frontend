import React from 'react'
import Button from 'react-bootstrap/Button';

const ClubMember = (props) => {
    return (
        <div className="club-member">
            <h2>{props.display_name}</h2>
            <p>{props.email}</p>
            <div className="photo-container">
                <img src={props.photo} alt="Club Member"/>
            </div>
            <Button>Contact</Button>
        </div>
    )
}

export default ClubMember