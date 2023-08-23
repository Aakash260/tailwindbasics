import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-blue-200 p-10'>
      {/* leftsection */}
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center align-middle p-10'>
          <h1>Hello,I am <i class='fas fa-code'></i> </h1>
          <h1>Aakash Nirwan</h1>
          <h1>Full Stack Developer</h1>
          <p>
            If you thing you can create a new things.
            <br />
            I am passionate about my work and always try to improve the things.
          </p>
          <div className='flex gap-x-5 mr-4'>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        {/* rightsection */}
        <div className="rightsection flex flex-col justify-center align-middle p-10">
          <img className='' src="https://lh3.googleusercontent.com/pw/AIL4fc8TNkbUiAG4-nCbJtHUf0kNoHPDLlLvTVc2LhSlYK5tVJ17CmzXkQ7jL2dvnjNr7RA8nn9grmxkjKqBOdd2mb3lig-JcLkTMpUgt7d5mHhlZkNLnLFxSpABxRKRLQUqMNzSNf6K70g6xu6RdNvC0n7w0nb54b7tVmytmlPH1lsD4MjLhzcVeyvdCtWGJgYqY2Zp3S0M3OqlFeKCyhEq2HCGFqi6O0kyJfbbJSJ870Rq0TXtl0AWWy0u46Co5xUsacAa-QBL12lCd-t03a9v-bbYMOXgh9j01_J1GLAuLPyovNpRX0Q963lvSAk0glDuACfPYxRE0_TWSwDt_Y855Uidye0tUiD0KVoAW08Plf0DQWBaGNITKVJfBcKcmjQ0AL_9UADkcE66phej9l1fIaJyZSJRWKRYlJUbMLzjAPn28w1wufpm0JckrHNlP8mX23VTiTiWaDKUrFBp2lM5upwW4TNyVvAvgMRP9BBB4XgxQFRAOoZz0SOqr7E0hF42yJ1zuHejlXga6-xOnpTinGbKLVZEH0mcTcR_MfAMyKv_giuxPWViql6SoD3t8zaN2O8bZ06PD0-ZHvzDoUX7Ymo6q6LevHqTDwzgh5pY7Zc_4y5AqDE2DmJbI6OhHnEBceNo-SAqUkjP42bIqMsug_o-bqZQapqDiEUzXauOklTON8XN5MoKnbG-vggdiArP6qiRgr4Sc07VlQRc_qyc4rEXWA-DD_kZsAj7QDHuYfQ5d1iSmOiTZTlCxGiC6_67Mf1ohoWLXv0hCLuCzQECgElvzaZS7C8w6qOV2R74gUwST0fmA7JCQ_SBj6toqG8ZMpR8F7aiqWl8HYQD-KkIW4Gg6XegT9W2aDup-ooIe-LD1-aGmqqmMkWp3FZ_tY6N369EW9SRa0H762sxSAO8Qg=w959-h720-s-no?authuser=0" alt="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection