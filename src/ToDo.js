import { React, useState } from 'react';

import "./style/to.css";
function ToDo() {
    const [activity, setActivity] = useState("");
    const [list, setList] = useState([]);
    function update() {
        // setList([...list, activity]);
        // console.log(list);
        setList((list) => {
            const updated = [...list, activity];
            console.log(updated);
            setActivity('');
            return updated;
        })
    }
    function remove(i) {
        const removeUpdate = list.filter((ele, id) => {
            return i != id;
        })
        setList(removeUpdate);
    }
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <h1>ToDo List</h1>
                </div>
                <div id='newtask'>
                    <input type='text' placeholder="enter a task" value={activity} onChange={(e) => setActivity(e.target.value)} />
                    <button id='push' onClick={update}>Add</button>
                </div>
                {list != [] && list.map((data, i) => {
                    return (
                        <>

                            <p key={i} id="newtask">
                                <p className='list' >{data}</p>
                                 <button onClick={() => { remove(i) }}  >remove</button>
                            </p>

                        </>
                    )
                })}

                {list.length >= 1 && 
                <button onClick={() => { setList('');}} className='butt'>Remove All</button>
                }

            </div>
        </>
    );
}
export default ToDo;