import {Link} from "react-router-dom";

export function Available(){
    return(
      <>
          <section className="bg-light" id="portfolio">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="text-uppercase section-heading mt-2" >Room</h2>
                          <h3 className="text-muted section-subheading" style={{margin: "0 0 20px"}}>"The best place is our Hotel"</h3>
                          <h3 className=" section-subheading text-success" style={{margin: "0px 0 35px",fontSize: "23px"}}>Promotion for first customer booking : 50% !!!</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal1" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img className="img-fluid" alt={"standard"} src={"https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/standard-room.jpg?alt=media&token=63c4edb3-7a35-410c-b296-c733172e0af2"}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Standard Room</h4>
                              <p className="text-muted">A well-appointed room with modern amenities, offering comfort and convenience with a choice of king-size or twin beds. Ideal for business travelers or short stays.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal2" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img alt={"standard"} className="img-fluid" src={'https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/dex-room.jpg?alt=media&token=a169c143-a513-48d4-99cc-40d165114d88'}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Deluxe Room</h4>
                              <p className="text-muted">Spacious rooms with enhanced décor and a touch of luxury. Includes a comfortable seating area, work desk, and stunning views of the city or sea.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal3" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img alt={"standard"} className="img-fluid" src={'https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/ex-room.jpg?alt=media&token=e832ebf7-d112-4de3-a5b4-a2a54535be6c'}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Executive Room</h4>
                              <p className="text-muted">Elegantly designed with additional space and premium services. Guests have access to executive lounges offering complimentary breakfast, snacks, and business facilities.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal4" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img alt={"standard"} className="img-fluid" src={'https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/suite.jpg?alt=media&token=a08fdd7d-2060-46cb-b4aa-79ca387c2a8f'}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Suite</h4>
                              <p className="text-muted">Expansive and luxurious suites with a separate bedroom and living room. Some suites may offer kitchenettes, dining areas, and additional guest services, ideal for longer stays or family trips.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal5" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img alt={"standard"} className="img-fluid" src={'https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/suite-big.jpg?alt=media&token=a9055a45-a8dc-49fb-95c2-f539ca37c56c'}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Presidential Suite</h4>
                              <p className="text-muted">The epitome of luxury, offering grand interiors, private dining areas, multiple rooms, and exclusive services like a personal butler. It’s designed for VIP guests seeking the highest level of comfort.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>

                          </div><img alt={"standard"} className="img-fluid" src={'https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/villa.jpg?alt=media&token=884beb65-c03b-40f0-ae02-c29e7b354361'}/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Villa</h4>
                              <p className="text-muted">For those looking for seclusion, luxury villas provide private entrances, pools, gardens, and expansive living spaces. Perfect for guests desiring exclusivity and privacy.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal1">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Standard Room</h2>
                                      <p className="text-muted item-intro">For people who loves the cheap to try the best place</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/standard-room.jpg?alt=media&token=63c4edb3-7a35-410c-b296-c733172e0af2"/>
                                      <p>The Standard Room offers a comfortable and budget-friendly accommodation option, ideal for solo travelers or couples. Key features of the Standard Room typically include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Room Size:</strong> Compact but well-designed, often between 20–25 square meters.</li>
                                          <li><strong>Bed Options:</strong> A queen bed or two twin beds, suited to accommodate up to two guests.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Air conditioning</li>
                                                  <li>Flat-screen TV with cable channels</li>
                                                  <li>Free Wi-Fi</li>
                                                  <li>Basic toiletries and linens</li>
                                                  <li>Mini-fridge and coffee/tea maker</li>
                                                  <li>Private bathroom with shower</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Clean, modern furnishings with a cozy layout and functional workspace.</li>
                                          <li><strong>Views:</strong> Usually offers city or interior views, depending on hotel location.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 2</li>
                                          <li>Pool : No</li>
                                          <li>Price: 400$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal2">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Deluxe Room</h2>
                                      <p className="text-muted item-intro">For people who loves the cheap to try the rich place</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/dex-room.jpg?alt=media&token=a169c143-a513-48d4-99cc-40d165114d88"/>
                                      <p>The Deluxe Room offers an upgraded experience, ideal for travelers seeking extra space and enhanced comfort. Key features of the Deluxe Room include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Room Size:</strong> Spacious layout, typically ranging from 30–40 square meters.</li>
                                          <li><strong>Bed Options:</strong> A king-size bed or two queen beds, comfortably accommodating up to three guests.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Air conditioning with climate control</li>
                                                  <li>Large flat-screen TV with premium cable channels</li>
                                                  <li>Free high-speed Wi-Fi</li>
                                                  <li>Premium toiletries, bathrobes, and slippers</li>
                                                  <li>Mini-fridge, coffee/tea maker, and sometimes a minibar</li>
                                                  <li>Seating area with a comfortable sofa or lounge chair</li>
                                                  <li>In-room safe and wardrobe space</li>
                                                  <li>Private bathroom with a bathtub and/or rain shower</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Elegant decor, featuring stylish furnishings and higher-end materials, often with a modern or classic aesthetic.</li>
                                          <li><strong>Views:</strong> Scenic views of the city skyline, garden, or nearby landmarks, depending on hotel location.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 4</li>
                                          <li>Pool : No</li>
                                          <li>Price: 500$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal3">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Executive Room</h2>
                                      <p className="text-muted item-intro">For people who loves VIP</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/ex-room.jpg?alt=media&token=e832ebf7-d112-4de3-a5b4-a2a54535be6c"/>
                                      <p>The Executive Room provides a luxurious and spacious setting, catering to business travelers and guests seeking premium amenities and exclusive services. Key features of the Executive Room include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Room Size:</strong> Generous space, typically ranging from 40–50 square meters.</li>
                                          <li><strong>Bed Options:</strong> King-size bed or two queen beds, suitable for up to three guests.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Advanced climate control and air purification system</li>
                                                  <li>Large flat-screen TV with premium channels and on-demand entertainment</li>
                                                  <li>Complimentary high-speed Wi-Fi and in-room workspace with ergonomic seating</li>
                                                  <li>Luxury toiletries, plush bathrobes, slippers, and upgraded linens</li>
                                                  <li>Mini-fridge, Nespresso machine, electric kettle, and stocked minibar</li>
                                                  <li>Spacious seating area, sometimes with a dining table</li>
                                                  <li>Walk-in closet or ample wardrobe space and in-room safe</li>
                                                  <li>Private bathroom with a deep-soaking tub and/or walk-in rain shower</li>
                                              </ul>
                                          </li>
                                          <li><strong>Exclusive Services:</strong>
                                              <ul>
                                                  <li>Access to the Executive Lounge with complimentary breakfast, snacks, and evening cocktails</li>
                                                  <li>Priority check-in/check-out and dedicated concierge service</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Refined decor with high-quality furnishings, featuring contemporary or classic themes, often with artistic touches and luxurious finishes.</li>
                                          <li><strong>Views:</strong> Panoramic views of the city, ocean, or resort grounds, providing an upscale, relaxing environment.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 4</li>
                                          <li>Pool : No</li>
                                          <li>Price: 600$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal4">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Suite</h2>
                                      <p className="text-muted item-intro">For people who loves the cheap and wide</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/suite.jpg?alt=media&token=a08fdd7d-2060-46cb-b4aa-79ca387c2a8f"/>
                                      <p>The Suite represents the pinnacle of luxury and space, designed for guests who want a high-end, immersive experience. Ideal for families, business travelers needing extra space, or guests seeking a luxurious stay. Key features of the Suite include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Room Size:</strong> Expansive layout, typically 60–100+ square meters, often including separate living and bedroom areas.</li>
                                          <li><strong>Bed Options:</strong> King-size bed in the master bedroom, with additional bedding options available upon request.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Separate living room with plush seating and often a dining area</li>
                                                  <li>Large flat-screen TVs in both living and bedroom areas with premium entertainment options</li>
                                                  <li>Complimentary high-speed Wi-Fi, work desk, and ergonomic chair</li>
                                                  <li>Premium toiletries, luxury bathrobes, and high-thread-count linens</li>
                                                  <li>Mini-bar, Nespresso machine, tea/coffee maker, and sometimes a kitchenette</li>
                                                  <li>Walk-in closet, ample storage, and in-room safe</li>
                                                  <li>Spacious bathroom with double vanity, deep-soaking tub, rain shower, and sometimes a jacuzzi</li>
                                              </ul>
                                          </li>
                                          <li><strong>Exclusive Services:</strong>
                                              <ul>
                                                  <li>Access to VIP amenities like the Executive Lounge or personal butler service</li>
                                                  <li>Complimentary breakfast, daily turndown service, and priority check-in/check-out</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Sophisticated, high-end decor with luxurious furnishings and curated artwork, often designed to provide a homelike comfort.</li>
                                          <li><strong>Views:</strong> Prime views of the city skyline, oceanfront, or resort landscapes, with floor-to-ceiling windows in select suites.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 6-8</li>
                                          <li>Pool : No</li>
                                          <li>Price: 1200$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal5">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Presidential Suite</h2>
                                      <p className="text-muted item-intro">For people who loves the cheap to try the best place</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/suite-big.jpg?alt=media&token=a9055a45-a8dc-49fb-95c2-f539ca37c56c"/>
                                      <p>The Presidential Suite is the most opulent accommodation option, offering unparalleled luxury, privacy, and space. Designed to provide an exclusive, five-star experience for high-profile guests, dignitaries, and VIPs, this suite offers a truly unforgettable stay. Key features include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Room Size:</strong> Vast layout, typically over 100 square meters, often encompassing multiple rooms such as a master bedroom, guest bedroom, living room, dining area, and office.</li>
                                          <li><strong>Bed Options:</strong> King-size bed in the master suite, with an additional bedroom or bedding options as required.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Expansive living room with designer furnishings and a grand dining area for entertaining</li>
                                                  <li>Multiple large-screen TVs with surround sound and premium streaming options</li>
                                                  <li>Complimentary high-speed Wi-Fi, dedicated office space with a private study, and ergonomic seating</li>
                                                  <li>Exquisite toiletries, plush bathrobes, luxury linens, and personalized pillow options</li>
                                                  <li>Fully stocked mini-bar, wine cooler, Nespresso machine, tea service, and kitchenette or pantry</li>
                                                  <li>Walk-in closets, dressing room, and private safe</li>
                                                  <li>Luxurious bathroom with double vanity, oversized jacuzzi, steam shower, and often a sauna</li>
                                              </ul>
                                          </li>
                                          <li><strong>Exclusive Services:</strong>
                                              <ul>
                                                  <li>Dedicated butler service, personal concierge, and 24-hour room service</li>
                                                  <li>Complimentary access to the VIP Executive Lounge or private dining room</li>
                                                  <li>Private check-in/check-out, airport transfer, and security services upon request</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Elegantly designed with custom furniture, curated artwork, and premium finishes, blending modern sophistication with timeless luxury.</li>
                                          <li><strong>Views:</strong> Breathtaking, panoramic views of the skyline, ocean, or mountains, with floor-to-ceiling windows and sometimes a private terrace or balcony.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 6-8</li>
                                          <li>Pool : Yes</li>
                                          <li>Price: 1500$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex="-1" id="portfolioModal6">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-8 mx-auto">
                                  <div className="modal-body">
                                      <h2 className="text-uppercase">Villa </h2>
                                      <p className="text-muted item-intro">For people who loves the VIllA</p><img alt={"standard"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/villa.jpg?alt=media&token=884beb65-c03b-40f0-ae02-c29e7b354361"/>
                                      <p>The Villa offers a private and luxurious retreat, perfect for families, groups, or travelers seeking an exclusive and secluded stay. With expansive indoor and outdoor spaces, the Villa provides all the comforts of home with the luxury of a high-end resort. Key features of the Villa include:</p>
                                      <ul className="list-unstyled">
                                          <li><strong>Size and Layout:</strong> Spacious, typically ranging from 150–300+ square meters, often including multiple bedrooms, bathrooms, a living area, dining space, and kitchen.</li>
                                          <li><strong>Bed Options:</strong> King-size beds in master and guest bedrooms, with additional beds available on request, comfortably accommodating larger groups or families.</li>
                                          <li><strong>Amenities:</strong>
                                              <ul className="text-start">
                                                  <li>Fully furnished living room with comfortable seating, entertainment center, and large-screen TV</li>
                                                  <li>Complimentary high-speed Wi-Fi, dedicated office or study area</li>
                                                  <li>Luxurious bathrooms with premium toiletries, bathrobes, and slippers</li>
                                                  <li>Fully equipped kitchen with modern appliances, including fridge, microwave, coffee maker, and sometimes a dishwasher</li>
                                                  <li>Private outdoor area, such as a terrace or garden, often featuring a private pool, hot tub, or outdoor seating</li>
                                                  <li>Walk-in closets or ample wardrobe space and secure in-room safe</li>
                                              </ul>
                                          </li>
                                          <li><strong>Exclusive Services:</strong>
                                              <ul>
                                                  <li>Personalized check-in/check-out and dedicated concierge or butler service</li>
                                                  <li>Option for in-villa dining with a private chef or catering</li>
                                                  <li>Housekeeping and turndown service, often with additional amenities for extended stays</li>
                                              </ul>
                                          </li>
                                          <li><strong>Design:</strong> Elegant, home-like decor with high-quality furnishings and tasteful interior design, combining comfort and sophistication.</li>
                                          <li><strong>Views:</strong> Scenic views of gardens, ocean, mountains, or resort landscapes, with a focus on privacy and tranquility.</li>
                                      </ul>
                                      <ul className="list-unstyled">
                                          <li>Max people: 6-8</li>
                                          <li>Pool : Yes</li>
                                          <li>Price: 2000$</li>
                                      </ul>
                                      <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}