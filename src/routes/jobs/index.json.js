    
import {jobs} from './_data.js';
import {v4 as uuidv4} from 'uuid';

export function get(req,res)
{   
    res.end(JSON.stringify(jobs));
}

export function post(req,res)
{   const id= new uuidv4();

    const { title,salary,description }=req.body;
    // const title=req.body.title;
    // const salary=req.body.salary;
    // const description=req.body.description;

    jobs.push({id,title,salary,description});

    res.end(JSON.stringify(jobs));

}