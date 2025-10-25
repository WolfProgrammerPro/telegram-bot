const isMobile = window.innerWidth / window.innerHeight < 1

if (isMobile)
{
    console.log('mobile')
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
    const ol2 = document.getElementById('ol-2')
    ol2.style.top = '116%'
    const img2 = document.getElementById('img-2')
    img2.style.top = '130%'
    const p1 = document.getElementById('p1')
    p1.style.top = '160%'
    p1.style.left = "7%"
    p1.style.width = "85%"
    const ol3 = document.getElementById('ol-3')
    ol3.style.top = '175%'
    const img3 = document.getElementById('img-3')
    img3.style.top = '210%'
    const ol4 = document.getElementById('ol-4')
    ol4.style.top = '240%'
    const img4 = document.getElementById('img-4')
    img4.style.top = '290%'
    const END = document.getElementById('end')
    END.style.top = '350%'
}
