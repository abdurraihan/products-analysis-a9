
import Barchart from '../BarChart/Barchart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashbord = () => {
      
   
    return (
        <div className='flex justify-start m-9 p-5 items-center'>

            <div >
            <MyLineChart> </MyLineChart>
            </div>

            <div>
                <Barchart></Barchart>
            </div>


        </div>
    );
};

export default Dashbord;