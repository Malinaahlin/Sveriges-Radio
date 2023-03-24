import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach(() => {
    i++;
    const innerArticle = createInnerArticle();

    createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const innerArticle = document.createElement('article') as HTMLElement;
      innerArticle.setAttribute('class', 'section__article-innerarticle');
      innerArticle.setAttribute('tabindex', '1');
      podCastContainer.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement('div') as HTMLDivElement;
      textDiv.setAttribute('class', 'section__article-div');
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement('a') as HTMLElement;
      const linkText = document.createTextNode('Lyssna här');
      linkPlacement.setAttribute('href', podCasts.programs[i].programurl);
      linkPlacement.setAttribute('tabindex', '1');
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }
    function createImg() {
      const imgPlacement = document.createElement('IMG') as HTMLImageElement;
      const alt = [
        '',
        'Rosa hjärna som sitter fast i en gaffel.',
        'Tjej som skriker, hon har en hatt och klänning gjord av tidningspapper.',
        'Kvinna och en man som skrattar och har många böcker framför sig.',
        'Bild på två män som är glada, den ena har en blå tröja och den adra en svart tröja.',
        'Två kvinnor som ser bekymrade ut. Den ena kvinnar håller i ett anteckningsblock. Den andra med en gammal telefon.',
        'Tre dockor som pratar i mikrofoner.',
        'Ett par som sitter på varsinn sida av soffan, och ser trötta ut.',
        'Ung vuxen kille pratar i mikrofon. Det står en man och en kvinna bakom honom.',
      ];
      imgPlacement.setAttribute('src', podCasts.programs[i].socialimage);
      imgPlacement.setAttribute('alt', alt[i]);
      imgPlacement.setAttribute('width', '100');
      imgPlacement.setAttribute('height', '100');
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement('p') as HTMLParagraphElement;
      const desc = document.createTextNode(podCasts.programs[i].description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement('h2') as HTMLElement;
      const programName = document.createTextNode(podCasts.programs[i].name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
}

export default createHtml;
