import bcrypt from 'bcryptjs'

const users = [
    {
        name : "Admin User",
        email: "adminuser@gmail.com",
        password : bcrypt.hashSync("qqqqqq" , 10),
        isAdmin : true
    },
    {
        name : "John Doe",
        email: "johndoe@gmail.com",
        password :  bcrypt.hashSync("qqqqqq" , 10)
    },
    {
        name : "Jane Doe",
        email: "janedoe@gmail.com",
        password : bcrypt.hashSync("qqqqqq" , 10)
    }

]

export default users