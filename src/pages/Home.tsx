import { Introduction } from '../components/Introduction'
import { Navbar } from '../components/Navbar'
import { About } from './About';
import { TimelinePage } from './Timeline';

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
      <TimelinePage></TimelinePage>
    </>
  )
}
