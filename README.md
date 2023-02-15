# Comment jai procédé pour developpé l'application 

## Mise en place 

J'ai d'abord fais l'intégration de l'application en utilisant le systeme de components reutilisables.
pour le css j'ai utilisé la librairie styled-components, 

j'ai en premier temps codé la navbar du haut mais n'ai pas eu le temps d'integrer le logo
car reçu en piece jointe et j'aurai du le convertir en format svg. 

j'ai ensuite integré la card des pays pour y afficher mes informations de l'api 
je me suis arreté la par defaut de temps 

## Ce que j'aurai du faire par la suite

Apres avoir fini l'intégration de ma maquette en css et intégré les élements de l'api
j'aurai affiché une certaine limite de pays en modifiant l'url de l'api et en imposant une limite, j'aurai ensuite
codé une fonction qui va appeller l'api une nouvelle fois via une requête get avec le lien de l'api contenant un nombre supérieur d'éléments 

après avoir fini cette partie j'aurai crée un composant Searchbar où l'input sera contrôlé par un state et une fonction filter permettra de rechercher
chaque pays par son pays. 