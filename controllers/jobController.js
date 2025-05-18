import { db } from '../firebase/firebaseConfig.js';

export const getAllJobs = async (req, res) => {
  try {
    const snapshot = await db.collection('jobs').get();
    const jobs = [];
    snapshot.forEach(doc => jobs.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
