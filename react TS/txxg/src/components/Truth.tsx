import React, {useState, useEffect} from 'react'
import {getTruth} from '../services/index'
import styles from './Truth.module.scss'
interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number
}

const Truth = ()=>{
    // 定义全国医院数据
    let [truth, setTruth] = useState([]);

    // 获取全国医院数据
    useEffect(()=>{
        getTruth().then((res:any)=>{
            console.log('辟谣信息', res);
            // res = res.data;
            // if(res.code == 0){
            //     setProvinces(res.args.rsp.provinces);
            // }
        })
    }, []);
    
    return <>
        <span className={styles.sectionTitle}>
            辟谣信息
        </span>
    </>
}


export default Truth