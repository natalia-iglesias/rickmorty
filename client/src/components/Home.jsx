import CharcaterCards from "./characterCards";
import Nav from "./Nav";
import SearchBar from './SearchBar'


export default function Home(){
   return(
    <div>
        <CharcaterCards/>
        <Nav/>
        <SearchBar/>
    </div>
   )
}