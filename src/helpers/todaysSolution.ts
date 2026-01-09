import { songs } from "../constants/songs";  // Adjust path if it's just "../constants" – match your original import

export const todaysSolution = songs[Math.floor(Math.random() * songs.length)];
