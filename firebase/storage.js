import { storage } from "./firebase";

/**
 * Take a file and save it on the storage reference
 * @param {string} ref path to save the file
 * @param {file} file image, doc, etc. to save on storage
 */
export function uploadFileByReference(ref, file) {
    return storage.ref(ref).put(file);
}

/**
 * return the getDownloadURL function of the specified ref
 * @param {string} ref path of the file to get the downloadURL
 */
export async function getDownloadURLByReference(ref) {
    return await storage.ref(ref).getDownloadURL();
}