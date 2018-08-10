import firebase from 'firebase'

function getServerTimestamp(){
    return firebase.firestore.FieldValue.serverTimestamp()
}

export async function createTestObject(){
    console.log('attempting to create new object')
    const db = firebase.firestore()
    const timestamp = getServerTimestamp()
    let testRef = await db.collection('test').add({
        created: timestamp,
        modified: timestamp
    })
    console.log('created test object...', testRef)
    return testRef
}
