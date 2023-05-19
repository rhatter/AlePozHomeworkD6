function c(eltype, elclass){
    let elmt = document.createElement(eltype)
    elmt.setAttribute('class',elclass)
 return elmt
}

function createBoxes(imgDir, imgAlt, bachDesc, linkTx, titleCard, profileImgDir, profText){
let card = c('div','card')
    let imgSect = c('div','imgSect')
        let back = c('div','cardBack')
            let img = c('img','cardImg')
            img.setAttribute('src',imgDir)
            img.setAttribute('alt',imgAlt)
        back.appendChild(img)
    imgSect.appendChild(back)
        let top = c('div','cardTop')
            let toptopBar = c('div','topTopBar')
                let bachecaDescBox = c('div','bachecaDescBox')
                    let bachecaDesc = c('span','bachecaDesc')
                    bachecaDesc.textContent = bachDesc
                bachecaDescBox.appendChild(bachecaDesc)
                    let bachecaDescArrow = c('img','arrow icoC')
                    bachecaDescArrow.setAttribute('src','./img/arrow.png')
                bachecaDescBox.appendChild(bachecaDescArrow)
            toptopBar.appendChild(bachecaDescBox)
                let saveButton = c('div','saveButton')
                    let saveText = c('span','saveText')
                    saveText.textContent = 'Save'
                saveButton.appendChild(saveText)
            toptopBar.appendChild(saveButton)
        top.appendChild(toptopBar)
            let topbottomBar = c('div','topbottomBar')
                let linkButton = c('div','linkButton')
                    let linkArrow = c('img','linkArrow icoC')
                    linkArrow.setAttribute('src','./img/linkArrow.png')
                linkButton.appendChild(linkArrow)
                    let linkText = c('span','linkText')
                    linkText.textContent = linkTx
                linkButton.appendChild(linkText)
            topbottomBar.appendChild(linkButton)
                let uploadBox = c('div','uploadBox')
                    let uploadLogo = c('img','uploadLogo icoC')
                    uploadLogo.setAttribute('src','./img/uploadLogo.png')
                uploadBox.appendChild(uploadLogo)
                    let threeDotLogo = c('img','threeDot icoC')
                    threeDotLogo.setAttribute('src','./img/threeDotLogo.png')
                uploadBox.appendChild(threeDotLogo)
            topbottomBar.appendChild(uploadBox)
        top.appendChild(topbottomBar)
    imgSect.appendChild(top)
card.appendChild(imgSect)
    let downBox = c('div','downBox')
        let titleCardBox = c('div','titleCardBox')
            let titleCardSpan = c('span','titleCardSpan')
            titleCardSpan.textContent = titleCard
        titleCardBox.appendChild(titleCardSpan)
    downBox.appendChild(titleCardBox)
card.appendChild(downBox)
    if(profileImgDir !== null){
    let profileBox = c('div','profileBox')
        let profileImg = c('img','profileImg')
        profileImg.setAttribute('src',profileImgDir)
    profileBox.appendChild(profileImg)
        let profileText = c('span','profileText')
        profileText.textContent = profText
    profileBox.appendChild(profileText)
card.appendChild(profileBox)
    }
return card
}

function appendCard(data){
    console.log('lanciato')
    for( i=0;i<data.imgDir.length-1; i++ ){
        let col1 = document.getElementsByClassName('col1')[0]
        let col2 = document.getElementsByClassName('col2')[0]
        let col3 = document.getElementsByClassName('col3')[0]
        let col4 = document.getElementsByClassName('col4')[0]
        let col5 = document.getElementsByClassName('col5')[0]
        let col6 = document.getElementsByClassName('col6')[0]
        
        let arrCol= [col1,col2,col3,col4,col5,col6]

        let card = createBoxes(
            data.imgDir[i],
            data.imgAlt[i],
            data.bachDesc[i],
            data.linkTx[i],
            data.titleCard[i],
            data.profileImgDir[i],
            data.profText[i]
            )
        let heightCol1 = col1.clientHeight
        let heightCol2 = col2.clientHeight
        let heightCol3 = col3.clientHeight
        let heightCol4 = col4.clientHeight
        let heightCol5 = col5.clientHeight
        let heightCol6 = col6.clientHeight

        let arrHeigth = [heightCol1,heightCol2,heightCol3,heightCol4,heightCol5,heightCol6]
        let order = [heightCol1,heightCol2,heightCol3,heightCol4,heightCol5,heightCol6]
        let min = arrHeigth.sort(function(a, b){return a - b})[0]
        console.log(order)
        console.log(min)
        for(let i=0;i<arrCol.length;i++){
            if(min==order[i]){
                console.log(i)
                arrCol[i].appendChild(card)
                i++
                break
            }
        }
    }
}
appendCard(data)
appendCard(data)
appendCard(data)
appendCard(data)
appendCard(data)
appendCard(data)


