import React from 'react'
import Member from './Member'


const Group = (props) => {
    return (
        <div className="club-members">
            {
                props.members.map(member => 
                    <Member
                        key={member.id}
                        name={member.name}
                        email={member.email}
                        photo={member.photo}
                    />
                )
            }
        </div>
    )
}

export default Group