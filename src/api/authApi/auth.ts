import { conf } from "@/conf/conf";
import { IExistingUser, INewUser } from "@/types";
import axios from 'axios';

/* This is the class For writing all the functions required To authenticate user
A object is already created. Now the object is exported. And you can just Use 
whatever functionalities that you want to use just by Calling the Method That 
belong in the class . This comment is generated by a voice assistant feature of
 vs code that I recently tried. So grammatical mistakes should be pardoned.  
  */

export class AuthFuctions {
    endpoint;
    axiosInstance;
    constructor() {
        this.endpoint = conf.serverEndpoint;
        this.axiosInstance = axios.create({
            withCredentials: true,
            baseURL: `${this.endpoint}/api/v1/users`,
        })
    }
    async createNewAccount(userData: INewUser) {
        try {
            const response = await this.axiosInstance.post(`/signup`, userData);
            //TODO:  CHECK FOR NO RESPONSE
            return response.data;
        } catch (error) {
            console.error('ERROR:: class AuthFunctions :: createNewAccount :: failed to create new account ->', error);
            throw error;
        }
    }

    async login(loginData: IExistingUser) {
        try {
            const response = await this.axiosInstance.post(`/signin`, loginData);
            //TODO:  CHECK FOR NO RESPONSE
            return response.data;
        } catch (error) {
            console.error('ERROR:: class AuthFunctions :: login :: failed to login to account ->', error);
            throw error;
        }
    }
    async test(email: string) {
        try {
            const response = await this.axiosInstance.post(`/test`, { email });
            //TODO:  CHECK FOR NO RESPONSE
            return response.data;
        } catch (error) {
            console.error('ERROR:: class AuthFunctions :: test :: just tetsing no real use ->', error);
            throw error;
        }
    }


}

const authFunctions = new AuthFuctions();
export default authFunctions;