export interface SignupModel {
    firstName: string;
    lastName: string;
    dateOfBirth: string; // Preferably in ISO format or a specific date type
    gender: string;
    phoneNumber: string; // Use a string to allow for leading zeroes in phone numbers
    username: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
}
