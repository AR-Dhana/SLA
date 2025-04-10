import React, { useEffect, useState } from 'react'

export const LocalStore = () => {

    const [user, setUser] = useState("");

    const [result, setGet] = useState("");

    const addEvent = () => {
        localStorage.setItem('Name', user);
        setUser("");
        getEvent();
    }
    const removeEvent = () => {
        localStorage.removeItem('Name');
        getEvent();
    }

    const getEvent = () => {
        setGet(localStorage.getItem('Name'));
    }

    useEffect(() => {
        getEvent();
    }, [])

    return (
        <>
            <h1>Local Storage - demo</h1>
            <p>Browser Storage with localstorage</p>
            <div>
                <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input><br /><br />
                <p>
                    <i>Note : </i>
                    Open Inspect, go to application then click the local Storage session the data will be stored and get from there.
                </p>
                <button onClick={addEvent}>Save</button>&nbsp;&nbsp;
                <button onClick={removeEvent}>Clear</button>&nbsp;&nbsp;
                <button onClick={getEvent}>Get</button><br /><br />
                <h6>{(result) ? `Data from local Storage --> ${result}` : 'local storage is empty save something'}</h6>
            </div>
        </>
    )
}