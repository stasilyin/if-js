
function readFile(file){
    return new Promise(function(resolve,reject){
        let fr = new FileReader();
        fr.onload = function(){
            resolve(fr.result);
        };

        fr.onerror = function(){
            reject(fr);
        };

        fr.readAsDataURL(file)
    });
}

document.getElementById("btn-open").addEventListener("change", function(ev) {
    if(document.querySelector('.image-container')) document.querySelector('.image-container').remove();
    if(document.querySelector('.info-file-container')) document.querySelector('.info-file-container').remove();
    const container = document.querySelector('.container');
    const infoFileContainer = document.createElement('div');
    infoFileContainer.innerHTML = `<div>File Name</div>
                                    <div>File Type</div>
                                    <div>File Size</div>`
    const styleContainer = `border-radius: 6px;
                                margin-top: 10px;
                                background: #fff;
                                padding: 1rem;
                                box-shadow: 2px 3px 10px rgba(0, 0, 0, .2);`
    let files = ev.currentTarget.files[0];
    let readers = [];
    if(files) {
            readers.push(readFile(files));
            infoFileContainer.classList.add('info-file-container');
            infoFileContainer.style = styleContainer + `display: grid;
                                                        grid-template-columns: repeat(3, 1fr); 
                                                        justify-items: center; 
                                                        text-align: center;
                                                        margin-bottom: 15px;
                                                        gap: 20px 0`;                                        
            const fileName = document.createElement('div');
            const fileType = document.createElement('div');
            const fileSize = document.createElement('div');
            fileName.innerText = files.name;
            fileType.innerText = files.type.split('/')[1];
            fileSize.innerText = Math.floor(files.size / 1024) + ' КБайт';
            infoFileContainer.appendChild(fileName);
            infoFileContainer.appendChild(fileType);
            infoFileContainer.appendChild(fileSize);
            container.appendChild(infoFileContainer);
    } else {
        return;
    }

    Promise.all(readers).then((values) => {
        if (values[0].includes('image')) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');
            imgContainer.style = styleContainer;
            for (let src of values) {
                const img = document.createElement('img');
                img.src = src;
                imgContainer.appendChild(img);
            }
            container.appendChild(imgContainer);
        }
    });
}, false);


const formUpload = document.getElementById('upload-file');
formUpload.addEventListener('submit', async event => {
 event.preventDefault();
 const fetchOptions = {
    method: 'POST',
    body: new FormData(formUpload),
    header: {
        'Content-type': 'multipart/form-data',
    }
 };

    const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(result => result)
        .catch(error => console.log(error.message));
    console.log(res);
    const container = document.querySelector('.container');
    if(document.querySelector('.image-container')) document.querySelector('.image-container').remove();
    if(document.querySelector('.info-file-container')) document.querySelector('.info-file-container').remove();
    const serverResponse = document.createElement('div');
    serverResponse.style = `border-radius: 6px;
                            margin-top: 10px;
                            background: #fff;
                            padding: 1rem;
                            box-shadow: 2px 3px 10px rgba(0, 0, 0, .2);
                            text-align: center;
                            text-transform: uppercase;
                            opacity: 1;
                            transition: all 2s;
                            `
    serverResponse.innerHTML = `<span>You have successfully sent the file ${res.fileName}</span>`
    container.appendChild(serverResponse);
    setTimeout(() => {
        serverResponse.style.opacity = 0;
        setTimeout (() => {
            serverResponse.remove();
        }, 2000)                 
    }, 3000)

});

