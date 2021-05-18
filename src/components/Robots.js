import React, {useState, useEffect} from 'react';
import RobotCard from './RobotCard';
import "./Robots.scss";
import Search from './Search';


const USERS_API='https://jsonplaceholder.typicode.com/users';

const Robots = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm]=useState('');
    const [isLoading, setIsLoading]=useState(true);

    const handleChange=(e)=> {
        setSearchTerm(e.target.value)
    }
    
    useEffect(()=>{
        fetch(USERS_API)
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setIsLoading(false);
        })
      },[]);
   const filteredRobots=users.filter((user)=>user.name.toLowerCase().includes(searchTerm.toLowerCase()));
 
    return (
        <>
            {isLoading?
            <p className='load'>Loading...</p>
        :
            <>
                <p className='title'>MY ROBOT FRIENDS</p>
                <Search id='search' type='text' placeholder='Search...' value={searchTerm} onChange={handleChange}>search</Search>
                
                <div className="robots">
                {filteredRobots.map(user=> {
                    return (
                        
                        <RobotCard key={user.id} name={user.name} email={user.email} code={user.address.zipcode} city={user.address.city} phone={user.phone} image={`https://robohash.org/${user.name}.png`} />
                        
                    );
                })}
                </div>
            </>
        }
    
        </>
        
    )
}

export default Robots
