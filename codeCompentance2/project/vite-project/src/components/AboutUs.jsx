export default function AboutUs() {
   return (
      <>
         <div class="about-section bg-second-gray-2">
            <h2 className="text-white text-3xl font-extrabold flex justify-center flex-col items-center gap-2 mb-5">
               <div>
                  About <span className="text-primary-green ">Me </span>
               </div>

               <div className=" w-16 h-[0.35rem] bg-primary-green"></div>
            </h2>

            <div class="container mx-auto">
               <div class="flex flex-col md:flex-row">
                  <div class="md:w-1/3">
                     <p class="font-semibold text-2xl mb-2">
                        My <span class="text-green-500">Activity</span>
                     </p>
                     <ul>
                        <li>
                           Participants in Gemastik XV in User Experience Design
                           Field
                        </li>
                        <li>
                           Chairperson of the 2022 UKM Oikumene Joint Easter
                        </li>
                        <li>
                           Design Coordinator of the 2022 UKM Oikumene
                           Anniversary
                        </li>
                        <li>
                           Design Coordinator of Christmas with UKM Oikumene
                           2022
                        </li>
                     </ul>
                  </div>
                  <div class="md:w-1/3 text-center">
                     <img src="../src/assets/img/persona.png" alt="" />
                  </div>
                  <div class="md:w-1/3">
                     <p class="font-semibold text-2xl mb-2">
                        Story of <span class="text-green-500">my life</span>
                     </p>
                     <p>
                        Perkenalkan, nama saya Melki Jonathan Andara. Saat ini,
                        saya sedang menjalani pendidikan di Universitas Mataram
                        dan berada di semester 6 program studi Teknik
                        Informatika. Saya sangat tertarik dengan bidang
                        teknologi karena memiliki ilmu yang bisa diterapkan di
                        banyak bidang. Saya memiliki cita-cita untuk menjadi
                        seorang software engineer yang dapat membantu orang lain
                        dalam memecahkan masalah mereka melalui teknologi.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
