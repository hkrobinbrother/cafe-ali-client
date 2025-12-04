
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data =>{
    //        const popularItem = data.filter(item => item.category === "popular")
    //         setMenu(popularItem)})
    // },[])
    return (
        <section className='mb-12 flex flex-col justify-center items-center space-y-4'>
            <SectionTitle
            hading={"From Our Menu"}
            subheading={"popular Item"}
            ></SectionTitle>
            <div className='grid px-2 md:grid-cols-2 gap-12'>
                {
                    popular.map(item => <MenuItem 
                    item={item} key={item._id}
                    />)
                }
            </div>
             <button class="btn btn-outline btn-primary border-0 w-fit border-b-4">View Full Menu</button>
        </section>
        
    );
};

export default PopularMenu;