import { db } from '../firebase/firebaseConfig.js';

export const getLocationsByDistrict = async (req, res) => {
  try {
    const district = req.params.district;
    const snapshot = await db.collection('locations').where('district', '==', district).get();

    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
