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
        'Omslagsbild för Tankesmedjans podcast.',
        'Omslagsbild för Lantzkampens podcast.',
        'Omslagsbild för Fredag i P1:s podcast.',
        'Omslagsbild för Så funkar det podcast.',
        'Omslagsbild för Utkantssveriges podcast.',
        'Omslagsbild för Dockradio med Birgitta, Kjell, Gloria & Co:s podcast.',
        'Omslagsbild för Skärvor av ett äktenskap:s podcast.',
        'Omslagsbild för Bokbussen i P3:s podcast.',
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
