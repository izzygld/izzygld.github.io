// <!-- Still need to implemet the navbar icons
//make it more mvc framework compatiible

var work = {

    "jobs": [{

            "employer": "Compuskills",
            "title": "Fullstack developer",
            "dates": "January 2016 - April 2016",
            "location": "jerusalem",
            "description": "Team Project, Database, frontend, Mvc."
        }, {
            "employer": "Ecommerceinnovators.",
            "title": "Frontend developer",
            "dates": "May 2016 - July 2016",
            "location": "Bet shemesh",
            "description": "Team Project, Debugger, frontend, Php."
        }

    ],

    "display": function() {
        for (var i = 0; i < work.jobs.length && work.jobs.length > 0; i++) {

            $('#workExperience').append(HTMLworkStart);

            var formatemployee = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var f = formatemployee + formattedtitle;
            $(".work-entry:last").append(f);

            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));

            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));


            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        }
    }
};

var projects = {

    "projects": [{

            "title": "Website design",
            "dates": "2015 -2016",
            "description": "Personal website, PHP, wordpress, blog",
            "images": ["images/mywebsite.jpg"],
            "url": "https://izzygoldmanco.wordpress.com/"
        },

        {
            "title": "Optomoziation of Cam's Pizza Store",
            "dates": "2015 -2016",
            "description": "Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90 and Eliminated inefficiencies in the website's scroll animation. Site now scrolls at 60 frames per second.",
            "images": ["images/pizzeria-large.jpg"],
            "url": "https://izzygld.github.io/optimized/dist/pizza.html"
        },
        {
            "title": "Arcade Game",
            "dates": "2015 -2016",
            "description": "Redesign of the classic Arcade frogger game",
            "images": ["images/frogger.png"],
            "url": "https://izzygld.github.io/frogger-game/"
        }
    ],

    "display": function() {
        for (var project = 0; project < projects.projects.length; project++) {

            $("#projects").append(HTMLprojectStart);

            title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(title);

            dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(dates);

            description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(description);

            url = HTMLprojectLink.replace("%data%", projects.projects[project].url);
            $(".project-entry:last").append(url);

            var pictures = [];
            for (var img = 0; img < projects.projects[project].images.length; img++) {

                pictures[img] = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);

                pictures[img] = pictures[img].replace("%title%", projects.projects[project].title);
            }

            for (var pic = 0; pic < projects.projects[project].images.length; pic++) {

            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[pic]));

            }
        }
    }
};

var bio = {

    "name": "Izzy Goldman",
    "role": "Web developer",
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Frontend developer ", " JS", " HTML5", " CSS3", " JQuery", "AJAX","BootStrap"],
    "biopic": "images/beach.jpg",


    "contacts": {
        "mobile": "00972-5426185423",
        "email": "izzygld@gmail.com",
        "github": "[click here]",
        "linkedin": "[click here]",
        "location": "Bet shemesh, Israel",
        "homeTown": "Newcastle, United Kingdom"



    },
    "display": function() {
        var name = bio.name;
        $("#header").prepend(HTMLheaderName.replace("%data%", name));

        var role = bio.role;
        $("#role").append(HTMLheaderRole.replace("%data%", role));


        //Note: I wish to use only the social icons (and no contact info details).
        var biopic = bio.biopic;
        $("#contactInfo").append(HTMLbioPic.replace("%data%", biopic));

        var mobile = bio.contacts.mobile;
        $("#topContacts").append(HTMLmobile.replace("%data%", mobile));

        var email = bio.contacts.email;
        $("#topContacts").append(HTMLemail.replace("%data%", email));

        var github = bio.contacts.github;
        $("#topContacts").append(HTMLgithub.replace("%data%", github));

        var link = bio.contacts.linkedin;
        $("#topContacts").append(HTMLlinkedin.replace("%data%", link));

        var _location = bio.contacts.location;
        $("#topContacts").append(HTMLlocation.replace("%data%", _location));

        function bioSkills() {

            $(".displaySkills").append(HTMLskillsStart);

            for (var indexCount = 0; indexCount < bio.skills.length && bio.skills.length > 0; indexCount++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[indexCount] + ",");
                $("#skills").append(formattedSkills);
            }

            $("#mapDiv").append(googleMap);
        }
        bioSkills();
    }
};

var education = {

    "schools": [{

            "name": "Michigan jewish istitute",
            "location": "michigan, U.S.A.",
            "dates": "2011 - 2014",
            "degree": "computer science",
            "majors": ["computer science"],
            "url": "https://www.umich.edu/"
        }, {
            "name": "Compuskills",
            "location": "Jerusalem, Israel",
            "dates": "2013 - 2016",
            "degree": "Fullstack web developer",
            "majors": ["computer science"],
            "url": "https://www.umich.edu/"
        }, {
            "name": "Udacity",
            "location": "Mountain View, California",
            "dates": "2016",
            "degree": "Nano Degree, Frontend developer",
            "majors": ["computer science"],
            "url": "https://www.umich.edu/"
        }],

    "onlineCourses": [{

        "title": "SQL",
        "school": "Codeacademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/learn-sql"
    }],
    "display": function() {
        for (var school = 0; school < education.schools.length; school++) {

            $("#education").append(HTMLschoolStart);

            var formattedname = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedname + formatteddegree);

            var formattedcity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedcity);

            var formatteddates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formatteddates);

            for (var maj = 0; maj < education.schools[school].majors.length; maj++) {
            var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[maj]);
            $(".education-entry:last").append(formattedmajor);

            }
        }

        for (var course = 0; course < education.onlineCourses.length; course++) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            formattedtitle = formattedtitle.replace("#", education.onlineCourses[course].urlCourse);
            var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedtitle + formattedschool);

            var formatteddate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formatteddate);


            var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedurl);

        }
    }
};

education.display();
work.display();
bio.display();
projects.display();


$("#main").append(internationalizeButton);


function inName() {

    var name = bio.name;

    var newnamearray = name.split(" ");
    newnamearray[1] = newnamearray[1].toUpperCase();

    newnamearray[0] = newnamearray[0].slice(0, 1).toUpperCase() + newnamearray[0].slice(1).toLowerCase();
    var finalname = newnamearray.join(" ");
    return finalname;

}

inName();
