import HeaderStyle2 from "../components/header/HeaderStyle2";

const Unity = () => {
  return (
    <>
      <HeaderStyle2 />
      <div>
        <iframe
          src="https://unity.adoreh.com/"
          width="100%"
          height="900"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          style={{ paddingTop: "104px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Unity;
