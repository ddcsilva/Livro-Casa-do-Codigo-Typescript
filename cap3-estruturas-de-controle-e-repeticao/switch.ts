let papel = "admin";
switch (papel) {
    case "superuser":
        console.log("Super usuário");
        break;
    case "manager":
        console.log("Gerente");
        break;
    case "admin":
        console.log("Administrador");
        break;
    case "user":
        console.log("Usuário comum");
        break;
    default:
        console.log("sem perfil");
        break;
}