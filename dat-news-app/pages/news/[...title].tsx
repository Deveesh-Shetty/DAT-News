import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCustom, useApiUrl } from "@pankod/refine-core";

import axios from "axios";
import Head from "next/head";

export default function news() {
  const [newsData, setNewsData] = useState([]);
  const router = useRouter();
  const { title } = router.query;
  console.log(title);
  const apiKey = "edb4da861e9d4cad9563a6c5fe3ff158";
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res.data);
        setNewsData(res.data[0]);
      });
  }, [title]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="md:mx-96 mt-4 debug">
        <h1 className="md:text-5xl md:ml-6 font-extrabold text-md">{title}</h1>
        <span className="text-lg ml-6 font-light mt-2">
          Sat 23.03.2021 12:00
        </span>
        <div className="ml-6 flex flex-row gap-4  items-center">
          <span className="text-sm font-semibold">By</span>
          Akhil MG
        </div>
        <h3 className="md:text-lg md:ml-6 font-semibold mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          reiciendis incidunt libero vel illo aspernatur ipsa harum culpa hic
          excepturi.
        </h3>
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA16Pl51.img?w=1920&h=1080&q=60&m=2&f=jpg"
          className="w-full h-96 object-cover mt-10 mx-4"
          alt="img"
        />

        <div className="mt-10 ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          dolorum. Veniam voluptatem officia rem debitis odio adipisci, magni
          possimus cum nesciunt ipsam ut fugit deleniti quos sit cumque
          architecto. Odit iure aut amet nostrum quibusdam dolores, voluptatem
          sequi eligendi labore, minima corrupti voluptatum ducimus molestias
          sit itaque numquam ratione ad, commodi temporibus architecto nihil in.
          Ea illo voluptatum corporis, temporibus nostrum quos reiciendis vero
          nisi reprehenderit modi, exercitationem dolorum vel, quibusdam commodi
          omnis eum. Voluptate eum inventore laborum, at similique, dolore
          delectus veritatis consequatur reprehenderit culpa rerum ad fugit
          magnam. Doloremque est sunt explicabo, mollitia voluptatibus possimus
          debitis corporis praesentium officia eveniet temporibus doloribus in
          vel harum, animi libero quisquam necessitatibus, sapiente voluptatum
          dicta commodi? Unde ad facilis sapiente provident et numquam, cumque
          ea magni nobis vitae asperiores ipsam voluptatum ipsum ullam
          distinctio ut. Enim qui modi, ipsum in expedita voluptatem? Officia
          amet nemo nam fuga facilis pariatur magnam optio dicta facere aperiam
          accusantium sed a necessitatibus distinctio, ipsum numquam. Quidem,
          quia quisquam. Quibusdam id dolor iure numquam adipisci itaque fuga
          natus magnam delectus. Earum, expedita adipisci amet architecto
          voluptatem dolores in similique, accusantium dolorem, vel voluptate
          excepturi rem. Sint error quam voluptatum alias inventore explicabo
          eligendi quod cum tempora similique quisquam, velit rem maxime
          temporibus. Maxime incidunt unde delectus expedita harum ea, vitae
          adipisci quidem recusandae tempore corrupti ratione at ut pariatur
          blanditiis ipsa tempora nam praesentium cum quo quia molestias.
          Repudiandae architecto fuga aliquid exercitationem ullam ut nihil quae
          repellendus dolor aspernatur quo laudantium voluptate voluptatum
          quibusdam saepe, eaque dolores harum! Iure facere laborum suscipit est
          nostrum. Modi eius similique natus quidem cupiditate illo, magni nisi
          aspernatur rem perferendis commodi. Cupiditate, eaque. Modi
          consequuntur repellat esse laborum non eos voluptas ex, impedit quidem
          saepe magni sed quisquam recusandae tempora unde ut exercitationem
          sequi pariatur provident veniam accusamus iure sunt excepturi. Id
          necessitatibus ut consequatur aliquam distinctio porro beatae
          voluptates obcaecati quo eligendi qui pariatur, vel, voluptas hic
          perferendis rerum. Similique deleniti repellat maxime nostrum,
          necessitatibus quia soluta nesciunt libero cumque nobis omnis
          architecto tempore qui. Voluptate, molestias distinctio recusandae nam
          deserunt nobis numquam, accusamus, dolorum doloremque est nisi magni
          aperiam dignissimos harum magnam sunt ea atque laborum omnis dolor
          officiis! Consequatur enim inventore quis alias totam aperiam tempore
          sapiente culpa iure repellat mollitia sequi, quam provident quibusdam
          impedit pariatur voluptate, iusto odio quisquam quas illum veniam.
          Facilis laborum voluptas earum consequuntur voluptatibus nemo
          accusamus itaque dignissimos ducimus. Deserunt cum inventore
          reiciendis cumque facilis atque accusantium, eligendi dolores laborum
          ut eaque nulla, corporis impedit voluptate possimus libero, quo ad non
          maxime architecto ex qui sequi vitae? Voluptate provident eos illum
          quibusdam obcaecati iste. Aperiam soluta omnis odio, id deleniti
          consequatur, suscipit, adipisci maxime vitae harum quisquam culpa in
          ducimus eligendi? Ducimus neque, reprehenderit exercitationem numquam
          tenetur sapiente aspernatur aliquam veritatis sit velit error ad rerum
          eveniet excepturi hic, eius eaque laboriosam ab repellat commodi esse,
          reiciendis quae? Quibusdam aperiam maxime repellat et neque voluptatem
          harum nobis, autem voluptates soluta? Placeat iusto laborum quasi
          fugit quas mollitia alias quis incidunt.
        </div>
      
      </div>
    </>
  );
}
