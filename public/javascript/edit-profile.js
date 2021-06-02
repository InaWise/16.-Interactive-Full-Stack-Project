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