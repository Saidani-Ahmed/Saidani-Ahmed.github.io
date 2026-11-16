# Portfolio — Ahmed Saidani

Site statique (HTML/CSS/JS, sans build), bilingue FR/EN.

## Déployer sur GitHub Pages
1. Créer un dépôt public nommé exactement `Saidani-Ahmed.github.io`.
2. Y pousser le contenu de ce dossier :
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Saidani-Ahmed/Saidani-Ahmed.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Le site est en ligne à https://saidani-ahmed.github.io (1 à 2 minutes).

## Mettre à jour
- CV : remplacer `assets/CV_Ahmed_Saidani.pdf`.
- Nouveau projet : copier `projets/gestion-formations.html`, adapter le contenu, puis ajouter une carte `<article class="card">` dans `index.html`. Images en WebP dans `assets/img/`.
- Styles et bascule FR/EN partagés : `assets/site.css`, `assets/site.js`.
