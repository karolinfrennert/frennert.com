/**
 * @summary create a link element and returns with the parameters set
 * @param href 
 * @param text 
 */
export const addLink = (href: string, text: string) => {
  const link = document.createElement('a');
  link.innerText = text;
  link.href = href;
  return link;
}