import RecitersScreen from './RecitersScreen'
import ChaptersScreen from './ChaptersScreen'
import PlayerScreen from './PlayerScreen'

const HomeScreen = () => {
  return (

    <div className="row p-5 home-body vh-100">
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <RecitersScreen/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <ChaptersScreen/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <PlayerScreen/>
      </div>
    </div>

  )
}

export default HomeScreen
