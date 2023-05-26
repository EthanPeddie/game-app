import NoImage from "../assets/images/no-image-placeholder.webp"

const ImageCrop = (url: string) => {



    if(!url) return(NoImage);
    const index = url.indexOf('media/') + 'media/'.length;
    return url.slice(0,index) + ('crop/600/400/') + url.slice(index);
  
}

export default ImageCrop