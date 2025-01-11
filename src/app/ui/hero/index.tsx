 import styles from "./index.module.scss"
//  import RevenueChartSkeleton from "./RevenueChartSkeleton";
 
//  const HeroContent = React.lazy(() => import("./HeroContent"));
{/* <Suspense fallback={<RevenueChartSkeleton />}>

</Suspense> */}
 export default function Hero() {
   return (
    <div className={styles.heroContainer}>
    <div className={styles.heroText}>
      <h1>Feel in Italy with our restaurant </h1>
      <p>You can feel happy with us</p>
    </div>
  </div>
   );
 };
