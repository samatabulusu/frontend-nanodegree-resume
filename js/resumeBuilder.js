/* Front End Web Developer              */
/* Project 2, Online Course, Udacity    */
/* @date 4/10/15                        */
/* @author Samata Suravajjula           */
/* A javascript file for resume objects */

// bio JSON object
var bio = {
	"name" : "Felonius Gru",
	"role" : "Former Supervillan, Jelly Manufacturer and Consultant for Anti-Villan League",
	"contacts" : {
		"mobile" : "010-000-0001",
		"email" : "gru@antivillan.league",
		"github" : "https://github.com/samatabulusu",
		"twitter" : "@antivillanleague",
		"location" : "Albuquerque, New Mexico"
	},
	"welcomeMessage" : "Formerly the world's greatest villan, now a Consultant for the Anti-Villan League",
	"skills" : ["Parent", "Strong", "Athletic", "Agile", "Intelligent", "Clever", "Boss", "Impersonator"],
	"biopic" : "images/feloniusgru.jpeg",
	"display" : function() {
		// formatted variables
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		// append formatted variables

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		// do not append github account to top contact list
		//$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMessage);

		if (bio.skills.length > 0) {
		    $("#header").append(HTMLskillsStart);
		    var formattedSkill;
		    for (i = 0; i < bio.skills.length; i++) {
		        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		        $("#skills").append(formattedSkill);
		    }
		}
	}
}

// call on bio's display object to make header visible
bio.display();

// work JSON object
var work = {
	"jobs" : [
		{
			"employer" : "Universal Studios",
			"title" : "Despicable Me 2, Consultant for the Anti-Villan League",
			"location" : "Albuquerque, New Mexico",
			"dates" : "March 2013 - 2015",
			"description" : "I, Gru have forsaken a life of crime to raise Margo, Agnes and Edith, and am trying to figure out how to provide for my new family. As I struggle with my responsibilities as a father, the Anti-Villain League -- an organization dedicated to fighting evil -- comes calling. The AVL sends me on a mission to capture the perpetrator of a spectacular heist, for who would be better than the world's greatest ex-villain to capture the individual who seeks to usurp my power."
		},
		{
			"employer" : "Universal Studios",
			"title" : "Despicable Me, Supervillan",
			"location" : "Albuquerque, New Mexico",
			"dates" : "2010 - 2013",
			"description" : "I, Gru, a supervillain hatch plan to steal the moon. Surrounded by my army of little yellow minions and our impenetrable arsenal of weapons and war machines, I vanquish all who stand in my way. But nothing in my calculations and groundwork prepared me for my greatest challenge: three adorable orphan girls (Miranda Cosgrove, Dana Gaier, Elsie Fisher) who want to make me their dad."
		},
		{
			"employer" : "Universal Studios",
			"title" : "Home Makeover, Parent",
			"location" : "Albuquerque, New Mexico",
			"dates" : "Oct 2010 - Nov	 2010",
			"description" : "A social worker is coming to my house to see if it's suitable for my children. The minions, Edith, Agnes and Margo give the home a girly pink home makeover."
		}
	],
	"display" : function() {
		// start work
        $("#workExperience").append(HTMLworkStart);
        for (job in work.jobs) {
	        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	        $(".work-entry:last").append(formattedWorkEmployer + formattedworkTitle);

	        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	        $(".work-entry:last").append(formattedLocation);

	        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	        $(".work-entry:last").append(formattedDates);

	        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	        $(".work-entry:last").append(formattedDescription);
        }
	}
}

// call on work object's display to make work visible
work.display();

var projects = {
	"projects" : [
		{
			"title" : "Freeze Ray",
			"dates" : "2010",
			"description" : "Water becomes a liquid at 100 degrees Celsius and freezes at 0 degrees Celsius. I designed and created a freeze ray weapon that would cool the air around a person or object to 0 degrees Celsius, freezing the water vapour in the air around that person. I frequently use it to get to the front of line in the coffee shop. I also use it on anyone in my way.",
			"images" : ["images/freezeray1.jpeg", "images/freezeray2.jpeg"]
		},
		{
			"title" : "Steal Shrink Ray back from Vector",
			"dates" : "2010",
			"description" : "During a testing of the shrink ray in a facility in East Asia, I stole the shrink ray and flew off in my ship. However, Vector stole the shrink ray from me mid-flight. I asked Dr. Nefario to make cookie robots and use the girls to sell Vector the robot cookies. The cookie robots once in Vector's lair, activate and break into Vector's vault. The minions and I retrieve the shirink ray and escape using the air vents without Vector noticing.",
			"images" : ["images/robotscookie.jpeg", "images/shrinkray.jpeg"]

		},
		{
			"title" : "Steal the Moon",
			"dates" : "2010",
			"description" : "I board a rocket and fly off to the moon. After shrinking the moon, with the shrink ray, I pocket it. Mid-flight, I have to hand the moon over to Vector as he is holding the girls captive. Dr. Nefario explains that the effects of the shrink ray are not permanent and the moon starts to grow smashing Vecors pod. I rescue the girls from Vector's ship as the moon crushes Vector and his controls and accelerates to space right back into its orbit.",
			"images" : ["images/rocket.jpeg", "images/rockettomoon.jpeg", "images/shrinkmoon.jpeg"]
		},
		{
			"title" : "Other Weapons (used for self defense, stealing important icons, escaping without being seen but never to injure, maim or destruct)",
			"dates" : "2010",
			"description" : "SR-6, Fart Gun, Lazer, Rocket Launcher, Grumobile, Jellu Gun, Airship, Big Blaster Cannon and many more..",
			"images" : []
		}

	],
	"display" : function() {
        // start a new project section
        $("#projects").append(HTMLprojectStart);

		for (project in projects.projects) {
	        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	        $(".project-entry:last").append(formattedTitle);

	        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	        $(".project-entry:last").append(formattedDates);

	        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	        $(".project-entry:last").append(formattedDescription);

	        if (projects.projects[project].images.length > 0) {
	        	var counter = 0;
	            for (image in projects.projects[project].images) {
	                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]).replace("%id%", project + counter);
	                $(".project-entry:last").append(formattedImage);
	                counter = counter + 1;
	            }
	        }

		}
	}
}

// call on projects object's display to make projects visible
projects.display();

// education JSON object
var education = {
	"schools" : [
		{
			"name" : "California Institute of Technology",
			"location" : "1200 East California Boulevard, Pasadena, CA 91125",
			"degree" : "Doctor of Philosophy",
			"majors" : ["Aeronautics"],
			"dates" : 1990,
			"url" : "http://www.galcit.caltech.edu/academics/grad_as"
		},
		{
			"name" : "Massachusetts Institute of Technology",
			"location" : "77 Massachusetts Avenue, 33-207, Cambridge MA 02139 USA",
			"degree" : "Master of Science",
			"majors" : ["Aerospace Computational Engineering", "Humans in Aerospace", "Space Propulsion", "Space Systems"],
			"dates" : 1982,
			"url" : "http://aeroastro.mit.edu/about-aeroastro"
		},
		{
			"name" : "University of Sydney",
			"location" : "University of Sydney, NSW 2006, Australia",
			"degree" : "Bachelor of Engineering",
			"majors" : ["Aeronautical", "Aeronautical Space", "Mechatronics", "Mechatronics Space"],
			"dates" : 1978,
			"url" : "http://web.aeromech.usyd.edu.au/index.php"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Doctor of Philosophy in Energy Resource Engineering",
			"school" : "Stanford",
			"date" : 2005,
			"url" : "https://pangea.stanford.edu/departments/ere/academics"
		}
	],
	"display" : function() {

		// are there any geo schools?
		if (education.schools.length > 0) {
			// if true, iterate geo schools and append them
		    for (var school in education.schools) {
		        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		        //var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);

				// start education
				$("#education").append(HTMLschoolStart);
		        $(".education-entry:last").append(formattedName + formattedDegree);
		        $(".education-entry:last").append(formattedDates);
		        $(".education-entry:last").append(formattedLocation);

		        // if more than one major then this array will have to be traversed
		        if (education.schools[school].majors.length > 0) {
		        	var m = "";
		            for (i =0; i < education.schools[school].majors.length; i++) {
		            	if (m.length > 0 && i != education.schools[school].majors.length) { m += ", "}
		            	m += education.schools[school].majors[i]
	            	}
					var formattedMajor = HTMLschoolMajor.replace("%data%", m);
	            	$(".education-entry:last").append(formattedMajor);
	            	m = "";
	            }

		    }
		}

		// are there any online courses?
		if (education.onlineCourses.length > 0) {
			// start a new online course sub-section
			$("#education").append(HTMLonlineClasses);

		    // iterate through the courses and append them
		    for (var course in education.onlineCourses) {
		    	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		    	var formattedSchoolName =  HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		    	var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		    	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

				$("#education").append(HTMLschoolStart);
		    	$(".education-entry:last").append(formattedTitle + formattedSchoolName);
		    	$(".education-entry:last").append(formattedDate);
		    	$(".education-entry:last").append(formattedURL);
		    }
		}
	}
}

// call on education's display object to make education visible
education.display();

// achievements JSON object
var achievements = {
	"achievements" : ["Drawing a picture of myself landing on the moon", "Making a macaroni prototype of the rocket", "Making a full-sized, fully-working rocket, based on the model and macaroni prototype", "Stealing the Times Square Jumbotron", "Stealing the Statue of Liberty (the small one from Las Vegas)", "Adopting three girls from Ms. Hattie's Home for Girls", "Stealing the Shrink Ray", "Making a rocket (with help from the Minions and Dr. Nefario", "Stealing the moon (momentarily)", "Saving Margo, Edith and Agnes from Vector", "Unintentionally returning the moon", "Becoming the world's best hero (unintentionally, of course)", "Becoming a caring father"],
	"display" : function() {
		if (achievements.achievements.length > 0) {
			for (i = 0; i < achievements.achievements.length; i++) {
				var formattedAchievement = HTMLachievements.replace("%data%", achievements.achievements[i]);
				$("#achievements").append(formattedAchievement);
			}
		}
	}
}

// call on achievemen's display object to make achievements visible
achievements.display();

// add internationalize button to the page
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


