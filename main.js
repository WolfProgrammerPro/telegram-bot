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
    const how_to_use = document.getElementById('how-to-use')
    how_to_use.style.top = '72%'
    const ol_1 = document.getElementById('ol-1')
    ol_1.style.top = '77%'
    const img1 = document.getElementById('img-1')
    img1.style.top = '93%'
}
