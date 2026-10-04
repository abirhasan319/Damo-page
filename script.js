// ==========================================
// CODELANBD
// HTML + CSS + JAVASCRIPT + PYTHON
// ==========================================


// ==========================================
// A-Z COURSE DATA
// ==========================================

const courses = {

    html: [

        "HTML Introduction & Setup",
        "HTML Document Structure",
        "Headings, Paragraphs & Text",
        "Links & Navigation",
        "Images",
        "Lists",
        "Tables",
        "Forms",
        "Input Types",
        "Buttons",
        "Semantic HTML",
        "Div, Span & Containers",
        "Audio & Video",
        "Iframes",
        "Meta Tags & SEO",
        "Accessibility",
        "HTML Entities",
        "Responsive HTML",
        "HTML5 Features",
        "Website Structure",
        "Form Validation",
        "Portfolio Page",
        "Landing Page",
        "Multi Page Website",
        "HTML Project",
        "Final HTML Project"

    ],


    css: [

        "CSS Introduction",
        "CSS Selectors",
        "Colors & Backgrounds",
        "Fonts & Typography",
        "Box Model",
        "Width & Height",
        "Display",
        "Position",
        "Flexbox",
        "CSS Grid",
        "Media Queries",
        "Responsive Design",
        "Borders & Shadows",
        "Margin & Padding",
        "Pseudo Classes",
        "Pseudo Elements",
        "Transitions",
        "Transforms",
        "CSS Animations",
        "CSS Variables",
        "Z Index",
        "Cards",
        "Navigation Design",
        "Modern Layout",
        "Portfolio Design",
        "Final CSS Project"

    ],


    javascript: [

        "JavaScript Introduction",
        "Variables",
        "Data Types",
        "Operators",
        "Strings",
        "Arrays",
        "Objects",
        "If Else",
        "Switch",
        "For Loop",
        "While Loop",
        "Functions",
        "Arrow Functions",
        "Scope",
        "Array Methods",
        "Object Methods",
        "DOM Introduction",
        "HTML Element Selection",
        "Events",
        "Forms",
        "Form Validation",
        "Local Storage",
        "JSON",
        "Fetch API",
        "Async Await",
        "Final JavaScript Project"

    ],


    // ======================================
    // PYTHON A-Z COURSE
    // ======================================

    python: [

        "Python Introduction & Setup",
        "Python Syntax",
        "Comments",
        "Variables",
        "Data Types",
        "Numbers",
        "Strings",
        "Booleans",
        "Type Casting",
        "User Input",

        "Operators",
        "Arithmetic Operators",
        "Comparison Operators",
        "Logical Operators",
        "Assignment Operators",

        "If Statement",
        "If Else",
        "Elif",
        "Nested Conditions",

        "For Loop",
        "While Loop",
        "Break & Continue",

        "Lists",
        "List Methods",
        "Tuples",
        "Sets",
        "Set Methods",

        "Dictionaries",
        "Dictionary Methods",

        "String Methods",

        "Functions",
        "Function Parameters",
        "Return Statement",
        "Lambda Functions",
        "Scope",
        "Recursion",

        "Modules",
        "Packages",

        "Date & Time",
        "Math Module",
        "Random Module",

        "File Handling",
        "Read & Write Files",

        "Exception Handling",
        "Try Except",

        "Classes & Objects",
        "Constructors",
        "Instance & Class Attributes",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",

        "Iterators",
        "Generators",

        "List Comprehension",
        "Dictionary Comprehension",

        "JSON",
        "Working with APIs",

        "Virtual Environment",
        "pip & Packages",

        "SQLite Database",

        "Python Project Structure",

        "Mini Projects",

        "Final Python Project"

    ]

};


// ==========================================
// ADMIN INFORMATION
// ==========================================

const ADMIN_EMAIL =
    "eropvkcarhkbcgj@gmail.com";

const ADMIN_PASSWORD =
    "@Abir12500*";


// ==========================================
// INTRO
// ==========================================

setTimeout(function () {

    document
        .getElementById("introScreen")
        .classList.add("hidden");

    showLogin();

}, 4200);


// ==========================================
// HIDE ALL PAGES
// ==========================================

function hideAll() {

    const pages = [

        "loginPage",
        "registerPage",
        "adminLoginPage",
        "homePage",
        "coursesPage",
        "dashboardPage",
        "adminPage"

    ];


    pages.forEach(function(id) {

        document
            .getElementById(id)
            .classList.add("hidden");

    });

}


// ==========================================
// LOGIN PAGE
// ==========================================

function showLogin() {

    hideAll();

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


// ==========================================
// REGISTER PAGE
// ==========================================

function showRegister() {

    hideAll();

    document
        .getElementById("registerPage")
        .classList.remove("hidden");

}


// ==========================================
// ADMIN LOGIN PAGE
// ==========================================

function showAdminLogin() {

    hideAll();

    document
        .getElementById("adminLoginPage")
        .classList.remove("hidden");

}


// ==========================================
// REGISTER USER
// ==========================================

function registerUser() {

    const name =
        document
        .getElementById("registerName")
        .value
        .trim();


    const email =
        document
        .getElementById("registerEmail")
        .value
        .trim()
        .toLowerCase();


    const password =
        document
        .getElementById("registerPassword")
        .value;


    const message =
        document
        .getElementById("registerMessage");


    if (!name || !email || !password) {

        message.innerText =
            "সব তথ্য পূরণ করুন।";

        message.style.color =
            "red";

        return;

    }


    if (password.length < 6) {

        message.innerText =
            "Password কমপক্ষে ৬ অক্ষরের হতে হবে।";

        message.style.color =
            "red";

        return;

    }


    const user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "codelanUser",
        JSON.stringify(user)
    );


    message.innerText =
        "Registration successful!";

    message.style.color =
        "green";


    setTimeout(function() {

        showLogin();

    }, 1000);

}


// ==========================================
// LOGIN USER
// ==========================================

function loginUser() {

    const email =
        document
        .getElementById("loginEmail")
        .value
        .trim()
        .toLowerCase();


    const password =
        document
        .getElementById("loginPassword")
        .value;


    const message =
        document
        .getElementById("loginMessage");


    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "codelanUser"
            )
        );


    if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "currentUser",
            savedUser.name
        );


        openWebsite();

    }

    else {

        message.innerText =
            "Email অথবা Password ভুল।";

        message.style.color =
            "red";

    }

}


// ==========================================
// ADMIN LOGIN
// ==========================================

function adminLogin() {

    const email =
        document
        .getElementById("adminEmail")
        .value
        .trim()
        .toLowerCase();


    const password =
        document
        .getElementById("adminPassword")
        .value;


    const message =
        document
        .getElementById(
            "adminLoginMessage"
        );


    if (
        email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
    ) {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );


        openAdmin();

    }

    else {

        message.innerText =
            "Admin Email অথবা Password ভুল।";

        message.style.color =
            "red";

    }

}


// ==========================================
// OPEN WEBSITE
// ==========================================

function openWebsite() {

    hideAll();


    document
        .getElementById("navbar")
        .classList.remove("hidden");


    document
        .getElementById("homePage")
        .classList.remove("hidden");


    const name =
        localStorage.getItem(
            "currentUser"
        ) || "Student";


    document
        .getElementById(
            "welcomeName"
        )
        .innerText = name;


    document
        .getElementById(
            "dashboardName"
        )
        .innerText = name;


    document
        .getElementById(
            "avatarText"
        )
        .innerText =
            name.substring(0,2)
            .toUpperCase();

}


// ==========================================
// HOME
// ==========================================

function showHome() {

    hideAll();

    document
        .getElementById("navbar")
        .classList.remove("hidden");

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


// ==========================================
// COURSES
// ==========================================

function showCourses() {

    hideAll();

    document
        .getElementById("navbar")
        .classList.remove("hidden");

    document
        .getElementById("coursesPage")
        .classList.remove("hidden");


    showCourse("html");

}


// ==========================================
// SHOW COURSE
// ==========================================

function showCourse(courseName) {

    const container =
        document.getElementById(
            "courseLessons"
        );


    container.innerHTML = "";


    const lessons =
        courses[courseName];


    if (!lessons) {
        return;
    }


    lessons.forEach(
        function(lesson, index) {


        const letter =
            String.fromCharCode(
                65 + index
            );


        const div =
            document.createElement(
                "div"
            );


        div.className =
            "lesson";


        div.innerHTML = `

            <div>

                <strong>
                    ${letter}.
                </strong>

                ${lesson}

            </div>

            <button
                onclick="playLesson(
                    '${courseName}',
                    ${index},
                    '${lesson.replace(/'/g, "\\'")}'
                )"
            >

                ▶ Watch

            </button>

        `;


        container.appendChild(div);

    });

}


// ==========================================
// DASHBOARD
// ==========================================

function showDashboard() {

    hideAll();

    document
        .getElementById("navbar")
        .classList.remove("hidden");

    document
        .getElementById("dashboardPage")
        .classList.remove("hidden");


    const name =
        localStorage.getItem(
            "currentUser"
        ) || "Student";


    document
        .getElementById(
            "dashboardName"
        )
        .innerText = name;

}


// ==========================================
// ADMIN
// ==========================================

function openAdmin() {

    hideAll();


    document
        .getElementById("navbar")
        .classList.remove("hidden");


    document
        .getElementById("adminNav")
        .classList.remove("hidden");


    document
        .getElementById("adminPage")
        .classList.remove("hidden");


    loadAdminLessons();

    showUploadedVideos();

}


// ==========================================
// SHOW ADMIN PAGE
// ==========================================

function showAdmin() {

    if (
        localStorage.getItem(
            "adminLoggedIn"
        ) !== "true"
    ) {

        showAdminLogin();

        return;

    }


    openAdmin();

}


// ==========================================
// ADMIN LESSON LIST
// ==========================================

function loadAdminLessons() {

    const course =
        document
        .getElementById(
            "adminCourse"
        )
        .value;


    const lessonSelect =
        document
        .getElementById(
            "adminLesson"
        );


    lessonSelect.innerHTML = "";


    courses[course].forEach(
        function(lesson,index) {

            const option =
                document.createElement(
                    "option"
                );


            const letter =
                String.fromCharCode(
                    65 + index
                );


            option.value =
                index;


            option.textContent =
                `${letter}. ${lesson}`;


            lessonSelect.appendChild(
                option
            );

        }
    );

}


document
    .getElementById("adminCourse")
    .addEventListener(
        "change",
        loadAdminLessons
    );


// ==========================================
// UPLOAD VIDEO
// ==========================================

function uploadVideo() {

    const course =
        document
        .getElementById(
            "adminCourse"
        )
        .value;


    const lessonIndex =
        Number(
            document
            .getElementById(
                "adminLesson"
            )
            .value
        );


    const file =
        document
        .getElementById(
            "videoFile"
        )
        .files[0];


    const message =
        document
        .getElementById(
            "uploadMessage"
        );


    if (!file) {

        message.innerText =
            "প্রথমে video select করুন।";

        message.style.color =
            "red";

        return;

    }


    const key =
        `video_${course}_${lessonIndex}`;


    const reader =
        new FileReader();


    reader.onload =
        function(event) {


        localStorage.setItem(
            key,
            event.target.result
        );


        localStorage.setItem(
            `${key}_name`,
            file.name
        );


        message.innerText =
            "Video successfully uploaded!";

        message.style.color =
            "green";


        showUploadedVideos();

    };


    reader.readAsDataURL(file);

}


// ==========================================
// UPLOADED VIDEOS
// ==========================================

function showUploadedVideos() {

    const container =
        document.getElementById(
            "uploadedList"
        );


    container.innerHTML = "";


    Object.keys(localStorage)
        .forEach(function(key) {


        if (
            key.startsWith("video_") &&
            !key.endsWith("_name")
        ) {


            const parts =
                key.split("_");


            const course =
                parts[1];


            const index =
                Number(parts[2]);


            if (
                !courses[course] ||
                !courses[course][index]
            ) {
                return;
            }


            const lesson =
                courses[course][index];


            const fileName =
                localStorage.getItem(
                    `${key}_name`
                );


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "uploaded-item";


            div.innerHTML = `

                <strong>
                    ${course.toUpperCase()}
                </strong>

                -

                ${lesson}

                <br>

                <small>
                    ${fileName || "Video"}
                </small>

            `;


            container.appendChild(div);

        }

    });

}


// ==========================================
// PLAY LESSON
// ==========================================

function playLesson(
    course,
    index,
    lesson
) {

    const key =
        `video_${course}_${index}`;


    const video =
        localStorage.getItem(
            key
        );


    if (!video) {

        alert(
            "এই lesson-এর video এখনো Admin upload করেনি।"
        );

        return;

    }


    document
        .getElementById(
            "videoTitle"
        )
        .innerText = lesson;


    document
        .getElementById(
            "lessonVideo"
        )
        .src = video;


    document
        .getElementById(
            "videoModal"
        )
        .classList.remove(
            "hidden"
        );

}


// ==========================================
// CLOSE VIDEO
// ==========================================

function closeVideo() {

    const video =
        document.getElementById(
            "lessonVideo"
        );


    video.pause();

    video.src = "";


    document
        .getElementById(
            "videoModal"
        )
        .classList.add(
            "hidden"
        );

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "loggedIn"
    );

    localStorage.removeItem(
        "currentUser"
    );

    localStorage.removeItem(
        "adminLoggedIn"
    );


    document
        .getElementById(
            "navbar"
        )
        .classList.add(
            "hidden"
        );


    showLogin();

}