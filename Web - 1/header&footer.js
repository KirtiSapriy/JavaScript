document.querySelector("#header2").innerHTML = `
 <div id="logo" class="lg:w-3/12  h-full flex items-end pr-8 justify-evenly flex-col  sm:w-4/12"><img
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                                alt="" class="h-3/12 w-[80px]">
                        <div class="flex text-[13.5px]">
                                <a href="index.html">
                                        <span class="text-">Explore</span><span class="text-[#ffe500]">
                                                <i>
                                                        Plus</span>
                                        </i></a>
                        </div>
                </div>
                <div id="search"
                        class="lg:w-[40rem] h-full sm:w-3/12 relative items-center flex justify-evenly  sm:w-2/12 sm:hidden lg:block">
                        <input type="text" placeholder="Search for Products,Brands And More"
                                class="w-11/12 h-10 text-[#717478]  font-medium text-sm rounded-md bg-[#f0f5ff]  px-3  "><i
                                class="fa-solid fa-magnifying-glass absolute text-[#2874f0] right-[4rem] top-3 text-md   "></i>
                </div>
                <div id="nav" class="lg:w-5/12  h-full sm:w-3/12">
                        <nav class="w-full h-full ">
                                <ul class="w-full flex items-center h-full justify-evenly text-[1.2rem]">
                                        <li class="" onmouseenter="visible()" onmouseleave="vis()">
                                                <a href="login.html"><i
                                                                class="fa-solid fa-circle-user lg:hidden sm:inline"></i></a><a
                                                        href="login.html" class="relative sm:hidden lg:inline" id="bt1">
                                                        Login
                                                        <i class="fa-solid fa-angle-down" id="a"></i>
                                                        <i class="fa-solid fa-angle-up absolute top-1 right-[0.2px]"
                                                                id="a1"></i></a>

                                                <div class="w-[18.5rem] right-80 rounded-md bg-white text-black fixed top-[58px] z-20"
                                                        id="drop">
                                                        <p class="flex p-3 text-[20px]">New customer? <a
                                                                        href="sign up.html"
                                                                        class="ml-14 text-[#2a55e5] font-bold">Sign
                                                                        Up</a>
                                                        </p>
                                                        <hr class="border-2 my-1">
                                                        <ul class="p-3 text-lg">
                                                                <li class="mt-1"><i class="fa fa-circle-user mr-2">
                                                                        </i><a href="#">
                                                                                My
                                                                                Profile</a>
                                                                </li>
                                                                <li class="mt-1"><i class="fa-solid fa-plus mr-2">
                                                                        </i><a href="#">
                                                                                Flipkart
                                                                                Puls Zone</a></li>
                                                                <li class="mt-1"><i class="fa-solid fa-box mr-2">
                                                                        </i><a href="#">
                                                                                Orders</a></li>
                                                                <li class="mt-1"><i class="fa fa-heart mr-2">
                                                                        </i><a href="#">
                                                                                Wishlist
                                                                        </a>
                                                                </li>
                                                                <li class="mt-1"><i class="fa-solid fa-gift mr-2">
                                                                        </i><a href="">
                                                                                Reward</a></li>
                                                                <li class="mt-1"><i
                                                                                class="fa-regular fa-credit-card mr-2">
                                                                        </i><a href="">
                                                                                Gift Card</a></li>

                                                        </ul>
                                                </div>
                                        </li>
                                        <li><a href="cart.html"><i
                                                                class="fa fa-cart-shopping lg:hidden sm:inline"></i></a><a
                                                        href="cart.html" class="sm:hidden lg:inline"> Cart</a>
                                        </li>
                                        <li><a href="add.html"><i class="fa fa-store lg:hidden sm:inline"></i></a><a
                                                        href="add.html" class="sm:hidden lg:inline">
                                                        Become a Seller</a></li>
                                        <li onmouseleave="invi() " onmouseenter="visi()"><i
                                                        class="fa-solid fa-ellipsis-vertical"></i>

                                                <div class=" p-3 bg-white fixed top-14 z-20 right-10 text-black"
                                                        id="me">
                                                        <ul>
                                                                <li class="my-2"><a href="#">Notifiction
                                                                                Preferences</a>
                                                                </li>
                                                                <li class="my-2"><a href="#">24x7 Customer
                                                                                care</a></li>
                                                                <li class="my-2"><a href="#">Advertise</a></li>
                                                                <li class="my-2"><a href="#">Download Page</a>
                                                                </li>
                                                        </ul>
                                                </div>

                                        </li>

                                </ul>
                        </nav>
                </div>`


document.querySelector("#footer").innerHTML = `<div class="">
                <div class=" flex flex-wrap items-start  justify-evenly">
                        <div class=" w-28 p-2 flex text-[14px] flex-col  ">
                                <div class=" text-[#717478]">ABOUT</div>
                                <ul>
                                        <li class="my-2"><a href="#">Contact Us</a></li>
                                        <li class="my-1"> <a href="">About Us</a></li>
                                        <li class="my-1"> <a href="">Careers</a></li>
                                        <li class="my-1"> <a href="">Flipkart Stories</a></li>
                                        <li class="my-1"> <a href="">Press</a></li>
                                        <li class="my-1"> <a href="">Corporate Information</a></li>
                                </ul>

                        </div>
                        <div class=" w-40 p-2 flex flex-col text-sm ">
                                <div class="text-[#717478]">GROUP COMPANIES</div>

                                <ul>
                                        <li class="mt-2"><a href="">Myntra</a></li>
                                        <li class="mt-1"><a href="">Cleartrip</a></li>
                                        <li class="mt-1"><a href="">Shopsy</a></li>

                                </ul>



                        </div>
                        <div class=" w-36 p-2 flex flex-col text-sm ">
                                <div class=" text-[#717478]">HELP</div>
                                <ul>
                                        <li class="mt-2"><a href="">Payments</a></li>
                                        <li class="mt-1"><a href="">Shipping</a></li>
                                        <li class="mt-1"><a href="">Cancellation & Returns</a>
                                        <li>
                                        <li class="mt-1"><a href="">FAQ</a></li>
                                        <li class="mt-1"><a href="">Report Infringement</a></li>


                                </ul>





                        </div>
                        <div class=" w-36 p-2 flex flex-col text-sm ">
                                <div class=" text-[#717478]">CONSUMER POLICY</div>
                                <ul>
                                        <li class="mt-2"><a href="">Cancellation & Returns</a>
                                        <li class="mt-1"><a href="">Terms Of Use</a></li>
                                        <li class="mt-1"><a href="">Security</a></li>
                                        <li>
                                        <li class="mt-1"><a href="">Privacy</a></li>
                                        <li class="mt-1"><a href="">Sitemap</a></li>
                                        <li class="mt-1"><a href="">Grievance Redressal</a></li>
                                        <li class="mt-1"><a href="">EPR Compliance</a></li>



                                </ul>



                        </div>
                        <hr class="border h-60">
                        <div class=" w-60 p-2 flex flex-col text-sm ">
                                <div class="text-[15px] text-[#717478]">Mail Us:</div>
                                <div class="mt-2">
                                        <p class="_1oQ-r6">Flipkart Internet Private Limited,
                                                Buildings Alyssa, Begonia &
                                                Clove Embassy Tech Village,
                                                Outer Ring Road, Devarabeesanahalli Village,
                                                Bengaluru, 560103,
                                                Karnataka, India</p>
                                </div>
                                <div class="my-3 text-[15px] text-[#717478]">Social:</div>
                                <div class="flex">
                                        <div class="_2l3nc-"><a href="https://www.facebook.com/flipkart"
                                                        aria-label="Facebook"><img
                                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                                                alt="Facebook" width="24"
                                                                height="24"></a></div>
                                        <div class="_2l3nc-"><a href="https://www.twitter.com/flipkart"
                                                        aria-label="Twitter"><img
                                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                                                                alt="Twitter" width="24"
                                                                height="24"></a></div>
                                        <div class="_2l3nc-"><a href="https://www.youtube.com/flipkart"
                                                        aria-label="YouTube"><img
                                                                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg"
                                                                alt="YouTube" width="24"
                                                                height="24"></a></div>
                                </div>
                        </div>
                        <div class=" w-60 p-2 flex flex-col text-sm ">
                                <div class="text-[15px] text-[#717478]">Registered Office Address:</div>
                                <div class="mt-2">
                                        <p class="">Flipkart Internet Private Limited,
                                                Buildings Alyssa, Begonia &
                                                Clove Embassy Tech Village,
                                                Outer Ring Road, Devarabeesanahalli Village,
                                                Bengaluru, 560103,
                                                Karnataka, India
                                                CIN : U51109KA2012PTC066107</p>

                                        <p class="mt-3"> Telephone:
                                                <a class="text-[#2874f0]"
                                                        href="tel:044-45614700">044-45614700</a> /
                                                <a class="text-[#2874f0]"
                                                        href="tel:044-67415800">044-67415800</a>
                                        </p>
                                </div>
                        </div>
                </div>
                <div class="flex text-sm items-center justify-evenly mt-3">
                        <div class="flex m-2 items-center ">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
                                        class="m-2" alt="Become a Seller" width="13" height="12"><a
                                        href="https://seller.flipkart.com/?utm_source=fkwebsite&amp;utm_medium=websitedirect"
                                        aria-label="Become a Seller"><span>Become a Seller</span></a>
                        </div>
                        <div class="flex m-2 items-center">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
                                        class="m-2" alt="Advertise" width="14" height="14"><a
                                        href="https://brands.flipkart.com"
                                        aria-label="Advertise"><span>Advertise</span></a>
                        </div>
                        <div class="flex m-2 items-center">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
                                        class="m-2" ><span>Gift Cards</span></a>
                        </div>
                        <div class="flex m-2 items-center">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
                                class="m-2" ><span>Help Center</span></a>
                                        
                        </div>
                        <span class="">© 2007-2024 <span>Flipkart.com</span></span>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                                alt="Payment methods">
                </div>
        </div>`
