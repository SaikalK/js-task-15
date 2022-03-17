document.addEventListener("DOMContentLoaded", newCard);
    function newCard() {
        fetch("db.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let output = "";
            let container = document.createElement('div');
            container.className = "container";


            data.forEach((item) =>{
                let banner = document.createElement("div");
                banner.className = "banner";
                container.appendChild(banner);


                let img = document.createElement("img");
                img.src = item.img;
                img.className = "img";
                banner.appendChild(img);



                let itemDesc = document.createElement("div");
                itemDesc.className = "item-desc";
                banner.appendChild(itemDesc);

                let title = document.createElement("h4");
                title.className = "title";
                title.innerText = item.title;
                itemDesc.appendChild(title);


                let desc = document.createElement("p");
                desc.className = "desc";
                desc.innerText = item.desc;
                banner.appendChild(desc);

                let price = document.createElement("p");
                price.innerText = item.price;
                itemDesc.appendChild(price);



            });
            document.getElementById("banner").appendChild(container);
        })

        .catch((error) => {
            console.log(error);
        });
    }