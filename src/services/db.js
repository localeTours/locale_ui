import fire from "../fire";
import "firebase/firestore";

export const auth = fire.auth();

const db = fire.firestore();

export const userDb = db.collection("users");

export const tourDb = db.collection("tours");

export const checkDb = db.collection("checkpoints");

export const storage = fire.storage().ref();