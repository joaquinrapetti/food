import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DqRTh2yVMwpzkVN0KqISAI4U65LBOex1Zt3EQ5VdkgNSFVXGvmcBZMuWrr1dIRcq5bU9QswlnrnFvj6dwxujz8z7e-HNhjiZOXNchbqfJ4rXrWtYf0RPxtxlK56HYnYx",
  },
});
