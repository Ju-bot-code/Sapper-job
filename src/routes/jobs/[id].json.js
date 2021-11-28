import {jobs} from './_data.js';

export function get(req,res,next)
{
    let {id} = req.params;
    //make sure its double == and not tripple
    let job = jobs.find(j=> j.id == id);

    if(job){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(job));
    }else{
        res.statusCode=404;
        res.end(JSON.stringify({error :'the job does not exist'}));
    }


}

