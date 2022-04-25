let listings = [
        {
            img: "/listing-images/ihop-mountVernonWA.png",
            property: "IHOP",
            status: "JUST LISTED",
            location: "MOUNT VERNON, WA",
            price: "$3,590,000",
            caprate: "5.15%",
            url:"https://brownretailgroup.com/listings/ihop-mount-vernon-wa/",
        },
        {
            img: "/listing-images/jib-federalWayWA.png",
            property: "JACK IN THE BOX",
            status: "JUST LISTED",
            location: "FEDERAL WAY, WA",
            price: "$3,028,235",
            caprate: "4.25%",
            url: "https://brownretailgroup.com/listings/jack-in-the-box-federal-way-wa/",
        },
        {
            img: "/listing-images/riteAid-laceyWA.png",
            property: "RITE AID",
            status: "JUST LISTED",
            location: "LACEY, WA",
            price: "$5,636,364",
            caprate: "5.50%",
            url: "https://brownretailgroup.com/listings/rite-aid-lacey-wa/",
        },
        {
            img: "/listing-images/calibercollision-hazelDellWA.png",
            property: "CALIBER COLLISION",
            status: "JUST LISTED",
            location: "HAZEL DELL, WA",
            price: "$5,208,850",
            caprate: "4.65%",
            url: "https://brownretailgroup.com/listings/caliber-collision-hazel-dell/",
        },
        {
            img: "/listing-images/fischerStudioRetailCondos-seattle.png",
            property: "FISCHER STUDIO RETAIL CONDOS",
            status: "JUST LISTED",
            location: "SEATTLE, WA",
            price: "$3,230,000",
            caprate: "7.00%",
            url: "https://brownretailgroup.com/listings/fischer-studio-retail-condominiums/",
        },
        {
            img: "/listing-images/omakPortfolio-omakWA.png",
            property: "OMAK PORTFOLIO",
            status: "UNDER CONTRACT",
            location: "OMAK, WA",
            price: "$3,240,000",
            caprate: "7.37%",
            url: "https://brownretailgroup.com/listings/omak-portfolio/",
        },
    ]

    var tempdiv = null;

    for (let i = 0; i < listings.length; i++){
        //create new div
        let tempdiv = document.createElement("div");
    
        //calls image
        let image = document.createElement("img");
        image.setAttribute(`src`, listings[i].img);
        tempdiv.appendChild(image);
        
        //calls property name
        var property = document.createElement("p");
        var propertyName = document.createTextNode(listings[i].property);
        property.appendChild(propertyName);
        tempdiv.appendChild(property);

        //calls property status
        var propertyStatus = document.createElement("ul");
        var currentStatus = document.createTextNode("status: " + listings[i].status);
        propertyStatus.appendChild(currentStatus);
        tempdiv.appendChild(propertyStatus);

        //calls property location
        var a = document.createElement("ul");
        var b = document.createTextNode("location: " + listings[i].location);
        a.appendChild(b);
        tempdiv.appendChild(a);

        //calls property price
        var x = document.createElement("ul");
        var y = document.createTextNode("price: " + listings[i].price);
        x.appendChild(y);
        tempdiv.appendChild(x);

        //calls property cap rate
        var cap = document.createElement("ul");
        var rate = document.createTextNode("cap rate: " + listings[i].caprate);
        cap.appendChild(rate);
        tempdiv.appendChild(cap);

        //creates and links button
        let btn = document.createElement("button");
        btn.innerHTML = "view listing";
        btn.addEventListener("click", function (){});
        tempdiv.appendChild(btn);

        document.getElementById("listings").appendChild(tempdiv);
    }