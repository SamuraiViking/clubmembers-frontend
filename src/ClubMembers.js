import React from 'react'
import ClubMember from './ClubMember'


const ClubMembers = (props) => {
    return (
        <div className="club-members">
            {
                props.clubMembers.map(clubMember => 
                    <ClubMember
                        key={clubMember.id}
                        display_name={clubMember.display_name}
                        email={clubMember.email}
                        photo={clubMember.photo}
                    />
                )
            }
        </div>
    )
}

export default ClubMembers