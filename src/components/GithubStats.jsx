import React, { useEffect, useState } from 'react';
import "./../styles/GithubStats.css";
import { Treemap, ResponsiveContainer } from 'recharts';
import axios from "axios";

const data = [];

const GithubStats = () => {
  const [lang, setLang] = useState([]);
  const [details, setDetails] = useState([]);

  const sleep = (delay) => {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.github.com/users/A-Lokanush/repos`);
      const res = response.data;
      setDetails(res);
      console.log(details);
    })();
  },[]);

  useEffect(() => {
    // (async () => {
      details.map(detail => {
        (async () => {
          if(!detail.fork){
            const response = await axios.get(`https://api.github.com/repos/A-Lokanush/${detail.name}/languages`);
            let child = [];
            const res = response.data;
            Object.entries(res).map((langs) => {
              child.push({name:langs[0], size:langs[1]})
            })
            const obj = {
              name : detail.name,
              children : child
            }
            data.push(obj);
            console.log(data);
          }
        })();
      })
    // })();
  },[details]);

  // useEffect(() => {
  //   // (async () => {
  //   //   Object.keys(details).map((detail) => {
  //   //     (async () => {
  //   //       let response = await axios.get(`https://api.github.com/repos/A-Lokanush/${detail.name}/languages`);
  //   //       let child = [];
  //   //       let res = response.data;
  //   //       Object.entries(res).map((langs) => {
  //   //         child.push({name:langs[0], size:langs[1]})
  //   //       })
  //   //       const obj = {
  //   //         name : detail.name,
  //   //         children : child
  //   //       }
  //   //       data.push(obj);
  //   //     })();
  //     // const response = await axios.get(`https://api.github.com/repos/A-Lokanush/IPMP_2k24/languages`);
  //     // let child = [];
  //     // const res = response.data;
  //     // Object.entries(res).map((langs) => {
  //     //   child.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj = {
  //     //   name : "pollbooth",
  //     //   children : child
  //     // }
  //     // data.push(obj);
  //     // const response2 = await axios.get(`https://api.github.com/repos/A-Lokanush/onedriver/languages`);
  //     // let child2 = [];
  //     // const res2 = response2.data;
  //     // Object.entries(res2).map((langs) => {
  //     //   child2.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj2 = {
  //     //   name : "swift-chat",
  //     //   children : child2
  //     // }
  //     // data.push(obj2);
  //     // const response3 = await axios.get(`https://api.github.com/repos/A-Lokanush/pragyan/languages`);
  //     // let child3 = [];
  //     // const res3 = response3.data;
  //     // Object.entries(res3).map((langs) => {
  //     //   child3.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj3 = {
  //     //   name : "pragyan",
  //     //   children : child3
  //     // }
  //     // data.push(obj3);
  //   // })
  //   // })();
  //   console.log(details);
  // },[])

  useEffect(() => {
    const wait = async () => {
      await sleep(5000);
      setLang(data);
      console.log(lang);
    }
    wait();
  }, []);

  return (
    <>
        <ResponsiveContainer width="50%" height="50%">
          <Treemap width={400} height={300} data={lang} dataKey="size" ratio={3 / 3} stroke="#fff" fill="#8884d8" />
        </ResponsiveContainer>
    </>    
  )
}

export default GithubStats;