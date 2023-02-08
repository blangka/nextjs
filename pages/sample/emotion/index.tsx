import BasicButton from 'components/sample/basicButton/BasicButton';

const EmotionPage = () => {
  const label = '버튼 테스트';
  const handleClick = () => {
    alert('click');
  };

  return (
    <>
      <p>Emotion JS 활용 예시</p>
      <BasicButton label={label} onClick={handleClick} />
    </>
  );
};

export default EmotionPage;
