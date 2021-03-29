import { db } from '../config/firebase';

export async function EditarUser(id, nomeUpdate) {

    let response;

    await db.collection('users').doc(id).set(({ nome: nomeUpdate }))
        .then(() => response = true).catch(() => response = false);

    return response;

}

export async function AdicionarUser(nomeAdd) {

    let response;

    await db.collection('users').add({
        nome: nomeAdd
    }).then(() => response = true).catch(() => response = false);

    return response;

}

export async function DeleteUser(id){

    let response;
    
    await db.collection('users').doc(id).delete()
    .then(() => response = true).catch(() => response = false);

    return response;

}