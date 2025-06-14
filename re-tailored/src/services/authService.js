// services/authService.js
import { GraphQLService } from "./graphqlService";
export const AuthService = {
  async login(mobileNumber) {
    const mutation = `
      mutation Login($input: LoginInput!) {
        login(input: $input) {
          otp
        }
      }
    `;
    const variables = { input: { mobileNumber } };
    const data = await GraphQLService.query(mutation, variables);
    return data.login;
  },

  async otpVerify(mobileNumber, otp) {
    const mutation = `
      mutation OtpVerify($input: TokenInput!) {
        otpVerify(input: $input) {
          token
          user {
            id
            fname
          }
        }
      }
    `;
    const variables = {
      input: {
        mobileNumber,
        otp,
      },
    };
    const data = await GraphQLService.query(mutation, variables);
    return data.otpVerify;
  },
};