import { db } from '../firebase/firebaseConfig.js';

export const getDailyInsights = async (req, res) => {
  try {
    const snapshot = await db.collection("daily_insights").orderBy("created_at", "desc").get();
    const insights = [];
    snapshot.forEach(doc => insights.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
