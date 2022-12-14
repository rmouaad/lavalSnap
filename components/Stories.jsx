import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useEffect, useState } from 'react'
import Story from './Story';

export default function () {
    const [storyUsers, setStoryUsers] = useState([]);

    useEffect(() =>{
        const users = minifaker.array(30,(i) =>({

            username: minifaker.username({locale:"en"}).toLocaleLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i
        }));
        setStoryUsers(users);
        console.log(users);
    }, []);


  return (
    <div className='flex space-x-2 p-6  bg-white mt-2 border-gray-200 border overflow-scroll rounded-sm scrollbar-none'>
        {storyUsers.map(user =>(
            <Story key={user.id} username = {user.username} img={user.img}/>
        ))}
    </div>
  )
}
