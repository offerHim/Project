import React, {useState, useEffect} from 'react'
import {getHospitalProvince,getHospital} from '../services/index'

import styles from './Hospital.module.scss'

interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number,
    active?: boolean,
}


interface cityType {
  provinceName: string
  cityCode:string,
  cityName:string,
  count:number
}

const Hospital = ()=>{
    // 定义全国数据
    let [provinces, setProvinces] = useState<ProType[]>([]);
    let [data, setdata] = useState<cityType[]>([]);
 
    // 获取全国数据
    useEffect(()=>{
        getHospitalProvince().then((res:any)=>{
        res = res.data;
        if(res.code == 0){
            setProvinces(res.args.rsp.provinces);
        }
        })
    }, []);
    

       // 获取全国医院数据
     useEffect(()=>{
        getHospital('北京').then((res:any)=>{
        res = res.data;
        if(res.code == 0){
            setdata(res.args.rsp.info.citys);
            console.log(res,'222')
        }
        })
    }, []);


    
    const expandProvince = (index: number,provinceName:string)=>{
        let newProvinces = [...provinces];
        newProvinces[index].active = !provinces[index].active;
        setProvinces(newProvinces)
        getHospital(provinceName).then((res:any)=>{
            res = res.data;
            if(res.code == 0){
                setdata(res.args.rsp.info.citys);
                console.log(res,'222')
            }
        })
        console.log(provinceName,'555555555')
      
    }
    const TransitionEvent=(item: cityType,index:number)=>{
        //  console.log('111')
        if(item){
            console.log(item)
            
        }
    }
    return <>
        <div className={styles.sectionTitle}>医疗救治医院查询
          <div className={styles.healthIcon}></div>
        </div>
        <div className={styles.hospital}>{
            provinces.map((item, index)=>{
                return <div className={styles.hotelItemWrap} key={index} >
                <div className={styles.hotelProvince} onClick={()=>expandProvince(index,item.provinceName)} >
                    <div className={styles.name}>{item.provinceName}</div>
                    <div className={item.active?styles.activeCount:styles.count} >
                    </div>
                </div>
                <div className={item.active?styles.activeIndex:styles.index} >
                    {
                            data.map((item,index)=>{
                                return(
                                    <div key={index} className={styles.hotelCity} onClick={()=>TransitionEvent(item,index)}>
                                       <span className={styles.name}>{item.cityName}</span> 
                                       <span >{item.count}家<span>进入查询</span></span>
                                    </div>
                                )
                            })
                        }
                    </div>
             </div>
            })
        }</div>
    </>
}


export default Hospital
