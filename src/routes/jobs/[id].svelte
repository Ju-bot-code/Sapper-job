<script context="module">
    export async function preload(page)
    {
        const {id}=page.params;
        const res = await this.fetch(`jobs/${id}.json`);
       
       

        if(res.tatus === 200){
            const job = await res.json();
            return {job}
        }

        if(res.status === 400){
            const {error} =res.json();
            this.error(404,error);
        }
    }
</script>
<script>
    export let job;
    // console.log(job);
</script>

<div>
    <h1>{job.title}</h1>
    <h4>{job.salary}</h4>
    <p>{job.description}</p>
</div>