import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';

const UserList = () => {
const [listOfUSer,setListOfUSer]= useState([])

const getListOfUsers = async () =>{
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUSer(res.data);

    }catch (err){
         console.log('Error :', err)
    }

}

useEffect(() => {
    getListOfUsers ()
    
}, [])

    return (
        <div style={{display:'flex' , flexWrap:'wrap' , margin:'15px',color:'blue'}} >
            {listOfUSer.map((user,i) => 
            <div >
            <Card   border="primary" style={{ width: '18rem' , margin:'15px'}} >
            <Card.Header>{user.username}</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{`Email: ${user.email}`}</Card.Text>
              <Card.Text>{`Address: ${user.address.street},${user.address.suite},${user.address.city}`}</Card.Text>
              <Card.Text>{`Phone: ${user.phone}`}</Card.Text>
              <Card.Text>{`Website: ${user.website}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{`Company: ${user.company.name}`}</Card.Subtitle>
            </Card.Body>
          </Card>
          </div>
                
            ) }
        </div>
    )
}

export default UserList
