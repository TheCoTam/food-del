import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import { StoreContext } from "@/context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });

    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/myOrders");
    } else {
      toast.error(response.data.message);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoaderCircle className="text-rose-500 w-24 h-24 animate-spin" />
    </div>
  );
};

export default Verify;
