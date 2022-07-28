function display_subconcepts(arrow) {
    var tag_list = arrow.parentNode.nextElementSibling;
    if (window.getComputedStyle(tag_list).display === "none") {
        tag_list.style.display = "flex";
        arrow.style.transform = "rotate(90deg)";
    } else {
        tag_list.style.display = "none";
        arrow.style.transform = "none";
    }
}

function change_tag_status(tag) {
    if (tag.classList.contains("selected")) {
        tag.className = "small-tag";
    } else {
        tag.className += " selected";
    }
}

function select_tag(tag) {
    change_tag_status(tag);

    var next_div = tag.parentNode.nextElementSibling;

    if (next_div.classList.contains("tag-list")) {
        var all_tags = next_div.getElementsByClassName("small-tag")
        if (tag.classList.contains("selected")) {
            Array.prototype.forEach.call(all_tags, function (tag) {
                if (!(tag.classList.contains("selected"))) { change_tag_status(tag) }
            });
        } else {
            Array.prototype.forEach.call(all_tags, function (tag) {
                if (tag.classList.contains("selected")) { change_tag_status(tag) }
            });
        }
    }
}

function show_panel(arrow) {
    panel = document.getElementById("tags-panel-container");
    elements_to_hide = [document.getElementById("tags-panel-text"),
    document.getElementById("tags-panel-tree"),
    document.getElementById("title-button-container").getElementsByTagName('p')[0],
    panel.getElementsByTagName('hr')[0]
    ]

    if (!(arrow.innerHTML === "←")) {
        panel.style.left = "0";
        panel.style.paddingRight = "1rem";
        elements_to_hide.forEach(element => element.style.visibility = "visible");
        arrow.innerHTML = "←";
    } else {
        panel.style.left = "-18rem";
        panel.style.paddingRight = "0.5rem";
        elements_to_hide.forEach(element => element.style.visibility = "hidden");
        arrow.innerHTML = "→";
    }
}