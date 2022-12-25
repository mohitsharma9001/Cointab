import React from 'react'

export const UserDetails = () => {
    const [users, setUser] = React.useState([])
    const [page, setPage] = React.useState(0)
    console.log(users)
    React.useEffect(() => {
        getData()
    }, [page])

    const getData = () => {
        fetch(`http://localhost:8080/user/all`)
            .then((res) => res.json())
            .then((res) => setUser(res))
    }


    return (
        <div>
            {
                users[page] ? <div>
                <h4>{users[page].name.first}</h4>

                <h4>{users[page].location.city}</h4>
                <h4>{users[page].gender}</h4>
            </div> : null
            }
          
            {/* <div>
                <h4>{users[page].name.first}</h4>

                <h4>{users[page].location.city}</h4>
                <h4>{users[page].gender}</h4>
            </div> */}
            <div>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>

        </div>
    )
}
