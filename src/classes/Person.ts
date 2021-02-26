import personInterface from "../interfaces/personInterface";

class Person implements personInterface{
    fullName: string;
    password: string;
    constructor(fullName: string, password: string) {
        this.fullName = fullName;
        this.password = password;
    }
    authenticate(): void {
    }
}