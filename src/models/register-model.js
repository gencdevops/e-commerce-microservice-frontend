 export class RegisterModel{
     email;
     password;
     firstName;
     lastName;
     birthDate;
     userName;
    constructor(
        email,
        password,
        firstName,
        lastName,
        birthDate,
        userName
    ) {
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
    }
}
