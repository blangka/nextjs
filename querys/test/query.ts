import { useQuery, useMutation } from 'react-query';
import { getTest, postTest } from './api';
import { ICommon } from 'interface/Common';

export const useTestQuery = (offset: number = 1) => {
  return useQuery(['test', offset], () => getTest(offset));
};

export const useTestMutation = () => {
  return useMutation((params: ICommon) => postTest(params));
};
