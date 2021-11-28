<script>
    import {goto} from '@sapper/app'
    let title;
    let salary;
    let description;

    const add= async ()=>{

        if(title && salary && description){

                    const res =await fetch('/jobs.json',{
                        method:'POST',
                        body: JSON.stringify({
                            title:title.value,
                            salary:salary.value,
                            description:description.value
                        }),
                        headers:{
                            'content-Type':'application/json'
                        },
                    });

                    const updatedjobs=await res.json();
                    goto('jobs')
                    // console.log(updatedjobs);
        }

    }
</script>
<h2>Add new jobs</h2>

<form on:submit|preventDefault={add}>

    <input type="text" placeholder="Title"  bind:this={title}>
    <input type="number" placeholder="salary" bind:this={salary}>
    <textarea  placeholder="description" bind:this={description} />
    <button>create</button>

</form>
<style>
    h2{
      text-align: center;
    }
    form {
      max-width: 360px;
      margin: 40px auto;
      text-align: center;
    }
    input, textarea {
      display: block;
      width: 100%;
      padding: 10px;
      font-family: arial;
      margin: 10px auto;
      border: 1px solid #eee;
      border-radius: 8px;
    }
  </style>