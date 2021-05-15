import React, {useState, useEffect} from 'react';
import RobotCard from './RobotCard';
import "./Robots.scss";
import Search from './Search';


const USERS_API='https://jsonplaceholder.typicode.com/users';
//const IMG_API= `https://robohash.org/${name}.png`;



const Robots = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    const handleChange=(e)=> {
        setSearchTerm(e.target.value)
    }

    // const getData=(API)=> {
    //     fetch(API)
    //     .then(response => response.json())
    //     .then(data => {
    //         setUsers(data);
    //         //console.log(data)
    //     })
    // }
    
    useEffect(()=>{
        fetch(USERS_API)
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            //console.log(data)
        })
      },[]);

   //console.log(users.map(user=>user.name));
   const filteredRobots=users.filter((user)=>user.name.toLowerCase().includes(searchTerm.toLowerCase()));
   console.log(filteredRobots);

    return (
        <>
        <Search id='search' type='text' placeholder='Search...' value={searchTerm} onChange={handleChange}>search</Search>
        <div className="robots">
           {filteredRobots.map(user=> {
               return (
                   <RobotCard key={user.id} name={user.name} email={user.email} image={`https://robohash.org/${user.name}.png`}/>
               );
           })}
        </div>
        </>
        
    )
}

export default Robots
