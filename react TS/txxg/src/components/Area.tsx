import React, {useState, useEffect} from 'react'
import {AreaType} from '../utils/types'
import styles from './Area.module.scss'
const Area = (props: {areaTree:AreaType []})=>{
    console.log('area...', props.areaTree);
    // let data=props.areaTree.length?props.areaTree[0].children as AreaType[]:[] 
    let [data,setData] = useState<AreaType[]>([])
    const expandProvince = (index: number)=>{
        console.log(index)
        // let newData = [...data];
        // newData[index].active = !data[index].active;
        // setData(newData)
    }
    let arr=0
    props.areaTree.slice(1).map((item,index)=>{
      arr+=item.total.confirm
    })
    let drr=0
    props.areaTree.slice(1).map((item,index)=>{
      drr+=item.total.dead
    })
    return <>
        <div className={styles.chianList}>
           <div className={styles.uchi}>
           中国疫情（包括港澳台）
           <span className={styles.tips}>7:00-10:00为更新高峰，数据如有滞后请谅解。</span>
           </div>
           <div className={styles.nav}>
              <h2 className={styles.add}>地区</h2>
              <div className={styles.add}>新增确诊</div>
              <div>累计确诊</div>
              <div>治愈</div>
              <div>死亡</div>
           </div>
           {
              (props.areaTree.length?props.areaTree[0].children as AreaType[]:[]).map((item,index)=>{
                   return <div key={index}>
                   <div className={styles.placeArea} onClick={()=>expandProvince(index)}>
                         <h2 className={styles.add}>{item.name}</h2>
                         <div className={styles.blue}>{item.today.confirm}</div>
                         <div>{item.total.confirm}</div>
                         <div>{item.total.heal}</div> 
                         <div>{item.total.dead}</div> 
                   </div>
                   <div className={item.active?styles.activeIndex:styles.index}>
                   {
                    (item.children as AreaType[]).map((val,ind)=>{
                         return <div key={ind} className={styles.placeArea}>
                               <h2>{val.name}</h2>
                               <div>{val.today.confirm}</div>
                               <div>{val.total.confirm}</div>
                               <div>{val.total.heal}</div> 
                               <div>{val.total.dead}</div> 
                         </div>
                     })
                   }
                   </div>
                   </div>
               })
           }
        </div>
        <div className={styles.moveNavLast}>
          <span>数据来源：各地卫健委每日公开数据</span>
        </div>
        <div className={styles.abroadList}>
          <div className={styles.up_tips}>
              海外疫情 
              <span className={styles.datas}>
                确诊
                <span className={styles.hw_confirm}>{arr}</span>
              例，死亡
              <span className={styles.hw_dead}>{drr}</span>
              例
                </span>
          </div>     
          <div className={styles.abroad}>
              <h2 className={styles.add}>地区</h2>
              <div>确诊</div>
              <div>治愈</div>
              <div>死亡</div>
          </div>
        {
         props.areaTree.slice(1).map((item,index)=>{
            return <div key={index} className={styles.no_sharp}>
                 <h2 className={styles.add}>{item.name}</h2>
                 <div>{item.total.confirm}</div>
                 <div>{item.total.heal}</div>
                 <div>{item.total.dead}</div>
            </div>  
         })   
        }
        </div>
    </>
}


export default Area