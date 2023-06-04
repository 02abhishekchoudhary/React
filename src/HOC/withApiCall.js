import React, { useEffect, useState } from 'react'

const withApiCall = (WrappedCommponent, type) => () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  },[type])

  return (
    <div>
      <WrappedCommponent data={data} />
    </div>
  )
}

export default withApiCall