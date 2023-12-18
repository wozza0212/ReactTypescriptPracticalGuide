var role;
role = 'admin';
role = 'user';
role = 'editor';
var performAction = function (action, role) {
    if (role === 'admin') {
        console.log("Performing ".concat(action, " as ").concat(role));
    }
    else if (role === 'user') {
        console.log("Performing ".concat(action, " as ").concat(role));
    }
    else if (role === 'editor') {
        console.log("Performing ".concat(action, " as ").concat(role));
    }
};
performAction('delete', 'admin');
performAction('create', 'user');
