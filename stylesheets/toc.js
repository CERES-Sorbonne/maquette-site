function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1).trim() + '&hellip;' : str.trim();
};

function generate_toc() {
    var ToC = `<nav>`;    
    var newLine, el, title, link;
    var count = 0;

    $("article h2").each(function () {
        el = $(this);
        title = truncate(el.text(), 50);
        count += 1;
        $(this).attr("id", "heading" + count);
        link = "#" + el.attr("id");
        newLine =
            "<p>" +
            "<a href='" + link + "'>" +
            title +
            "</a>" +
            "</p>";
        ToC += newLine;
    });

    ToC += "</nav>";


    $("#toc-container").prepend(ToC);
}