import { useState } from "react"
import Footer from "../src/components/Footer"
import { Header } from "../src/components/Header"
import { Usersdata } from "../src/components/Usersdata"
import "./Users.css"

export const Users = () => {
    let [selectedUser, setSelectedUser] = useState(Usersdata[0])
    return (
        <>
            <Header />


            <div className="user-container">
                <div className="left">
                    <h2>Users</h2>
                    {
                        Usersdata.map((users) =>
                            <div
                                key={users.id}
                                className={`user-name ${selectedUser.id === users.id ? "active" : ""}`}
                                onClick={() => setSelectedUser(users)}
                            >
                                {users.name}
                            </div>
                        )
                    }
                </div>

                <div className="right">
                    <h2>User Details</h2>

                    <h3><strong>Name:</strong>{selectedUser.name}</h3>
                    <p><strong>Age:</strong> {selectedUser.age}</p>
                    <p><strong>City:</strong> {selectedUser.city}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                </div>

            </div>

            <Footer />
        </>
    )
}

