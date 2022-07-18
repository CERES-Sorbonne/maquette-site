function generate_toc() {

    var h_count = 0;
    var min_h = 6;
    var last_displayed_h = 1;
    // ouvrir une liste
    var toc = "<nav><ul>";

    document.getElementById("article").innerHTML =
        document.getElementById("article").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, open_tag, heading_text, close_tag) {
                // vérifier si le heading est bien écrit
                if (open_tag != close_tag) { return str; }

                cur_h = parseInt(open_tag);
                // enregistrer le plus haut niveau de heading
                if (cur_h < min_h) { min_h = cur_h; }
                // incrémenter le compteur d'identifiants de headings
                h_count += 1;
                // créer l'objet de liste
                list_item = "<li><a href='#heading" + h_count + "'>" + heading_text + "</a></li>";

                // si le heading correspond au plus haut niveau de heading
                if (cur_h == min_h) {
                    // si le dernier heading de la toc était inférieur au niveau actuel, fermer une liste
                    if (cur_h < last_displayed_h) { toc += "</ul>" }
                    toc += list_item;
                    last_displayed_h = cur_h;
                }
                // si le niveau de heading actuel est supérieur ou égal au dernier heading affiché
                else if (cur_h > min_h && ((cur_h <= last_displayed_h) || (last_displayed_h == min_h))) {
                    // si le dernier heading de la toc était égal au niveau de header le plus haut, ouvrir une liste
                    if (last_displayed_h == min_h) { toc += "<ul>" }
                    toc += list_item;
                    last_displayed_h = cur_h;
                }
                // sinon, ne pas afficher le heading dans la toc

                // réécrire le heading dans l'article
                return "<h" + cur_h + " id='heading" + h_count + "'>" + heading_text + "</h" + cur_h + ">";
            }
        );

    // si le dernier heading affiché dans la toc est de deuxième niveau, fermer une liste
    if (last_displayed_h > min_h) {
        toc += "</ul>";
    }
    // fermer la liste globale et ajouter 2 boutons de navigation
    toc += "</ul><hr><p><a href='#'>↑ Haut de la page</a></p><p><a href='#footer'>↓ Bas de la page</a></p></nav>"

    document.getElementById("toc-container").innerHTML += toc;
}