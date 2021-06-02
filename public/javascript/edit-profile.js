async function editProfileHandler(event) {
    event.preventDefault();

    // update the const's below accordingly to your handlebar
    const bio = document.querySelector("put the ID or Class of the bio form/input here").value.trim();
    const location = document.querySelector("put the ID or Class of the location form/input here").value.trim();

    // i think you can re-use the const below for id as long as you set up the <a href="/dashboard/edit-profile/{{user.id}}">
    // i think! youll have to mess with it furthermore
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/api/users/edit-profile/${id}`, {
        method: "POST",
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

// adjust the querySelector accordingly aswell
document
    .querySelector(".edit-profile-form")
    .addEventListener("submit", editProfileHandler);

async function imageUploadHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const file = document.getElementById('input-files');
    const length = file.files.length;
    const fileData = file.files[0];
    /*check the file contents, dont send if field is empty*/
    console.log(fileData)

    if (length === 0) {
        alert('You must select a file!');
    } else {
        /*REMOVE ALL ALERTS FOR PRODUCTION
            CHANGE ALERTS TO MODALS OR TOASTS
        */
        const fileType = file.files[0].name.split('.')[1];
        console.log('checking file contents');
        if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg' || fileType === 'gif') {
            if (fileData.size > 2 * 1024 * 1024) {
                return alert('Images must be less than 2 MB')
            } else {
                console.log(`Uploading image`);
                const formData = new FormData();
                formData.append('file', fileData);
                const imageUpload = await fetch(`api/users/edit-profile/${id}`, {
                    method: 'post',
                    body: formData,
                }).catch(e => {
                    console.log(e)
                });
                if (imageUpload.ok) {
                    alert('Image successfully uploaded!');
                    btn1.setAttribute('style', 'visibility: visible;')
                    document.getElementById('imagePreview').setAttribute('src', '');
                    form.setAttribute('style', 'visibility: hidden;')
                } else {
                    alert(imageUpload.statusText);
                }
            }
        } else {
            alert(`The ${fileType.toUpperCase()} file is not supported!`);
        }
    }
}

document
    .querySelector(".edit-image-form")
    .addEventListener("submit", imageUploadHandler);