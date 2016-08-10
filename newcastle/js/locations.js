var wikipediaHTML =
    '<div class="wikipedia-container">' +
    '<ul id="wikipedia-links"></ul>' +
    '</div>';

var flickrHTML =
    '<div class="flickr-container">' +
    '<ul id="flickr-links"></ul>' +
    '</div>';


var hotel = "hotel.jpeg";
var pubBar = "bar.png";
var toilets = "toilets.jpg";
var shops = "shop-icons.png";

// this is the model of mvvm
// under normal circumstances tis would all be stored in a database

var listLocations = [{
    name: "Hilton",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9697324",
    lng: "-1.6222632"
}, {
    name: "Ramada",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9679398",
    lng: "-1.5963386"
}, {
    name: "Premier Inn",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9688143",
    lng: "-1.6065323"
}, {
    name: "Travelodge",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9704799",
    lng: "-1.6034138"
}, {
    name: "Malmaison",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.970803",
    lng: "-1.60042"
}, {
    name: "Crowne Plaza",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9669835",
    lng: "-1.6176468"
}, {
    name: "Tune Hotel",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: hotel,
    lat: "54.9692062",
    lng: "-1.6086374"
}, {
    name: "Soho Rooms",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.970816",
    lng: "-1.610965"
}, {
    name: "All Bar One",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.9705202",
    lng: "-1.5994876"
}, {
    name: "Digital night club",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.967567",
    lng: "-1.6211934"
}, {
    name: "Tup Tup Palace",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.9698057",
    lng: "-1.6123548"
}, {
    name: "Bijoux",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.97",
    lng: "-1.6132738"
}, {
    name: "Electric Room",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: pubBar,
    lat: "54.970103",
    lng: "-1.609569"
}, {
    name: "Hotel du Vin & Bistro",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.9720905",
    lng: "-1.5905741"
}, {
    name: "intu Eldon Square",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.975203",
    lng: "-1.61513"
}, {
    name: "St. James Park newcastle",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.9755144",
    lng: "-1.6224744"
}, {
    name: "The Gate, Newgate Street",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.9728938",
    lng: "-1.6192287"
}, {
    name: "Tyneside Cinema",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.9739152",
    lng: "-1.6117572"
}, {
    name: "Theatre Royal",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: toilets,
    lat: "54.9727186",
    lng: "-1.6122349"
}, {
    name: "Metro Radio Arena",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: shops,
    lat: "54.96362",
    lng: "-1.6236838"
}, {
    name: "intu Eldon Square",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: shops,
    lat: "54.9752061",
    lng: "-1.617324"
}, {
    name: "Gateshead Millennium Bridge",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: shops,
    lat: "54.9697698",
    lng: "-1.6013716"
}, {
    name: "Sage Gateshead",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: shops,
    lat: "54.9676917",
    lng: "-1.6042828"
}, {
    name: "The Cathedral Church of St. Nicholas",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    icon: shops,
    lat: "54.9700842",
    lng: "-1.6133951"
}];