type  Role= 'admin' | 'user' | 'editor'

let role: Role

role = 'admin'
role = 'user'
role = 'editor'

const performAction = (action: string, role: Role) => {
    if (role === 'admin' && typeof action === 'string') {
        console.log(`Performing ${action} as ${role}`)
    } else if (role === 'user') {
        console.log(`Performing ${action} as ${role}`)
    } else if (role === 'editor') {
        console.log(`Performing ${action} as ${role}`)
    }

}

performAction('delete', 'admin')
performAction('create', 'user')

// let roles = Role[]
let roles: Array<Role>;

roles = ['admin', 'user', 'editor', 'admin']

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [],
    add: (data: string) => {
        textStorage.storage.push(data)
    }
}

const userStorage: DataStorage<{ name: string }> = { 
    storage: [],
    add: (user: { name: string }) => {
        userStorage.storage.push(user)
    }

}

// function merge<T, U>(a: T, b: U) {
//     return {
//         ...a,
//         ...b,
//     };
// }

const merge = <T, U>(a: T, b: U) => {
    return {
        ...a,
        ...b,
    };
}

const user = merge<{ name: string }, { age: number }>(
    { name: 'Max' },
    { age: 30 }
);

console.log(user)