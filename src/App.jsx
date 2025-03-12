import './App.css'
import logo from '/src/assets/logo.jpg';
import avt from '/src/assets/avt.jpg';
import avt1 from '/src/assets/avatar1.png';
import logoMauKhac from '/src/assets/logoMauKhac.jpg';

function App() {
  var menus = ['What to cook', 'Recipes', 'Ingredients', 'Occations', 'About Us'];
  var li1 = ['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Chrismas'];
  var li2 = ['Gift Subscription', 'Send Us Facebook'];
  var li3 = ['Our Cook', 'See Our Features', 'FAQ'];
  return (
    <>
      <header>
        <div className="container_full top w-full w-full bg-white">
            <div className="container flex flex-no-wrap">
              <div className='phanDau w-2/5 flex'>
                <div>
                      <img src={logo} alt="logo" className="logo w-40 mt-1" />
                  </div>
                  <div><input type="text" placeholder="Search" className="timKiem h-10 mt-2 ml-5 bg-gray-200 text-sm"/></div>
              </div>
              <div className="phanGiua w-6/12 flex">
                <ul className="menu w-full mt-5 flex ml-12">
                    {menus.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="">{item}</a>
                            </li>
                        )
                    })}
                </ul>
              </div>
              <div className="phanCuoi flex">
                <div>
                    <button className="yrb w-48 h-12 mt-1 bg-red-100 text-pink-400 text-sm">You Recipe Box</button>
                </div>
                <div>
                    <img src={avt} alt="avatar" className="avt w-12 mt-1 h-12 ml-12" />
                </div>
              </div>
          </div>
        </div>
      </header>
      <main>
      <div className='chuaGiua'>
        <div className='mDau'>
          <h1>Emma Gonzalez's Recipe Box</h1>
          <div className='cont'>
            <img src={avt1} alt="avatar 1" className='avt1'/>
            <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
          </div>
        </div>
        <div className='mCuoi'>
          
        </div>
      </div>
      </main>
      <footer>
        <div className="chuaHet">
          <div className="fTrai">
              <h2>About us</h2>
              <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
              <input type="text" placeholder="Enter your email" className='bg-white'/>
              <button>Send</button>
              <div className="fTraiPhiaDuoi">
                  <img src={logoMauKhac} alt="logo mau khac"/>
                  <div className="thongTinTrai">2023 Chefify company</div>
                  <div className="thongTinTrai">Term of Service| Privacy policy</div>
              </div>
          </div>
          <div className="fGiua">
              <div className="giuaTren">
                  <h2>Learn More</h2>
                  <ul>
                  {li3.map((item, index) => {
                          return(
                              <li key={index}>{item}</li>
                          )
                      })
                  }
                  </ul>
              </div>
              <div className="giuaDuoi">
                  <h2>Shop</h2>
                  <ul>
                  {li2.map((item, index) => {
                          return(
                              <li key={index}>{item}</li>
                          )
                      })
                  }
                  </ul>
              </div>
          </div>
          <div className="fPhai">
              <div className="giuaTren">
                  <h2>Recipes</h2>
                  <ul>
                      {li1.map((item, index) => {
                          return(
                              <li key={index}>{item}</li>
                          )
                      })}
                  </ul>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
