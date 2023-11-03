import React from 'react'

const MemberCard = (props) => {
    return (
        <tr className='border-bottm'> 
            <td>{props.index}</td>
            <td>{props.name}</td>
        </tr>
    )
}

export default MemberCard