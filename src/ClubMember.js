import React from 'react'

const ClubMember = (props) => {
    return (
        <div className="club-member">
            <h2>{props.display_name}</h2>
            <p>{props.email}</p>
            <div className="photo-container">
                <img src={props.photo} alt="Club Member"/>
            </div>
        </div>
    )
}

export default ClubMember