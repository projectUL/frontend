import axios from "axios";

const backEndUrl = "https://local-group-project.herokuapp.com/";

export default {
  async login(email, password) {
    try {
      const response = await axios.post(`${backEndUrl}user/login`, { email: email.value.trim(), password: password.value.trim() }); //627d48d6569bc8ba6916385c { email: "123@edu.uni.lodz.pl", password: "123456789"}
      console.log(response);
      return response.data;
    } catch (error) {
      return {
        error: true,
      };
    }
  },
  async registration(user) {
    try {
      const response = await axios.post(`${backEndUrl}user/register`, user); //627d48d6569bc8ba6916385c { email: "123@edu.uni.lodz.pl", password: "123456789", companyName: "" }
      console.log("Git");
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async getAllCompany() {
    try {
      const response = await axios.get(`${backEndUrl}company/search`); //627d48d6569bc8ba6916385c
      return response.data;
    } catch (error) {
      return { error: true };
    }
  },
  async getCompanyBySearch(text) {
    try {
      const response = await axios.get(`${backEndUrl}company/search?q=${text}`); //627d48d6569bc8ba6916385c
      return response.data;
    } catch (error) {
      return { error: true };
    }
  },
  async getCompanyById(id) {
    try {
      const response = await axios.get(`${backEndUrl}company/${id}`); //627d48d6569bc8ba6916385c
      return response.data;
    } catch (error) {
      return { error: true };
    }
  },
  async getAllOffers() {
    try {
      const response = await axios.get(`${backEndUrl}offers/search/all/all`); //627d48d6569bc8ba6916385c
      return response.data;
    } catch (error) {
      return { error: true };
    }
  },
  async getOfferById(id) {
    try {
      const response = await axios.get(`${backEndUrl}offers/${id}`); //627d48d6569bc8ba6916385c
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async getFilterOffers(text = "", category = "", jobType = "") {
    console.log(`${backEndUrl}offers/search/${category ? category : "all"}/${jobType ? jobType : "all"}?q=${text}&page=`);
    try {
      const response = await axios.get(`${backEndUrl}offers/search/${category ? category : "all"}/${jobType ? jobType : "all"}?q=${text}&page=`); //627d48d6569bc8ba6916385c
      return response;
    } catch (error) {
      return { error: true };
    }
  },
};
