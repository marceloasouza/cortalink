// buscar os links salvos.

export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

//salvar um link no localStorage

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // não duplicar link
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log('Esse link já existe na sua lista');
    return;
  }

  //adicionar novo link
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log('link salvo com sucesso');
}

//deletar link salvo

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem('encurtalink', JSON.stringify(myLinks));
  console.log('Link deletado com sucesso!');

  return myLinks;
}
