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
export const UserDetails = () => {
    const [users, setUser] = React.useState([]);
    const [page, setPage] = React.useState(0);
    React.useEffect(() => {
        getData()
    }, [page])

    const getData = () => {
        fetch(`http://localhost:8000/user/pagination?page=${page}`)
            .then((res) => res.json())
            .then((res) => setUser(res))
    }

   

    return (
        <div>
            <h3>page of {page+1}</h3>
           <StyledTable>
          <THead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>City</TableCell>
            <button>Filter data by gender male</button>
          </THead>
          <TableBody>
         {
          users.map((data)=>{
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
          
            <div>
                <button onClick={() => setPage(page - 1)} disabled = {page === 0}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>

        </div>
    )
}
