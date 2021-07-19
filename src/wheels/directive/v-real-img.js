/*!
 * 这个自定义指令用于优化大图片显示体验
 * 可以先给元素默认设置低分辨率的背景图片，然后加上 v-real-img="高分辨率图片路径"，
 * 本指令就会自动下载高分辨率图片，平滑地替换掉低分辨率图片。
 * 用户的观感上，会先看到低分辨率图片，随后图片变高清。
 * 对比用户先看到一片空白，再看到图片的体验，这样会好一点。
 * 将这个指令用在 img 标签上时，不会作用于背景图片，而是直接作用于 src 中指定的图片
 */
import Vue from 'vue'

Vue.directive('real-img', {
    inserted(el, { value }){
        let displayHandler = displayBackground;
        
        if(el.tagName.toLowerCase() === 'img'){
            displayHandler = displayImage;
        }

        const oldSrc = getImgSrc(el);
        const newSrc = value;

        whenImgLoad(oldSrc).then(()=>{
            whenImgLoad(newSrc).then(()=>{
                displayHandler(el, newSrc);
            });
        })     
    }
});

function getImgSrc(el){
    if(el.tagName.toLowerCase() === 'img'){
        return el.src;
    }else{
        let bg = window.getComputedStyle(el).backgroundImage;
        if(bg !== "none"){
            return bg.replace(/url\("(.*)"\)/, "$1");
        }
    }
    return "";
}

function whenImgLoad(src){
    return new Promise(resolve=>{
        if(src){
            let img = new Image();
            img.onload = function(){
                resolve(src);
                img = null;
            }
            img.src = src;
        }else{
            setTimeout(()=>{
                resolve();
            }, 1000);
        }
    });
}

function displayBackground(el, url){
    el.style.backgroundImage = `url('${url}')`;
}

function displayImage(el, url){
    el.src = url;
}