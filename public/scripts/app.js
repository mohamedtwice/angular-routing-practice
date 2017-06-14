var app = angular.module('routeApp', ['ngRoute']);

var photo = function(route, desc) {
  this.route = route;
  this.name = name;
  this.desc = false;
};

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'DefaultController as dc'
  }).when('/blade', {
    templateUrl: 'views/partials/blade.html',
    controller: 'BladeBrooks as bb'
  }).when('/bruce', {
    templateUrl: 'views/partials/bruce.html',
    controller: 'BruceLeroy as bl'
  }).when('/terry', {
    templateUrl: 'views/partials/terry.html',
    controller: 'TerryTate as tt'
  });
});

app.controller('DefaultController', DefaultController);
app.controller('BladeBrooks', BladeBrooks);
app.controller('BruceLeroy', BruceLeroy);
app.controller('TerryTate', TerryTate);


function DefaultController() {
  // var vm = this;
  // var img1 = new photo('blade.jpg', 'Blade');
  // var img2 = new photo('bruce.jpg', 'Bruce Leroy');
  // var img3 = new photo('terry.jpg', 'Terry Tate');
  // vm.photos = [img1, img2, img3];

  var favorites = {};
  favorites.data = [{
      id: 1,
      path: 'images/blade.jpg',
      description: 'Blade',
      url: 'http://localhost:3000/#!/blade',
      showText: true
    },
    {
      id: 2,
      path: 'images/bruce.jpg',
      description: 'Bruce',
      url: '#!/bruce',
      showText: true
    },
    {
      id: 3,
      path: 'images/terry.jpg',
      description: 'Terry',
      url: '#!/terry',
      showText: true
    },
  ];

  var vm = this;
  vm.photos = favorites.data;
  console.log('DefaultController is loaded');

  // vm.clicked = function(index) {
  //   window.location = "vm.photos[index].url";
  // };

  vm.gotoFavorite = function(index) {
    console.log(vm.photos[index].url);
    // vm.photos[index].url = !vm.photos[index].name;
    window.location = vm.photos[index].url;
  };

}

function BladeBrooks() {
  console.log('BladeBrooks is loaded');
}

function BruceLeroy() {
  console.log('BruceLeroy is loaded');
  vm.goTerry = function() {
    console.log('goTerry Clicked');
    $location.path('#!/terry');
    window.location = "#!/terry";
  };
}

function TerryTate() {
  console.log('TerryTate is loaded');
  var vm = this;
  vm.name = 'Brett';
}
