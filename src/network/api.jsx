import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.102:8000";

export const apiNoToken = async (url, method, data) => {
  try {
    const body = await axios({
      url,
      method,
      data,
    });
    return body;
  } catch (error) {
    console.error("Error in apiNoToken:", error);
    throw error;
  }
};

export const api = async (url, method, data) => {
  const token = localStorage.getItem("token");
  try {
    const body = await axios({
      url,
      method,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return body;
  } catch (error) {
    console.error("Error in api:", error);
    throw error;
  }
};

async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await apiNoToken("/api/v1/auth/refresh", "POST", {
      refreshToken,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
  return null;
}

function storeAccessToken(token) {
  localStorage.setItem("token", token);
}

async function storeNewAccessToken() {
  try {
    const newAccessToken = await refreshAccessToken();
    if (newAccessToken) {
      console.log("New access token obtained. Storing...");
      storeAccessToken(newAccessToken);
    } else {
      console.error("Cannot refresh the access token.");
    }
  } catch (error) {
    console.error("Error while refreshing and storing access token:", error);
  }
}

export async function requestWithAutoRefresh(endpoint, method, data) {
  try {
    const response = await api(endpoint, method, data);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.log("Access token is expired. Attempting to refresh...");
      await storeNewAccessToken();
      console.log("Retrying the original request...");
      const newResponse = await api(endpoint, method, data);
      return newResponse;
    }
    throw error;
  }
}
