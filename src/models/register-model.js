 export class RegisterModel{
     email;
     password;
     firstName;
     lastName;
     birthDate;

    constructor(
        email,
        password,
        firstName,
        lastName,
        birthDate
    ) {
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
