angular.module('localPair').service('mainService', function ($http, $q) {

    var expertData = [
        {
            "name": "Wyatt Carey",
            "subjects": "soups, salads, noodles, desserts, pasta, seafood, stews",
            "city": "Salt Lake City",
            "zipcode": "A5T 0Y5",
            "img": 'https://randomuser.me/api/portraits/med/men/84.jpg',
            "description": "neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum"
        },
        {
            "name": "Colette Sargent",
            "subjects": "sandwiches, desserts",
            "city": "Montluçon",
            "zipcode": "39789",
            "img": 'https://randomuser.me/api/portraits/med/women/89.jpg',
            "description": "nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem"
        },
        {
            "name": "Alyssa Aguirre",
            "subjects": "noodles, pasta, salads",
            "city": "Santu Lussurgiu",
            "zipcode": "2979",
            "img": 'https://randomuser.me/api/portraits/med/women/84.jpg',
            "description": "eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
        },
        {
            "name": "Hector Griffith",
            "subjects": "salads, soups, desserts, pasta, seafood",
            "city": "Badajoz",
            "zipcode": "10515",
            "img": 'https://randomuser.me/api/portraits/med/men/11.jpg',
            "description": "scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam"
        },
        {
            "name": "Madison Ruiz",
            "subjects": "pasta, soups, sandwiches",
            "city": "Salem",
            "zipcode": "34217-608",
            "img": 'https://randomuser.me/api/portraits/med/women/12.jpg',
            "description": "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero dui nec"
        },
        {
            "name": "Faith Blair",
            "subjects": "pasta, sandwiches, noodles, cereals",
            "city": "Birori",
            "zipcode": "976843",
            "img": 'https://randomuser.me/api/portraits/med/women/13.jpg',
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam"
        },
        {
            "name": "Justine Forbes",
            "subjects": "pasta, soups, noodles, pies, desserts, seafood",
            "city": "Salamanca",
            "zipcode": "06984",
            "img": 'https://randomuser.me/api/portraits/med/women/14.jpg',
            "description": "Erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla"
        },
        {
            "name": "Colby Perkins",
            "subjects": "salads, pasta, soups",
            "city": "Clermont-Ferrand",
            "zipcode": "51808",
            "img": 'https://randomuser.me/api/portraits/med/men/15.jpg',
            "description": "quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit"
        },
        {
            "name": "Kylynn Gonzalez",
            "subjects": "stews, cereals, soups",
            "city": "Junagadh",
            "zipcode": "08862",
            "img": 'https://randomuser.me/api/portraits/med/women/16.jpg',
            "description": "sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum"
        },
        {
            "name": "Lucy Mcfadden",
            "subjects": "salads, desserts, pies",
            "city": "Speyer",
            "zipcode": "51338",
            "img": 'https://randomuser.me/api/portraits/med/women/17.jpg',
            "description": "fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu"
        },
        {
            "name": "Marvin Stout",
            "subjects": "sandwiches, pasta, salads",
            "city": "Neuwied",
            "zipcode": "9096",
            "img": 'https://randomuser.me/api/portraits/med/men/18.jpg',
            "description": "Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi"
        },
        {
            "name": "Thor Raymond",
            "subjects": "salads",
            "city": "Tiltil",
            "zipcode": "53576-078",
            "img": 'https://randomuser.me/api/portraits/med/men/19.jpg',
            "description": "lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque"
        },
        {
            "name": "Xander Mooney",
            "subjects": "pasta, noodles, cereals, soups, salads, pies",
            "city": "Maglie",
            "zipcode": "33913",
            "img": 'https://randomuser.me/api/portraits/med/men/20.jpg',
            "description": "porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat"
        },
        {
            "name": "Uriel Rivas",
            "subjects": "stews, pasta, salads",
            "city": "Levallois-Perret",
            "zipcode": "9343",
            "img": 'https://randomuser.me/api/portraits/med/men/21.jpg',
            "description": "magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et"
        },
        {
            "name": "Jordan Shaw",
            "subjects": "pies, sandwiches, cereals, salads, pasta, desserts",
            "city": "Sellano",
            "zipcode": "K0H 5G3",
            "img": 'https://randomuser.me/api/portraits/med/men/22.jpg',
            "description": "purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt"
        },
        {
            "name": "Kevyn Hays",
            "subjects": "soups, seafood, sandwiches, pies",
            "city": "Cap-de-la-Madeleine",
            "zipcode": "86174",
            "img": 'https://randomuser.me/api/portraits/med/men/23.jpg',
            "description": "dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui"
        },
        {
            "name": "Demetria Fuentes",
            "subjects": "salads, soups, cereals, pasta, noodles, desserts",
            "city": "Coaldale",
            "zipcode": "5123",
            "img": 'https://randomuser.me/api/portraits/med/women/24.jpg',
            "description": "Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero."
        },
        {
            "name": "Nadine Luna",
            "subjects": "stews, salads, pies, seafood, noodles, pasta",
            "city": "Saint-Dié-des-Vosges",
            "zipcode": "7207",
            "img": 'https://randomuser.me/api/portraits/med/women/25.jpg',
            "description": "sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,"
        },
        {
            "name": "Fulton Soto",
            "subjects": "stews, salads",
            "city": "Palanzano",
            "zipcode": "47169",
            "img": 'https://randomuser.me/api/portraits/med/men/26.jpg',
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque."
        },
        {
            "name": "Laith Waters",
            "subjects": "desserts, salads, soups",
            "city": "The Hague",
            "zipcode": "P5T 7N3",
            "img": 'https://randomuser.me/api/portraits/med/men/27.jpg',
            "description": "orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus."
        },
        {
            "name": "Slade Fuentes",
            "subjects": "sandwiches, salads, desserts, pasta, soups, stews, noodles",
            "city": "Ahrensburg",
            "zipcode": "300833",
            "img": 'https://randomuser.me/api/portraits/med/men/28.jpg',
            "description": "odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum"
        },
        {
            "name": "Griffin Bartlett",
            "subjects": "sandwiches, noodles, soups, pasta, stews, cereals, seafood",
            "city": "Weert",
            "zipcode": "05739",
            "img": 'https://randomuser.me/api/portraits/med/men/29.jpg',
            "description": "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem"
        },
        {
            "name": "Demetrius Campos",
            "subjects": "soups, sandwiches, pies, noodles",
            "city": "Cobourg",
            "zipcode": "585349",
            "img": 'https://randomuser.me/api/portraits/med/men/30.jpg',
            "description": "ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu"
        }
    ];

    this.getExperts = function () {
        return expertData;
    }
    
    // this.getRandomPeople = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         url: 'http://api.randomuser.me/?results=23',
    //         method: 'GET'
    //     }).then(function(response){
    //         console.log(response.data.results);
            
    //         for(var i = 0; i < response.data.results.length; i++){
    //             console.log(response.data.results[i].user.picture.medium);
   
    //         }
            
    //         deferred.resolve(response);
    //     })
    //     return deferred.promise
        
    // }


});