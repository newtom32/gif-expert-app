export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VomEmHPiDs2v2qWdo5dh21ecE2aAdBAy&q=${ category }&limit=20`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gift = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    
    return gift
  
  }