import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import FacebookIcon from './icons/FacebookIcon';
import styles from '../styles/Sidebar.module.css';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: MailIcon,
    path: 'mailto:prayagpc28@gmail.com',
  },
 
  {
    Icon: LinkedInIcon,
    path: 'https://www.linkedin.com/in/prayag-choudhary-891889225',
  },
  {
    Icon: TwitterIcon,
    path: 'https://x.com/prayag_pc',
  },
  {
    Icon: InstagramIcon,
    path: 'https://www.instagram.com/prayag_pc_/',
  },
  {
    Icon: FacebookIcon,
    path: 'https://www.facebook.com/prayag.choudhary.7965',
  },
 
  
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            <Link href={path} passHref>
              <div
                className={
                  router.pathname === path ? styles.active : undefined
                }
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? 'var(--text-color)'
                      : 'var(--text-color)'
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            <Link href={path} passHref>
              <div
                className={
                  router.pathname === path ? styles.active : undefined
                }
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? 'var(--text-color)'
                      : 'var(--text-color)'
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
