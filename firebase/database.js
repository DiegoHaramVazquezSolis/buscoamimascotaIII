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

/**
 * Update information of a mascota perdida on database
 * @param {string} key key of the child to update on Perdidas firebase node
 * @param {object} infoToUpdate JSON object with info to update on the firebase selected node
 */
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

/**
 * Get the list of places where are Perdidas reported
 */
export async function getPerdidasPlaces() {
    return await database.child('PerdidasPlaces').once('value');
}

/**
 * Return an object of mascotasPerdidas based on their desaparition place
 * @param {string} place String for index the mascotasPerdidas
 */
export async function loadMascotasPerdidasOnce(place) {
    if (place !== '') {
        return await database.child('Perdidas').orderByChild('place').equalTo(place).once('value');
    } else {
        return Promise.reject({ errorLaunchedForVoidQuery: true });
    }
}

/**
 * Returns an object with the data of the searched mascota based on their Id
 * @param {string} mascotaId Id of the mascota to search
 */
export async function getMascotaPerdida(mascotaId) {
    return await database.child('Perdidas').child(mascotaId).once('value').then((mascotaPerdida) => mascotaPerdida.val());
}