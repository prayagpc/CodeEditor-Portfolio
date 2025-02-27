import data from './projects.json';

let cachedProjects = null;

export const getProjects = () => {
  // Check if the cached version exists; if not, reverse it once and cache it.
  if (!cachedProjects) {
    cachedProjects = [...data].reverse(); // Reverse and store the result in cachedProjects
  }
  return cachedProjects;
};

// export default (req, res) => {
//   const projects = getProjects();
//   res.json(projects);
// };


// API route handler
export default function handler(req, res) {
  // Set appropriate headers
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.status(200).json(getProjects());
}