import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </NextHead>
  );
};

export default Head;
