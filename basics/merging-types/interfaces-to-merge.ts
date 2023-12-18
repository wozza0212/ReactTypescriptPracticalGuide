interface AdminInterface {
    permissions: string[]
}

interface AppUserInterface {
    userName: string
}

interface AppInterfaceAdmin extends AdminInterface, AppUserInterface {

}

let admin2 : AppInterfaceAdmin

admin2 = {
    permissions: ['developer', 'admin'],
    userName: 'Jimmy'
}

console.log(admin2)