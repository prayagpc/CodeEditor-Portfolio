import Head from 'next/head';

const CustomHead = ({ title = 'Prayag Choudhary' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Prayag Choudhary is a passionate software engineer specializing in full-stack development with experience in the MERN and Java stacks. He loves building efficient and scalable web applications."
      />
      <meta
        name="keywords"
        content="Prayag Choudhary, software engineer, full-stack development, MERN stack, Java stack, Node.js, React.js, PostgreSQL, Express.js, TailwindCSS, database management, e-commerce, project management"
      />
      <meta property="og:title" content="Prayag Choudhary's Portfolio" />
      <meta
        property="og:description"
        content="Building efficient, scalable web applications and tackling complex problems with creativity and determination."
      />
      <meta property="og:url" content="https://github.com/prayagpc" />
    </Head>
  );
};

export default CustomHead;

