import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="135" r="125" /> 
    <rect x="1" y="276" rx="10" ry="10" width="280" height="25" /> 
    <rect x="4" y="318" rx="10" ry="10" width="280" height="88" /> 
    <rect x="7" y="423" rx="10" ry="10" width="95" height="27" /> 
    <rect x="123" y="423" rx="25" ry="25" width="153" height="45" />
  </ContentLoader>
)

export default Skeleton
