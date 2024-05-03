const url = "https://gutendex.com/books"

function getBooks(){
    var req = fetch(url)
    req
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data)
        console.log(data['count'])
        console.log(data['results'])
        booksData = data['results']
        booksData.map((ele)=>{
            
            const {id,title,languages,subjects,bookshelves,download_count} = ele
            console.log(id,title,languages,subjects,bookshelves,download_count)
            const div1 = document.getElementById('div1')
            div1.innerHTML +=`
            <div class="card box">
            <div class="card-body cardBody " >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Book ID : </b> ${id}</li>
                    <li class="list-group-item bookTitle"><b>Book Title : </b> ${title}</li>
                    <li class="list-group-item subjects"><b>Subjects : </b> ${subjects}</li>
                    <li class="list-group-item"><b>Languages : </b> ${languages}</li>
                    <li class="list-group-item bookshelve"><b>Bookshelves : </b>${bookshelves}</li>
                    <li class="list-group-item"><b>Number of Downloads : </b>${download_count}</li>
                </ul>
            </div>
            </div>
            `
        })
    })
    .catch((err)=>console.log(err))
}
getBooks()

