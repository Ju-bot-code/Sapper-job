<script context="module">
	// it takes two parameter page and session
	export async function preload(page,session)
	{
        const res =await this.fetch('/jobs.json')
        const jobs = await res.json();

        // return {todos :todos}
        return {jobs};
	}

</script>

<script>

 export let jobs=jobs ;
//  console.log(jobs)
</script>


<h2>All current jobs</h2>

<div>
    <ul>
        {#each jobs as  job ,i(job.id)}
        <li>
            <a  rel=prefetch href={`/jobs/${job.id}`}>{job.title}</a>
      
            <!-- <h4>{i}</h4>
            <p>Title : {job.title}</p>
            <p>Salary : {job.salary}$</p>
            <p>Details : {job.detail}</p> -->
        </li>
        {/each}
    </ul>
</div>


    <div>
        <a href="jobs/create">Add new jobs</a>
    </div>

    <style>
        ul{
          padding: 0;
        }
        li {
          list-style-type: none;
        }
        li a {
          display: block;
          padding: 15px;
          border: 1px solid #f2f2f2;
          border-radius: 8px;
          margin: 10px auto;
          text-decoration: none;
        }
        li a:hover {
          background: #fbfbfb;
        }
        div {
          text-align: center;
        }
      </style>