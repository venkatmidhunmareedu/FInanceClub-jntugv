import React, { useEffect, useState } from 'react'
import DraftCard from './DraftCard';
import axios from 'axios';
import Loader from '../loaders/Loader';


const Drafts = () => {
  const [drafts, setDrafts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const retriveDrafts = async () => {
      const params = {
        token: localStorage.getItem("jwtToken")
      }
      setLoading(true);
      const Response = await axios.get(`${process.env.REACT_APP_URL}/user/getdrafts`, { params });
      setDrafts(Response.data.drafts);
      console.log(drafts)
      setLoading(false);
    }
    console.log("hit");
    retriveDrafts();
  }, [])
  return (
    <div>
      {
        isLoading ? <Loader /> :
          drafts.map((draft) => {
            return <DraftCard title={draft.title} blogid={draft._id} />
          })
      }
    </div>
  )
}

export default Drafts