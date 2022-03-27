
import './Login.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    let navigate = useNavigate();


const SignUp = ()=>{

    navigate('/')
}

    return (
        

        <div>
            <div class="lg:flex" >


                <div class="hidden lg:flex items-center justify-center bg-#fff-100 flex-1 h-screen" id='form'>

                    <div class="text-center">
                        <h1 class="fs-1 " id='colourText'><b>PopStack</b></h1>
                        <br />
                        <h5 class="fs-4">Informed. In-Synch. On Target</h5>
                      
                        <br />
                        <br />
                        <img src="https://app.popstack.ai/assets/images/Storytelling.svg" />
                    </div>
                </div>



                <div class="lg:w-1/2 xl:max-w-screen-sm" >


                    <div class="py-10  flex justify-center lg:justify-start lg:px-10">
                       
                    </div>
                    
                    <div class="mt-10 px-6 sm:px-24 md:px-48 lg:px-6 lg:mt-16 xl:px-24 xl:max-w-2xl" >

                        <h6 id='colourText' class="text-4xl text-indigo-900 font-display  lg:text-left xl:text-4xl ">Sign In</h6>
                        <p class="lg:text-left xl:text-1xl">Welcome back to PopStack!</p>

                        {/* form */}
                        <div class="mt-12">
                            <form>
                                <div class="mt-8">
                                    <div class="flex justify-between items-center">
                                        <div class="text-gray-700 tracking-wide">
                                            <b>Email</b>
                                        </div>
                                    </div>
                                    <input class="w-full ml-1 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" />
                                </div>
                                <div class="mt-8">
                                    <div class="flex justify-between items-center">
                                        <div class="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                    </div>
                                    <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" />
                                </div>
                                <div>

                                    {/* Remender */}

                                    <div class="d-flex mt-1">

                                        <div class="p-2">
                                            <input type="checkbox" id="topping" name="topping" value="Paneer" />  Remember me
                                        </div>

                                        <div class="ml-auto p-2">
                                            <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer ">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Button */}
                                <div class="mt-10">
                                    <button id='button' type="submit" class="btn btn-block btn-primary-landing text-white" ng-disabled="FormSignIn.$invalid" disabled="disabled">Sign In</button>
                                </div>
                                {/* No Account */}
                                <div class="d-flex mt-3" >
                                    No account?<a class="cursor-pointer text-indigo-600 hover:text-indigo-800 " onClick={()=>SignUp()}> Sign Up</a>
                                </div>
                            </form>

                            {/* style={{ marginTop: "3%" }} */}
                            {/* <div class="mt-6 text-sm font-display font-semibold text-gray-700 text-center">
                            </div> */}
                            
                            <div class="logo">
                                <img src="https://app.popstack.ai/assets/images/PopStackLogoB.png" />
                            </div>

                            <p><a href='#' id='colourText'><u> Terms of Service</u> </a> © 2022, PopStack Inc.
                                <a href='#' id='colourText'> <u> Privacy Policy </u></a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}