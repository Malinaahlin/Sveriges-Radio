import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

export async function createHtml() {
  const podCasts = await getPodcasts();
  for (let i = 0; i < podCasts.programs.length; i++) {
    const getAllPodcasts = podCasts.programs[i];
    const alt = [
      'Omslagsbild för Mammas nya kille podcast.',
      'Omslagsbild för Tankesmedjans podcast.',
      'Omslagsbild för Lantzkampens podcast.',
      'Omslagsbild för Fredag i P1:s podcast.',
      'Omslagsbild för Så funkar det podcast.',
      'Omslagsbild för Utkantssveriges podcast.',
      'Omslagsbild för Dockradio med Birgitta, Kjell, Gloria & Co:s podcast.',
      'Omslagsbild för Skärvor av ett äktenskap:s podcast.',
      'Omslagsbild för Bokbussen i P3:s podcast.',
    ];

    const innerArticle = document.createElement('article') as HTMLElement;
    innerArticle.className = 'section__article-innerarticle';
    podCastContainer.appendChild(innerArticle);

    const podcastImg = document.createElement('IMG') as HTMLImageElement;
    podcastImg.src = getAllPodcasts.socialimage;
    podcastImg.alt = alt[i];
    innerArticle.appendChild(podcastImg);

    const textDiv = document.createElement('div') as HTMLDivElement;
    textDiv.className = 'section__article-div';
    innerArticle.appendChild(textDiv);

    const podcastTitle = document.createElement('h2') as HTMLElement;
    podcastTitle.innerText = getAllPodcasts.name;
    textDiv.appendChild(podcastTitle);

    const podcastDesc = document.createElement('p') as HTMLParagraphElement;
    podcastDesc.innerText = getAllPodcasts.description;
    textDiv.appendChild(podcastDesc);

    const podcastLink = document.createElement('a') as HTMLAnchorElement;
    podcastLink.innerText = 'Lyssna här';
    podcastLink.href = getAllPodcasts.programurl;
    textDiv.appendChild(podcastLink);

    document.body.appendChild(podCastContainer);
  }
}

export default createHtml;
