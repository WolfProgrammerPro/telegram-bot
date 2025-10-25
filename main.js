const isMobile = window.innerWidth < 600

if (isMobile)
{
    const images = document.getElementsByTagName("img")
    for (let i = 0; i < images.length; i++)
    {
        const image = images[i]
        console.log('aaa')
        image.style.width = '80%'
        image.style.left = '5%'
    }
}