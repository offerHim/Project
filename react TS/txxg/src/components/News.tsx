import React, { useState, useEffect } from 'react'
import {getProvinceNews} from '../services/index'
import {AreaType,ItemTypes} from '../utils/types'
import styles from './News.module.scss'
interface ProvinceType{
    [key: string]: string
}
interface ItemType{
    "title": string,
    "publish_time": string,
    "news_url": string,
    "cms_id": string
}

const ProvinceList:ProvinceType = {
    "hb": "湖北",
    "zj": "浙江",
    "gd": "广东",
    "henan": "河南",
    "hn": "湖南",
    "ah": "安徽",
    "jiangxi": "江西",
    "cq": "重庆",
    "jiangsu": "江苏",
    "cd": "四川",
    "sd": "山东",
    "bj": "北京",
    "sh": "上海",
    "fj": "福建",
    "heilongjiang": "黑龙江",
    "xian": "陕西",
    "guangxi": "广西",
    "hebei": "河北",
    "yn": "云南",
    "hainan": "海南",
    "ln": "辽宁",
    "shanxi": "山西",
    "tj": "天津",
    "guizhou": "贵州",
    "gansu": "甘肃",
    "jilin": "吉林",
    "neimenggu": "内蒙古",
    "ningxia": "宁夏",
    "xinjiang": "新疆",
    "hk": "香港",
    "qinghai": "青海",
    "taiwan": "台湾",
    "macau": "澳门",
    "xizang": "西藏"
}


const News = (props: {areaTree: AreaType[]}) => {
    let [province, setProvince] = useState<string>('hb');
    let [items, setItems] = useState<ItemType []>([])

    let changeArea = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setProvince(e.target.value);
        getNews();
    }

    useEffect(()=>{
        getNews();
    }, [])

    const getNews = ()=>{
        console.log('11111111111111555555')
        getProvinceNews(province).then((res:any)=>{
            res = res.data;
            console.log('101',res)
            if (res.errno === 0){
                setItems(res.data.items);
            }
         
        })
    }

    
    console.log('news...', items, 'lyp',props.areaTree);

    let curIndex = props.areaTree.findIndex(item=>item.name === ProvinceList[province]);
    console.log('qqq',curIndex)
    let curPro = props.areaTree[curIndex];
    console.log('www',curPro)
    let curPoo = items
    console.log('eee',curPoo)
    // 拼接各省份选项
    const provinceHtml = [];
    for (let key in ProvinceList){
        provinceHtml.push(<option key={ProvinceList[key]} value={key}>{ProvinceList[key]}</option>);
    }
    return <div className={styles.wrap}>
        <div className={styles.box}>
            <h3>
                <span className={styles.tit}>{ProvinceList[province]}</span>
                疫情速报
            </h3>
            <select id="select-area" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>changeArea(e)}>
                <option className={styles.q} value="hb">≒切换城市</option>
                {provinceHtml}
            </select>
        </div>
        <div className={styles.num}>
            <li>
                <span className={styles.l1}>{curPro && curPro.today.confirm}</span>
                <br/>
                <span>新增确诊</span>
            </li>
            <li>
                <span className={styles.l2}>{curPro && curPro.total.confirm}</span>
                <br/>
                <span>累计确诊</span>
            </li>
            <li>
                <span className={styles.l3}>{curPro && curPro.total.heal}</span>
                <br/>
                <span>治愈人数</span>
            </li>
            <li>
                <span className={styles.l4}>{curPro && curPro.total.dead}</span>
                <br/>
                <span>死亡人数</span>
            </li>
        </div>
        <div>
              {
                  curPoo.map((item,index)=>{
                      return(
                          <div key={index}>
                  <span>{item.title}</span>
                          </div>
                      )
                  })
              }
             
        </div>
    </div>
}


export default News