const isMobile = window.innerWidth / window.innerHeight < 1

if (isMobile)
{
    console.log('mobile')
    const images = document.getElementsByTagName("img")
    for (let i = 0; i < images.length; i++)
    {
        const image = images[i]
        if (image.id != "back" && image.id != "ava")
        {
            image.style.width = '80%'
            image.style.left = '5%'
        }
        
    }

    const h1 = document.getElementById('h1')
    h1.style.top = '15%'
     const what = document.getElementById('what')
    what.style.top = '25%'
    what.style.width = "70%"
    const how_to_use = document.getElementById('how-to-use')
    how_to_use.style.top = '72%'
    how_to_use.style.width = '70%'
    const ol_1 = document.getElementById('ol-1')
    ol_1.style.top = '80%'
    ol_1.style.width = '70%'
    const img1 = document.getElementById('img-1')
    img1.style.top = '97%'
    const ol2 = document.getElementById('ol-2')
    ol2.style.top = '120%'
    ol2.style.width = '70%'
    const img2 = document.getElementById('img-2')
    img2.style.top = '135%'
    const p1 = document.getElementById('p1')
    p1.style.top = '180%'
    p1.style.left = "7%"
    p1.style.width = "70%"

    const ol3 = document.getElementById('ol-3')
    ol3.style.top = '175%'
    ol3.style.width = '70%'
    const img3 = document.getElementById('img-3')
    img3.style.top = '210%'
    const ol4 = document.getElementById('ol-4')
    ol4.style.top = '240%'
    ol4.style.width = '70%'
    const img4 = document.getElementById('img-4')
    img4.style.top = '280%'
    const END = document.getElementById('end')
    END.style.top = '370%'
    const ava = document.getElementById('ava')
    ava.style.left = '80%'
    const back = document.getElementById('back')
    back.remove()
    const plus = document.getElementById('plus')
    plus.style.width = '50%'
    const ul1 = document.getElementById('ul1')
    ul1.style.width = '70%'
    document.body.style.backgroundColor = 'rgba(33, 47, 66, 1)'
}
