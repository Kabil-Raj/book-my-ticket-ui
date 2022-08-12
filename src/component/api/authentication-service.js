import axios from "axios";

export const book_my_ticket_url = ""

const LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME = "authenticatedUser"

const api_url = "http://bmt-api-gateway:80/user"


class BookMyTicketLoginService {

    authenticateUser(emailAddress, pwd) {
        console.log( emailAddress+ " " +pwd) 
        const userCredential = {
            emailId: emailAddress,
            password: pwd
        }
        return axios.post(api_url+"/login", userCredential);
    }

    registerSessionStorage(userName, token) {
        sessionStorage.removeItem(LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME)
        sessionStorage.setItem(LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME, userName)
        this.setUpAxiosInterceptor(this.createJwtToken(token))
    }

    createJwtToken(token) {
        return "Bearer " + token;
    }

    setUpAxiosInterceptor(token) {
        axios.interceptors.request.use(
            config => {
                if (this.isUserLoggedIn()) {
                    config.headers["Authorization"] = token
                }
                return config
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME);
        if (user == null) return false
        return true;
    }

    signOut() {
        sessionStorage.removeItem(LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME);
    }

    saveUserRegistration(values) {
        let user = {
            userName: values.username,
            dateOfBirth: values.dateOfBirth,
            contactNumber: values.contactNumber,
            emailId: values.emailAddress,
            password: values.password
        }
        console.log(" user " +user)
       return axios.post(api_url+"/signup", user)
            
    }

    bookTicket(movName, noOfTickets) {
        const getUserName = sessionStorage.getItem(LOCAL_STORAGE_SESSION_ATTRIBUTE_NAME);
        const ticketDetails = {
            userName : getUserName,
            movieName : movName,
            numberOfTickets : noOfTickets
        }

        return axios.post(api_url+ "/book/ticket", ticketDetails)
            
    }

}

export default new BookMyTicketLoginService();

