import PlayList from "../component/dashboard/playList";
import SideBar from '../component/dashboard/sideBar'

const DashboardPage = () => {
    return (
        <main className="bg-white flex p-4">
            <SideBar />
            <PlayList />
        </main>
    )
}

export default DashboardPage;