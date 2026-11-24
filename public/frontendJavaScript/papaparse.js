// this is how I will locally parse csv files before sending to backend
const file_inp = document.getElementById('userUploadedCSVFile')
const upload = document.getElementById('csvParseInDOM')

upload.addEventListener('click', () => {
    console.log('hello')
    console.log(file_inp)
    PapaParse(file_inp)
})

// papa parse function: 
function PapaParse(inp_file) {
    let arrayObj = []
    Papa.parse(inp_file.files[0], {
        download: true,
        header:true,
        skipEmptyLines:true,
        complete: function(results){
            arrayObj = results.data;
            console.log(arrayObj)
        }
    })
}