import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.gitHead}>
        {user.avatar_url && (
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={120}
              height={120}
            />
          </a>
        )}

        <div> <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
          <h3 className={styles.username}>{user.login}</h3>
          <div className={styles.userInfo}>
            <div className={styles.user}>{user.followers} followers</div>
            <div className={styles.user}>{user.public_repos} repos</div>
          </div>
        </a>

        <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
       <button className={styles.button}>Open GitHub</button></a>
        </div>
      </div>
      {/* Shows github calander */}
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/prayagpc`,
      {
      }
    );
    const user = await userRes.json();

    return {
      props: { title: 'GitHub', user },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { title: 'GitHub', repos: [], user: {} },
      revalidate: 10,
    };
  }
}

export default GithubPage;
