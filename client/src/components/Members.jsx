import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MemberCard from './MemberCard';

const Members = () => {
    const [isLoading, setisLoaded] = useState(false);
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setisLoaded(true)
                const Response = await axios.get(`${process.env.REACT_APP_URL}/getmembers`)
                setMembers(Response.data.members)
                setisLoaded(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className='container bg-white p-4 open-sans col-sm-12'>
            <table className="table col-lg-6 col-sm-12 text-center">
                <tr className='color-1 fw-bold'>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                </tr>
                <div className='mb-2'></div>
                <tbody>
                    {
                        members.map((member,index) => <MemberCard name={member.user_name} role={member.role} index={index + 1} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Members