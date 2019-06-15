import { auth, fbProvider } from "./firebase";

/**
 * Create a new account based on email and password
 * @param {string} email email of the new user
 * @param {string} password password of the new user
 * @example createUserWithEmailAndPassword(example_email.com, stringPassword)
 */
export async function createUserWithEmailAndPassword(email, password) {
    return await auth.createUserWithEmailAndPassword(email, password);
}

/**
 * SignIn or Login a user based on their facebook account
 */
export async function signInUserWithFacebook() {
    return await auth.signInWithPopup(fbProvider);
}

/**
 * Update the user profile (profile based on FirebaseUser)
 * @param {object} data profile data
 * @example updateUserProfileData({ displayName: stringUserName })
 */
export async function updateUserProfileData(data) {
    return await auth.currentUser.updateProfile(data);
}