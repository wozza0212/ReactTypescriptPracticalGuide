type  Role= 'admin' | 'user' | 'editor'

let role: Role

role = 'admin'
role = 'user'
role = 'editor'

const performAction = (action: string, role: Role) => {
    if (role === 'admin') {
        console.log(`Performing ${action} as ${role}`)
    } else if (role === 'user') {
        console.log(`Performing ${action} as ${role}`)
    } else if (role === 'editor') {
        console.log(`Performing ${action} as ${role}`)
    }

}

performAction('delete', 'admin')
performAction('create', 'user')