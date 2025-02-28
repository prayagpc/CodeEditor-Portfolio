import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ user }) => {
  // Guard against missing user data
  if (!user || Object.keys(user).length === 0) {
    return <div className={styles.errorMessage}>Unable to load GitHub profile</div>;
  }

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <div className={styles.container}>
      <div className={styles.gitHead}>
        {user.avatar_url && (
          <a 
            href={`https://github.com/${user.login}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.avatarLink}
          >
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={`${user.login}'s GitHub avatar`}
              width={120}
              height={120}
              priority
            />
          </a>
        )}

        <div className={styles.userInfoContainer}> 
          <a 
            href={`https://github.com/${user.login}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.links}
          >
            <h3 className={styles.username}>{user.login}</h3>
            <div className={styles.userInfo}>
              <div className={styles.userStat}>{user.followers} Followers</div>
              <div className={styles.userStat}>{user.public_repos} Repos</div>
            </div>
          </a>

          <a 
            href={`https://github.com/${user.login}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.buttonLink}
          >
            <button className={styles.button}>Open GitHub</button>
          </a>
        </div>
      </div>

      <div className={styles.contributions}>
        {process.env.NEXT_PUBLIC_GITHUB_USERNAME ? (
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
            hideMonthLabels
            fontSize={12}
            blockSize={12}
          />
        ) : (
          <div className={styles.errorMessage}>
            GitHub username not configured.
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Using an environment variable for the username would be better
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'prayagpc';
    
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        // Add authorization if you have a GitHub token to avoid rate limits
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        })
      }
    });
    
    if (!userRes.ok) {
      throw new Error(`GitHub API responded with status: ${userRes.status}`);
    }
    
    const user = await userRes.json();

    return {
      props: { 
        title: 'GitHub', 
        user 
      },
      revalidate: 60 * 60, // Revalidate every hour instead of every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      props: { 
        title: 'GitHub', 
        user: {},
        error: true
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
}

export default GithubPage;