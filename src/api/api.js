import axios from "axios";

export const baseURL = process.env.REACT_APP_API + "/api";

const API = axios.create({ baseURL: baseURL, withCredentials: true });

/// Authentication routes
/**
 * This function will return the current user's information from the database, if the user is logged
 * in.
 * @param authtoken - the token that is returned from the login function
 * @returns The response from the API.
 */
export const currentUser = async (authtoken) => {
  return await API.get(baseURL + "/auth/current_user", { headers: { authtoken } });
};

/**
 * It takes an email and password, and sends them to the server to be authenticated.
 * @param email - string
 * @param password - "password"
 * @returns The response from the API.
 */
export const loginUser = async (email, password) => {
  return await API.post(baseURL + "/auth/login", { email, password });
};

/**
 * It takes in a data object, and then it makes a post request to the API, and then it returns the
 * response.
 * @param data - {
 * @returns The response from the API call.
 */
export const registerUser = async (data) => {
  return await API.post(baseURL + "/auth/register", data);
};
// End login routes

//NFT Routes
/**
 * It takes a formData object and sends it to the server.
 * @param data - {
 */
export const addNFT = (data) => axios({
  method: "post",
  url: baseURL + "/nft/add-nft",
  body: data,
  headers: { 'Content-Type': 'multipart/form-data' },
  data: data
});

/**
 * This function will return a promise that will resolve to an array of approved NFTs.
 */
export const getApprovedNFTS = () =>
  API.get(baseURL + "/nft/apporved-nfts");

export const getUserNftsByWalletAddress = (walletAddress) => {
  return API.get(baseURL + "/nft/user-nfts/" + walletAddress);
}

