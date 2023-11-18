(function get_data() {
    var sections = document.getElementById("sc_sccoursedescs").children;
    var data = [document.getElementById("content").children[0].innerText];
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        if (section.className == "courseblock") {
            data.push(["block",
                ["title", section.children[0].innerText],
                ["prerec", section.children[1].children[0].innerText],
                ["terms", section.children[1].children[2].innerHTML.split("<br>")],
                ["desc", section.children[2].innerText],
                ["inst", section.children[3].innerText.split(", ")]
            ]);
        } else if (section.className == "sectionhead") {
            data.push(["head", section.innerText]);
        } else if (section.className == "subsection") {
            data.push(["sub", section.innerText.split("\n")[1]]);
        }
    }
    console.log(JSON.stringify(data))
})();