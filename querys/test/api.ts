import axios from 'axios';
import { ICommon } from 'interface/Common';

export const getTest = async (offset: number = 1) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + offset);
  return data;
};

export const postTest = async (params: ICommon) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', params);
  return data;
};
