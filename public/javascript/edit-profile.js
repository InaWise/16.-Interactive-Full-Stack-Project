async function editProfileHandler(event) {
    console.log("HERRERERERER");
    event.preventDefault();

    const bio = document.querySelector('input[name="user-bio"]').value.trim();
    const location = document.querySelector('input[name="user-location"]').value.trim();
    // const birthday = document.getElementById("user-birthday").value.trim();
    console.log(req.session.user_id);
    const response = await fetch('/api/users/profile/', {
        method: "PUT",
        body: JSON.stringify({
            bio,
            location,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector('button[id="save-profile"]')
    .addEventListener("submit", editProfileHandler);

// Profile Picture Script

// /*Constants for buttons, image div */
// const btn = document.getElementById('create');
// const btn1 = document.getElementById('last-upload');
// const btn2 = document.getElementById('upload');
// /*const imgContainerEl = document.getElementById('img-container');*/
// let idData = '';
// async function createNewUserHandler(event) {
//     /* Images can only be uploaded after the pet has been created, so this is a two part process*/
//     event.preventDefault();
//     const username = "Thomasrwe";
//     const email = "uklvbv@example.com";
//     const password = "zxc123";
//     const bio = 'filler filler filler';
//     const location = "somewhere somewhere";
//     const response = await fetch('/api/users/signup', {
//         method: 'post',
//         body: JSON.stringify({
//             username,
//             email,
//             password,
//             bio,
//             location,
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     }).catch(e => {
//         console.log(e)
//     }).then(resdata => {
//         console.log(resdata);
//         return resdata;
//     })
//     /* If the Pet was successfully created
//     set the url of the action to include the newly
//     created pet ID and show the file input field
//     */
//     if (response.ok) {
//         const form = document.getElementById('test');
//         /* Need the Response body in JSON to read objects*/
//         const resData = await response.json();
//         console.log(resData, "HERE");
//         /* Grab the pet id */
//         const id = resData.id
//         /*store in global to use to retrieve last image uploaded*/
//         idData = id;
//         /*Hidden by default, show the field*/
//         form.removeAttribute('style');
//         async function imageUploadHandler(event) {
//             event.preventDefault();
//             const file = document.getElementById('input-files');
//             const length = file.files.length;
//             const fileData = file.files[0];
//             /*check the file contents, dont send if field is empty*/
//             console.log(fileData)
//             if (length === 0) {
//                 alert('You must select a file!');
//             } else {
//                 /*REMOVE ALL ALERTS FOR PRODUCTION
//                     CHANGE ALERTS TO MODALS OR TOASTS
//                 */
//                 const fileType = file.files[0].name.split('.')[1];
//                 console.log('checking file contents');
//                 if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg' || fileType === 'gif') {
//                     if (fileData.size > 2 * 1024 * 1024) {
//                         return alert('Images must be less than 2 MB')
//                     } else {
//                         console.log(`Uploading image`);
//                         const formData = new FormData();
//                         formData.append('file', fileData);
//                         const imageUpload = await fetch('api/users/edit-profile/' + id, {
//                             method: 'put',
//                             body: formData,
//                         }).catch(e => {
//                             console.log(e)
//                         });
//                         if (imageUpload.ok) {
//                             alert('Image successfully uploaded!');
//                             btn1.setAttribute('style', 'visibility: visible;')
//                             document.getElementById('imagePreview').setAttribute('src', '');
//                             form.setAttribute('style', 'visibility: hidden;')
//                         } else {
//                             alert(imageUpload.statusText);
//                         }
//                     }
//                 } else {
//                     alert(`The ${fileType.toUpperCase()} file is not supported!`);
//                 }
//             }
//         }
//         btn2.addEventListener('click', imageUploadHandler);
//     }
// }


// btn.addEventListener('click', createNewUserHandler);
// /*Actual Rendering will be slightly different blob process applies*/
// async function showImageHandler(event) {
//     event.preventDefault();
//     const response = await fetch(`/api/users/${idData}`, {
//         method: 'get',
//         headers: { 'Content-Type': 'application/json' }
//     }).then(res => {
//         return res.json();
//     }).catch(e => {
//         console.log(e)
//     });
//     /*Grab the array buffer from response*/
//     console.log(response, "HERERERERERE");
//     const imgData = response.profile_picture.data;
//     /*Convert buffer to typed array */
//     let typedArray = new Uint8Array(imgData);
//     /*Convert array to Blob*/
//     let blob = new Blob([typedArray], { type: 'image/jpeg' });
//     /*create html img element*/
//     const nImage = document.getElementById('imagePreview');
//     /*set the img src to an object url*/
//     nImage.src = URL.createObjectURL(blob);
//     /*Append Image to page*/
//     /*imgContainerEl.appendChild(nImage);*/
// }
// btn1.addEventListener('click', showImageHandler);
// /* IMAGE PREVIEW */
// function preview_image(event) {
//     const reader = new FileReader();
//     reader.onload = function () {
//         const output = document.getElementById('imagePreview');
//         output.src = reader.result;
//     }
//     reader.readAsDataURL(event.target.files[0]);
// }
// document.getElementById('input-files').addEventListener('change', preview_image);