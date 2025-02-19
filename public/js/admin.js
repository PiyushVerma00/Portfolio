document.addEventListener("DOMContentLoaded", ()=>{

    const deleteBtn  = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(btn=>{
        btn.addEventListener("click", async ()=>{
            const id = btn.getAttribute("data-id")

            if(!confirm("Are you sure you want to delete?")) return;
            try {
                const res = await fetch(`/admin/delete/${id}`,{
                    method: "DELETE"
                })
                if(res.success){
                    alert("Project deleted successfully")
                    btn.closest(".project-card").remove()
                    window.location.reload()
                }else{
                    alert("Error deleting project")
                }
            } catch (error) {
                console.log("Error", error);
                
            }
        } )
    })
})