import React, { useCallback } from 'react';
import { useTestQuery, useTestMutation } from 'querys/test/query';
import { ICommon } from 'interface/Common';
import { useQueryClient } from 'react-query';

const ReactqueryPage = () => {
  const { data } = useTestQuery(1);
  const { mutate: mutateTest } = useTestMutation();
  // mutation 성공 후 관리되는 서버 상태를 다시 불러오기 위한
  // Cache 초기화를 위해 사용될 queryClient 객체
  const queryClient = useQueryClient();

  const handleClick = useCallback(() => {
    const params: ICommon = {
      id: 1,
      title: 'test',
    };

    mutateTest(params, {
      onSuccess: data => {
        console.log(data);
      },
    });
  }, [mutateTest]);

  const handleClickInvalidateQueries = useCallback(() => {
    const params: ICommon = {
      id: 1,
      title: 'test',
    };

    mutateTest(params, {
      onSuccess: () => {
        // 성공시에 매핑된 useQuery의 key값을 넣어주면 자동으로 실행 된다
        queryClient.invalidateQueries('test');
      },
    });
  }, [mutateTest]);

  return (
    <>
      <p>React Query 활용 get 예시</p>
      <p>id: {data?.id}</p>
      <p>title: {data?.title}</p>
      <br />
      <br />
      <button onClick={handleClick}>React Query Post action (console)</button>
      <br />
      <br />
      <button onClick={handleClickInvalidateQueries}>React Query Post action (성공시 다시 get 실행)</button>
    </>
  );
};

export default ReactqueryPage;
