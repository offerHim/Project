import React, { useState, useEffect } from 'react'
import { TotalType } from '../utils/types'
import styles from './Header.module.scss'


const Hospital = (props: { total: TotalType }) => {
    console.log('！！！！！！！！！！', props.total)
    let t1 =props.total&&props.total.lastUpdateTime
    let startDate: any=new Date(t1&&t1.replace(/-/g, "/"))
    let endDate: any =new Date()
    let dateDiff =endDate.getTime() - startDate.getTime() //获取时间差毫秒
    let hourLevel = dateDiff % (24 * 60 * 60 * 1000)
    let minutesLevel = hourLevel % (60 * 60 * 1000)
    let minutes = Math.floor(minutesLevel / (60 * 1000))
    // console.log(props.total.lastUpdateTime)
    return <>
        <div>
            {
                <>
                   <img className={styles.img} src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/top_headv3.png" alt="" />
                      {
                          props.total&&
                      <p className={styles.f}>统计截至<span>{props.total.lastUpdateTime}</span>更新于<span>{minutes}</span>分钟前</p>
                      }
                          <div>
                      {
                        props.total&&
                        <>
                      <div className={styles.box}>
                         <dl>
                             <dt className={styles.a}><div>较上日<span>   <span className={styles.a2}>+{props.total.chinaAdd.confirm}</span></span> </div></dt>
                             <dd className={styles.a}><span className={styles.a3}>{props.total.chinaTotal.confirm}</span></dd>
                             <p className={styles.a1}>全国确诊</p>
                         </dl>
                         <dl>
                             <dt className={styles.b}><span>较上日</span> <span className={styles.b2}>+{props.total.chinaAdd.suspect}</span> </dt>
                             <dd className={styles.b}><span className={styles.b3}>{props.total.chinaTotal.suspect}</span> </dd>
                             <p className={styles.b1}>疑似病例</p>
                         </dl>
                         <dl>
                             <dt className={styles.c}><span>较上日</span> <span className={styles.c2}>+{props.total.chinaAdd.heal}</span></dt>
                             <dd className={styles.c}><span className={styles.c3}>{props.total.chinaTotal.heal}</span> </dd>
                             <p className={styles.c1}>治愈人数</p>
                         </dl>
                         <dl>
                             <dt className={styles.d}><span>较上日</span> <span className={styles.d2}>+{props.total.chinaAdd.dead}</span></dt>
                             <dd className={styles.d}><span className={styles.d3}>{props.total.chinaTotal.dead}</span></dd>
                             <p className={styles.d1}>死亡人数</p>
                         </dl>
                      </div>
                      </>
                     }
                </div>
                </>
            }
        </div>
    </>
}


export default Hospital
