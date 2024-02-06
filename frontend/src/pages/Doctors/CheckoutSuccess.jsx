import { Link } from "react-router-dom"


const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6 md:mx-auto">
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center"> Payment Successfull</h3>
                <p className="text-gray-600 my-2">Thank you For Completing Your Secure Online Payment</p>
                <p>Have  A Great Day</p>
                <div className="py-10 text-center">
                    <Link to="/" className="px-12 bg-green-600 text-white font-semibold py-3">
                    Go Back To Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSuccess;