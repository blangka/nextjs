const EnvPage = () => {
  const mode = process.env.NEXT_PUBLIC_MODE;

  return (
    <>
      <p> 환경 변수 테스트 </p>
      <p> 현재 환경 : {mode} </p>
    </>
  );
};

export default EnvPage;
