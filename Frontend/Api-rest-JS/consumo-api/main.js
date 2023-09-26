const X_API_KEY =
  "live_4A56aqKIbwdoK3QmYYS9QdCGZqrPEzKmCwC9C3SQ0zvFJY52CrLIdaGO3rcRdpC2";

const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2";
const API_URL_FAVOTITES = `https://api.thecatapi.com/v1/favourites`;
const API_URL_FAVOTITES_DELETE = (id) =>
  `https://api.thecatapi.com/v1/favourites/${id}`;
const URL_IMAGE_UPLOAD = `https://api.thecatapi.com/v1/images/upload`;

const spanError = document.getElementById("error");

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log("Random");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavouriteMichi(data[0].id);
    btn2.onclick = () => saveFavouriteMichi(data[1].id);
  }
}

async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES, {
    method: "GET",
    headers: {
      "X-API-KEY": X_API_KEY,
    },
  });
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    const section = document.getElementById("favoriteMichis");
    section.innerHTML = "";

    const h2 = document.createElement("h2");
    const h2Text = document.createTextNode("Michis favoritos");
    h2.appendChild(h2Text);
    section.appendChild(h2);

    data.forEach((michi) => {
      const article = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const btnText = document.createTextNode("Sacar al michi de favoritos");

      img.src = michi.image.url;
      img.width = 150;
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteMichi(michi.id);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function saveFavouriteMichi(id) {
  const res = await fetch(API_URL_FAVOTITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": X_API_KEY,
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });
  const data = await res.json();

  console.log("Save");
  console.log(res);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log("Michi guardado en favoritos");
    loadFavouriteMichis();
  }
}

async function deleteFavouriteMichi(id) {
  const res = await fetch(API_URL_FAVOTITES_DELETE(id), {
    method: "DELETE",
    headers: {
      "X-API-KEY": X_API_KEY,
    },
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log("Michi eliminado de favoritos");
    loadFavouriteMichis();
  }
}

async function uploadMichiPhoto() {
  const form = document.getElementById("uploadingForm");
  const formData = new FormData(form);

  const response = await fetch(URL_IMAGE_UPLOAD, {
    method: "POST",
    headers: {
      // 'Content-Type': 'multipart/form-data',
      "X-API-KEY": X_API_KEY,
    },
    body: formData,
  });
  const data = await response.json();

  if (response.status !== 201) {
    spanError.innerHTML = "Hubo un error: " + response.status + data.message;
  } else {
    console.log("Michi subido");
    console.log({ data });
    console.log(data.url);
    console.log(saveFavouriteMichi(data.id));
  }
}

loadRandomMichis();
loadFavouriteMichis();