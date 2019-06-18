import { database } from "./firebase";

/**
 * Create profile for new user on database
 * @param {string} uid firebase user id
 * @param {object} userProfile JSON object with the user information
 * @example createUseRecord(user.user.uid, { name: Diego })
 */
export async function createUserProfile(uid, userProfile) {
    return await database.child('Users').child(uid).set(userProfile);
}

/**
 * Write on database a publication of a mascota perdida
 * @param {object} mascotaInfo Information of the mascota perdida
 * @example
 * publishMascotaPerdida({
 * name: 'Kenji',
 * specie: 'Perro',
 * sex: 'Macho',
 * description: 'Cafe',
 * location: {cp: '44390', place: 'Guadalajara, Jalisco, Mexico', LatLng: { latitude: 0, longitude: 0 }},
 * lastSeen: '2019-06-17',
 * haveId: true,
 * contact: [
 *  {
 *      type: 'envelope',
 *      content: 'diego_email.com',
 *      lock: null
 *  }
 * ]
 * });
 */
export async function publishMascotaPerdida(mascotaInfo){
    return await database.child('Perdidas').push(mascotaInfo);
}

export async function updateMascotaPerdida(key, infoToUpdate) {
    return await database.child('Perdidas').child(key).update(infoToUpdate);
}

/**
 * Save place (city, state and country) where Perdida was reported on database
 * @param {string} place Name of place (city, state and country) where Perdida was reported
 */
export async function savePlaceOfPerdidaOnDatabase(place) {
    database.child('PerdidasPlaces').update({ [place]: place });
}