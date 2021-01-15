



function Article({nom, prix}) {

    console.log(nom);
    console.log(prix);

    return (
        <div className="article">

            <div className="artcile1">

                <h3>Nom: {nom}  </h3>
                <p>Prix: {prix} </p>
                <span>Description:</span>

            </div>
           

        </div>
    );
}

export default Article;