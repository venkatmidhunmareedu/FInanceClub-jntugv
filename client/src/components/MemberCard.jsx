import React from 'react'

const MemberCard = (props) => {
    return (
        <tr className='border-bottm'> 
            <td>{props.index}</td>
            <td>{props.name}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default MemberCard