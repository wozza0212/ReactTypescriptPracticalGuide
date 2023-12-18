type Admin = {
    permissions: string[]
}

type AppUser = {
    userName: string
}

// type Appadmin = {
//     permissions: string[]
//     userName: string

// }

type AppAdmin = Admin & AppUser

let admin : AppAdmin

admin = {
    permissions: ['developer', 'admin'],
    userName: 'Jimmy'
}