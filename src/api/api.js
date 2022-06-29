import axios from "axios";

const backEndUrl = "https://local-group-project.herokuapp.com/";

export default {
  async login(email, password) {
    try {
      const response = await axios.post(`${backEndUrl}user/login`, {
        email: email.value.trim(),
        password: password.value.trim(),
      }); //627d48d6569bc8ba6916385c { email: "123@edu.uni.lodz.pl", password: "123456789"}
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
  async createProfile(email) {
    try {
      const response = await axios.post(`${backEndUrl}userprofile/createprofile/${email}`); //627d48d6569bc8ba6916385c { email: "123@edu.uni.lodz.pl", password: "123456789"}
      console.log("createProfile", response);
      //return response.data;
    } catch (error) {
      return {
        error: true,
      };
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
  async getAllOffers(page, search) {
    try {
      console.log(page, search);
      const response = await axios.get(`${backEndUrl}offers/search/all/all?q=${search}&page=${page}`); //627d48d6569bc8ba6916385c

      console.log(response);
      return response.data;
    } catch (error) {
      return { error: true };
    }
  },
  async getOfferById(id) {
    try {
      const response = await axios.get(`${backEndUrl}offers/${id}`, { headers: { "Access-Control-Allow-Origin": "*" } }); //627d48d6569bc8ba6916385c
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
  async getUserId(email) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/${email}`); //627d48d6569bc8ba6916385c
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async getUserProfileDescription(id) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/createprofile/description/${id}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async putUserProfileDescription(id, description) {
    try {
      const response = await axios.put(`${backEndUrl}userprofile/createprofile/description/${id}`, description); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async getUserProfileSkills(id) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/createprofile/skills/${id}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async putUserProfileSkills(id, skills) {
    try {
      const response = await axios.put(`${backEndUrl}userprofile/createprofile/skills/${id}`, skills); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async deleteUserProfileSkills(id, toDelete) {
    try {
      const response = await axios.delete(`${backEndUrl}userprofile/delete/skills/${id}`, toDelete); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async getUserProfileExperience(id) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/createprofile/experience/${id}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async putUserProfileExperience(id, experience) {
    try {
      const response = await axios.put(`${backEndUrl}userprofile/createprofile/experience/${id}`, experience); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async deleteUserProfileExperience(id, toDelete) {
    try {
      const response = await axios.delete(`${backEndUrl}userprofile/delete/experience/${id}`, toDelete); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async getUserProfileProjects(id) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/createprofile/project/${id}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async putUserProfileProjects(id, projects) {
    try {
      const response = await axios.put(`${backEndUrl}userprofile/createprofile/project/${id}`, projects); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async deleteUserProfileProject(id, toDelete) {
    try {
      const response = await axios.delete(`${backEndUrl}userprofile/delete/project/${id}`, toDelete); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  },
  async getUserProfile(email) {
    try {
      const response = await axios.get(`${backEndUrl}userprofile/getprofile/${email}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return { error: true };
    }
  },
  async getUserApplications(email) {
    try {
      const response = await axios.get(`${backEndUrl}user/${email}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return error;
    }
  },
  async putUserNewEmail(change) {
    try {
      const response = await axios.put(`${backEndUrl}user/edit/email`, change); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return error;
    }
  },
  async putUserNewPassword(change) {
    try {
      const response = await axios.put(`${backEndUrl}user/edit/pswd`, change); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return error;
    }
  },
  async putApply(email, apply) {
    try {
      const response = await axios.put(`${backEndUrl}user/apply/${email}`, apply); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return error;
    }
  },
  async getCompanyProfileIdByEmail(email) {
    try {
      const response = await axios.get(`${backEndUrl}companyprofile/getprofile/${email}`); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      return error;
    }
  },
  async getCompanyProfile(email) {
    try {
      const response = await axios.get(`${backEndUrl}company/${email}`); //62a8a83c948abb64c01a0232
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async putCompanyProfile(data) {
    try {
      const response = await axios.put(`${backEndUrl}company/update`, data); //62a8a83c948abb64c01a0232
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async deleteCompanyProfile(id) {
    try {
      const response = await axios.delete(`${backEndUrl}delete/${id}`); //62a8a83c948abb64c01a0232
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async postCreateOffer(data) {
    try {
      const response = await axios.post(`${backEndUrl}offers/create`, data, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }); //62a8a83c948abb64c01a0232
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async getCompanyJobs(name) {
    try {
      const response = await axios.get(`${backEndUrl}offers/${name}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      }); //62a8a83c948abb64c01a0232
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
