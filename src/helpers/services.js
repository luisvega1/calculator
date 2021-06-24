import axios from "axios";

export const getConversion = async (from, to, amount) => {
  try {
    const data = await axios.get(
        `https://api.getgeoapi.com/v2/currency/convert?api_key=44a83ec551e5b2d83409a4a7c7d976169b368106&from=${from}&to=${to}&amount=${amount}&format=json`
      )
      return data.data;
  } catch (error) {
    console.log(error);
  }
};
