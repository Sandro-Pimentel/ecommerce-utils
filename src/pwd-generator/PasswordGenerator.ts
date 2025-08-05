import AllowedCharacters from "./AllowedCharacters";

export default class PasswordGenerator {
    private allowedCharacters: AllowedCharacters;

    constructor() {
        this.allowedCharacters = new AllowedCharacters();
    }

    public createPassword(passwordLength: number, hasSpecialCharacters: boolean, hasUppercase: boolean = true, hasLowercase: boolean = true, hasNumber: boolean = true): string {
        let allowedCharacters = this.allowedCharacters.defineAllowedCharacters(hasSpecialCharacters, hasUppercase, hasLowercase, hasNumber);

        let password: string = "";

        for(let i = 0; i < passwordLength; i++) {
            const index = Math.floor(Math.random() * allowedCharacters.length);

            password+=allowedCharacters[index];
        }

        return password;
    }
}
