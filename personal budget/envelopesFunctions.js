
//This function will retreive an envelope by doing a simple linear search in the id
function findEnvelope(envelopes,reqId) {
    for (let x = 0; x < envelopes.length; x++) {
        if (envelopes[x].id == reqId)
        {
            return envelopes[x];
        }
    }
    console.log("Envelope not found!");
    return -1;
}

//This function will delete an envelope and update IDs accordingly

export {findEnvelope};