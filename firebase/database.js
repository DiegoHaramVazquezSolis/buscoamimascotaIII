import { database } from "./firebase";

/**
 * Create profile for new user on database
 * @param {string} uid firebase user id
 * @param {object} userProfile JSON object with the user information
 * @example createUseRecord(user.user.uid, { name: Diego })
 */
export function createUserProfile(uid, userProfile) {
    database.child('Users').child(uid).set(userProfile);
}