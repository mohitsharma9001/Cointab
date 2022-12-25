import React from 'react'
import { Table, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'



const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        // font-size: 18px
    }
`;

export const Home = () => {
 const [user,setUser] = React.useState([])
 console.log(user)

React.useEffect(()=>{
  getData()
},[])

const getData = ()=>{
  fetch(`https://erin-modern-millipede.cyclic.app/user/all`)
  .then((res)=>res.json())
  .then((res)=>setUser(res))
}
  return (
    <div>
         <StyledTable>
          <THead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>City</TableCell>
            
          </THead>
          <TableBody>
         {
          user.map((data)=>{
           return <TRow>
                    
                     <TableCell>{data.name.first}</TableCell>
                     <TableCell>{data.email}</TableCell>
                     <TableCell>{data.gender}</TableCell>
                     <TableCell>{data.location.city}</TableCell>
                   
            </TRow>
          })
         }
          </TableBody>
       
      </StyledTable>
    </div>
  )
}
