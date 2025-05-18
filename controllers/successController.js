import { db } from '../firebase/firebaseConfig.js';

export const getSuccessStories = async (req, res) => {
  try {
    const snapshot = await db.collection("success_stories").get();
    const stories = [];

    snapshot.forEach(doc => stories.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
