export default class AllowedCharacters {
    private uppercase: string;
    private lowercase: string;
    private numbers: string;
    private specialCharacters: string;
    
    constructor(specialCharacters: string = "?!@#$%¨&*()_+=-[]{}.,;:", uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lowercase: string = "abcdefghijklmnopqrstuvwxyz", numbers: string = "0123456789") {
        this.uppercase = uppercase;
        this.lowercase = lowercase;
        this.numbers = numbers;
        this.specialCharacters = specialCharacters;
    }

    public defineAllowedCharacters(hasSpecial: boolean = true, hasUpper: boolean = true, hasLower: boolean = true, hasNumber: boolean = true): string[] {
        let allowed: string[] = [];
        
        if(hasUpper) allowed.push(... this.uppercase);
        
        if(hasLower) allowed.push(... this.lowercase);
        
        if(hasNumber) allowed.push(... this.numbers);
        
        if(hasSpecial) allowed.push(... this.specialCharacters);

        return allowed;
    }
}
