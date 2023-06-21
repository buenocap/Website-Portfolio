import express, { response } from 'express';
import * as functions from '../envelopesFunctions.js';
//Initializing my router
const router = express.Router();

const envelopes = [
    {
        category: "Gas",
        budget: 50,
        id: 0
    },
    {
        category: "Rent",
        budget: 1250,
        id: 1
    },
    {
        category: "Car",
        budget: 250,
        id: 2
    }
]

// All routes start with /envelopes

// Create an envelope for a new budget
router.post('/create',(req,res) => {
    console.log('Creating a new envelope');
    //Accessing information from the body
    const categoryName = req.body.category;
    const budgetAmount = req.body.budget;
    const idNumber = envelopes.length; //id will increment as the size array increases
    envelopes.push({category:categoryName,budget:budgetAmount,id:idNumber});
    console.log(envelopes);
    //Sending back a response
    res.status(201).send(`A new envelope has been created for ${categoryName} with a budget of $${budgetAmount}!`);
});

// Display all current envelopes
router.get('/', (req,res) => {
    console.log(envelopes);
    res.status(200).send(envelopes);
})

// Display envelope by ID number
router.get('/:id', (req,res) => {
    const id = req.params.id;
    const envelope = functions.findEnvelope(envelopes,id);
    if (envelope == -1) {
        res.status(404).send('Envelope requested could not be found');
    } else {
        res.status(200).send(envelope);
    }
    
});

// Edit an existing envelope
router.put('/edit/:id', (req,res) => {
    //Locating envelope
    const id = req.params.id;
    if(functions.findEnvelope(envelopes,id)!= -1) {
        //If found update envelope with new information
        envelopes[id].category = req.body.category;
        envelopes[id].budget = req.body.budget;
        console.log(envelopes);
        //Message send
        let msg = `Successfully Updated: ${envelopes[id].category}\n`;
        res.status(201).send({msg,envelopes});
        
    } else {
        //If the envelope doesn't exist handle error
        res.status(404).send('The envelope being modified cannot be found!');
    }
});

// Transfer funds from one envelope to another
router.put('/edit/:envelopeOne/:envelopeTwo/:transfer', (req,res) => {
    const envelopeOne = req.params.envelopeOne;
    const envelopeTwo = req.params.envelopeTwo;
    const transferAmount = Number(req.params.transfer);
    //Math to correctly change budget value
    envelopes[envelopeOne].budget = envelopes[envelopeOne].budget - transferAmount;
    envelopes[envelopeTwo].budget = envelopes[envelopeTwo].budget + transferAmount;
    console.log(envelopes);
    res.status(200).send(`$${transferAmount} from ${envelopes[envelopeOne].category} has been transferred to ${envelopes[envelopeTwo].category}.`);
});

// Delete an existing envelope
router.delete('/edit/:id', (req,res) => {
    const id = req.params.id;
    if(functions.findEnvelope(envelopes,id) != -1) {
        //Remove object from array
        envelopes.splice(id,1);
        //Reconfiguring IDs
        for (let index = 0; index < envelopes.length; index++) {
            envelopes[index].id = index;
        }
        res.status(202).send('Envelope has been deleted');
    } else {
        res.status(404).send('Error');
    }
    
});


export default router;