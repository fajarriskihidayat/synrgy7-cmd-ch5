const confirmDelete = document.querySelector('.yesBtn')
const btnDelete = document.querySelectorAll('.deleteBtn')

btnDelete.forEach(btn => {
    btn.addEventListener('click', function(){
        const id = this.getAttribute('data-id-car')

        confirmDelete.addEventListener('click', async function(){
            await fetch(`http://localhost:3000/api/deleteCar/${id}`, {
                method: "DELETE"
            }).then(
                () => window.location.replace("/")
            ).catch(e => console.log(e))
        })
    })
})